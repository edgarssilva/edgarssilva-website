import React, { cache } from "react";
import { n2m, notion } from "~/server/notion";

import { remark } from "remark";
import html from "remark-html";
import { env } from "~/env.mjs";
import { prisma } from "~/server/db";

export async function getStaticPaths() {
  const { results: pages } = await notion.databases.query({
    database_id: env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });

  return {
    paths: pages.map((page) => ({
      params: { slug: page.properties.Slug.rich_text[0].plain_text },
    })),
    fallback: false,
  };
}

const getPage = cache(async (slug: string) => {
  const { results: pages } = await notion.databases.query({
    database_id: env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
        {
          property: "Status",
          status: {
            equals: "Published",
          },
        },
      ],
    },
  });

  if (!pages) return { page: null, html: "" };
  const page = pages[0];
  if (!page) return { page: null, html: "" };

  const mdblocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdblocks);

  return { page, html: String(await remark().use(html).process(markdown)) };
});

const getStats = async (slug: string) => {
  let post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) {
    post = await prisma.post.create({
      data: {
        slug,
      },
    });
  }

  if (process.env.NODE_ENV === "development") {
    return post;
  }

  return await prisma.post.update({
    where: {
      id: post.id,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const { page, html } = await getPage(params.slug);
  const stats = await getStats(params.slug);

  return (
    <div className="min-h-screen">
      <h4 className="font-medium text-neutral-500">
        {new Date(page.properties.Date.date.start).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h4>
      <h1 className="my-2 text-6xl font-extrabold">
        {page.properties.Title.title[0].plain_text}
      </h1>
      <h4 className="font-medium text-neutral-500">{stats.views} views</h4>
      <article
        className="prose max-w-3xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Blog;
