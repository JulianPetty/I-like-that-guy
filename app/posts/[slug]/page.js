import Link from "next/link";
import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(
    'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clv2asljh2cj107wb5kux53kc/master'
);

const QUERY = gql`
  query post($slug: String!){
    post(where: {slug: $slug}){
        id, 
        title,
        slug,
        datePublished,
        author{
            id,
            name,
            avatar {
                url
            }
        }
        content {
            html
        }
        coverPhoto {
            id,
            url
        }
    }
}
`;

const SLUGLIST = gql`
    {
        posts{
            slug
        }    
    }
`


export async function generateStaticParams() {
    const { posts } = await graphcms.request(SLUGLIST);

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export const revalidate = 10; // Revalidate every 10 seconds


export default async function Page({ params }) {
    const slug = params.slug;
    const { post } = await graphcms.request(QUERY, { slug });


    return (
        <main className="max-w-7xl mx-auto py-16 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 self-start">{post.title}</h1>
            <div className="flex items-center mb-8 self-start">
                <img src={post.author.avatar.url} alt={post.author.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg">{post.author.name}</h2>
                    <p className="text-gray-600">{new Date(post.datePublished).toLocaleDateString()}</p>
                </div>
            </div>
            <div className="mb-8">
                <img src={post.coverPhoto.url} alt={post.title} className="w-auto h-[40vh] object-cover" />
            </div>
            <div className="post-content prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content.html }} />
            <Link href="/" className="text-blue-500 mt-8 inline-block">
                ← Back to Home
            </Link>
        </main>
    );
    
}