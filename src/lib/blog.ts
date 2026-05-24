import { posts as localPosts, type BlogPost } from "@data/posts";

export type { BlogPost };

export const getPosts = async (): Promise<BlogPost[]> =>
  [...localPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
