import { useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated'; // If using Contentlayer for MDX

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-[#0A21C0]">{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
