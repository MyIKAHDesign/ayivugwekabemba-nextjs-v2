import { useRouter } from 'next/router';
import { allPosts } from 'contentlayer/generated'; // If using Contentlayer for MDX
import { MDXRemote } from 'next-mdx-remote';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <MDXRemote {...post.body} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
