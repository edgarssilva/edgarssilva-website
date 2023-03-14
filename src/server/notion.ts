import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import { env } from "~/env.mjs";

export const notion = new Client({
  auth: env.NOTION_API_KEY,
  fetch: fetch,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });
