import { getPosts } from '@/lib/get-posts'
import { BlogPosts } from '@/components/blog-posts'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default async function Page() {
  try {
    const posts = await getPosts('guptajeet') // Replace with your Hashnode username

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Blog</h1>
        <BlogPosts posts={posts} />
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error instanceof Error ? error.message : 'An unexpected error occurred'}
          </AlertDescription>
        </Alert>
      </div>
    )
  }
}

