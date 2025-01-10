import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const blogPosts = [
  {
    title: '5 Linux Commands Every Admin Should Know',
    description: 'Explore essential Linux commands that will boost your productivity as a system administrator.',
    date: '2023-05-15',
    slug: '5-linux-commands-every-admin-should-know',
  },
  {
    title: 'Automating AWS Infrastructure with Terraform',
    description: 'Learn how to use Terraform to create and manage your AWS infrastructure as code.',
    date: '2023-06-02',
    slug: 'automating-aws-infrastructure-with-terraform',
  },
  {
    title: 'Docker Best Practices for Production Environments',
    description: 'Discover key Docker practices to ensure your containers are secure, efficient, and production-ready.',
    date: '2023-06-20',
    slug: 'docker-best-practices-for-production',
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

