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
  console.log("slug", slug);
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

  if (!pages) return "";
  const page = pages[0];
  if (!page) return "";

  const mdblocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdblocks);

  return String(await remark().use(html).process(markdown));
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const page = await getPage(params.slug);
  return (
    <article className="prose mx-auto">
      <h1>Test Blog</h1>
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </article>
  );
};

export default Blog;
