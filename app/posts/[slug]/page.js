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
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const { post } = await graphcms.request(QUERY, { slug });


    return (
        <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <article className="max-w-none mx-auto">
                {/* Header Section */}
                <header className="max-w-5xl mx-auto mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-50">
                        {post.title}
                    </h1>
                    <div className="flex items-center mb-8">
                        <img 
                            src={post.author.avatar.url} 
                            alt={post.author.name} 
                            className="w-12 h-12 rounded-full mr-4" 
                        />
                        <div>
                            <h2 className="text-lg text-orange-50">{post.author.name}</h2>
                            <p className="text-gray-400">
                                {new Date(post.datePublished).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img 
                            src={post.coverPhoto.url} 
                            alt={post.title} 
                            className="w-full h-[50vh] object-cover rounded-lg" 
                        />
                    </div>
                </header>

                {/* Article Content */}
                <div className="max-w-5xl mx-auto">
                    <div 
                        className="prose prose-lg md:prose-xl prose-invert mx-auto"
                        dangerouslySetInnerHTML={{ __html: post.content.html }} 
                    />
                </div>

                {/* Back Button */}
                <div className="max-w-5xl mx-auto mt-16">
                    <Link 
                        href="/" 
                        className="text-orange-500 hover:text-orange-400 transition-colors duration-200"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </article>
        </main>
    );
    
}