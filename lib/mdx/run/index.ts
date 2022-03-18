import { runSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime.js";
import { MDXContent } from "mdx/types";

interface Result {
	Content: MDXContent;
	title?: string;
	date?: string;
}

export const runMdx = (code: string): Result => {
	// Need to run sync so the server build also has full html
	const mdx = runSync(code, runtime);
	const { default: Content, title, date } = mdx;
	return { Content, title, date };
};