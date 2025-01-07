// app/page.js

import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '@/components/BlogCard';
import he from 'he';

import HeroSection from '@/components/HeroSection';

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
}`
;

export const revalidate = 10; // Revalidate every 10 seconds

function generatePreview(htmlContent, wordLimit = 50) {
  const textContent = htmlContent.replace(/<[^>]+>/g, ''); // Remove HTML tags
  const decodedText = he.decode(textContent); // Decode HTML entitie
  const words = decodedText.split(/\s+/); // Split into words
  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
}


export default async function Home() {
  const { posts } = await graphcms.request(QUERY);

  // Generate the preview for each post
  const postsWithPreview = posts.map((post) => ({
    ...post,
    preview: generatePreview(post.content.html),
  }));


  return (
    <div className="">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center">
        <HeroSection postsWithPreview={postsWithPreview} />
      </div>
      <header className="text-orange-50 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Latest Blog Posts</h1>
      </header>

      <main className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-7xl md:max-w-3xl max-w-[90vw] mx-auto w-full place-items-center" id='blog'>
        {postsWithPreview.slice().reverse().map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            datePublished={post.datePublished}
            slug={post.slug}
            preview={post.preview} // Pass the generated preview
          />
        ))}
      </main>
    </div>
  );
}