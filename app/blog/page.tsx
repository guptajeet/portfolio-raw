import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

async function getBlogPosts() {
  const query = `
    query {
      user(username: "guptajeet") {
        publication {
          posts(page: 1) {
            title
            brief
            slug
            dateAdded
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.user?.publication?.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{new Date(post.dateAdded).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{post.brief}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={`https://guptajeet.hashnode.dev/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Read more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl mb-4">No blog posts found. Please check back later.</p>
          <Link href="https://guptajeet.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Visit Hashnode Blog
          </Link>
        </div>
      )}
    </div>
  )
}

