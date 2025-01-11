import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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

  const response = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.data.user.publication.posts;
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{new Date(post.dateAdded).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.brief}</p>
            </CardContent>
            <CardFooter>
              <Link href={`https://guptajeet.hashnode.dev/${post.slug}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

