'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/format-date'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface BlogPost {
  title: string
  brief: string
  slug: string
  publishedAt: string
  coverImage: string
}

export function BlogPosts({ posts }: { posts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.brief.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <Input
        type="search"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md mx-auto"
      />
      {filteredPosts.length === 0 ? (
        <p className="text-center text-muted-foreground">No posts found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              {post.coverImage && (
                <div className="aspect-video relative">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <Link
                  href={`https://guptajeet.hashnode.dev/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                </Link>
                <time className="text-sm text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </time>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.brief}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

