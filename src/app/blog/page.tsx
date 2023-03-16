import React from "react";
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
    <div className="px-4 lg:px-0">
      <h1 className="text-4xl font-bold">A blog about stuff 🤔</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {pages.map((page) => (
          <a
            key={page.id}
            href={`/blog/${page.properties.Slug.rich_text[0].plain_text}`}
            className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {page.properties.Title.title[0].plain_text}
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur recusandae natus provident a aperiam quam, magni
              placeat incidunt voluptates quia, delectus harum dolor adipisci
              eveniet ipsum amet distinctio. In, facilis?
            </p>
          </a>
        ))}

        {/*  <div className="dark:bg-gray700 flex w-96 flex-col gap-6 rounded-lg bg-gray-100 p-6 font-normal">
          <div className="h-24 w-24 rounded-full bg-gray-500"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
