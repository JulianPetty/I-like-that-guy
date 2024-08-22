// app/page.js

import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '@/components/BlogCard';

const graphcms = new GraphQLClient(
  'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clv2asljh2cj107wb5kux53kc/master'
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto { 
        url
      }
    }
  }
`;

export const revalidate = 10; // Revalidate every 10 seconds

export default async function Home() {
  const { posts } = await graphcms.request(QUERY);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          author={post.author}
          coverPhoto={post.coverPhoto}
          datePublished={post.datePublished}
          slug={post.slug}
        />
      ))}
    </main>
  );
}
