import { BlogDirBody, BlogDirBodyProps } from "@/lib/blog/dir/body";
import { BlogDirEntry } from "@/lib/blog/type";
import { BlogGitLabRequest } from "../type";
import { BlogGitLabDirEntry } from "./entry";

type Props = BlogDirBodyProps<BlogGitLabRequest>;

const toEntry = (props: Props, entry: BlogDirEntry) => (
	<BlogGitLabDirEntry
		entry={entry}
		request={props.request}
		key={entry.name}
	/>
);

export const BlogGitLabDirBody = (props: Props): JSX.Element => (
	<BlogDirBody dir={props.dir} request={props.request} toEntry={toEntry} />
);
