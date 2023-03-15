import React from "react";
import { n2m, notion } from "~/server/notion";

import { remark } from "remark";
import html from "remark-html";
import { env } from "~/env.mjs";

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

const getPage = async (slug: string) => {
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
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const { page, html } = await getPage(params.slug);
  return (
    <article className="prose mx-auto">
      <h1 className="text-6xl font-extrabold">
        {page.properties.Title.title[0].plain_text}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default Blog;
