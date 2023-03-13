import { type NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => (
  <>
    <h1 className="text-2xl">Go to the blog</h1>
    <Link className="text-blue-700" href="/blog">
      Here
    </Link>
  </>
);

export default Page;
