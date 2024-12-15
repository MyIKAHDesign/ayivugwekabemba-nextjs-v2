// lib/api.ts

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  // In a real application, you would fetch this from your database
  // For now, we'll return the dummy data if it matches
  if (slug === BLOG_POST.slug) {
    return BLOG_POST;
  }

  // Handle 404 case
  throw new Error("Post not found");
}
