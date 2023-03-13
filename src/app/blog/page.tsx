import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { env } from "~/env.mjs";
import { notion } from "~/server/notion";

type Page = {
  title: string;
  description: string;
  slug: string;
  date: string;
};

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
    <>
      {pages.map((page) => (
        <div key={page.id}>
          <h2>{page.properties.Name.title[0].plain_text}</h2>
          {/* <p>{page.properties.Description.rich_text[0].plain_text}</p> */}
        </div>
      ))}
    </>
  );
};

export default Blog;
