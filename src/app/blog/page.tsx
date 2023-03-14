import React from "react";
import Link from "next/link";
import { env } from "~/env.mjs";
import { notion } from "~/server/notion";

const getPages = async () => {
  const { results: pages } = await notion.databases.query({
    database_id: env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });

  return pages;
};

const Blog = async () => {
  const pages = await getPages();
  return (
    <div className="container">
      <h1 className="text-4xl font-bold">A blog about stuff 🤔</h1>

      <div className="mt-4 flex gap-4">
        {pages.map((page) => (
          <a
            key={page.id}
            href={`/blog/${page.properties.Slug.rich_text[0].plain_text}`}
          >
            <div className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {page.properties.Name.title[0].plain_text}
              </h5>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
