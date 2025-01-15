interface Post {
  title: string
  brief: string
  slug: string
  publishedAt: string
  coverImage: string
}

export async function getPosts(username: string): Promise<Post[]> {
  const query = `
  query GetUserArticles($username: String!) {
    user(username: $username) {
      publications(first: 1) {
        edges {
          node {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { username } }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Response:', errorText)
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)
    }

    const { data, errors } = await response.json()

    if (errors) {
      console.error('GraphQL Errors:', errors)
      throw new Error(`GraphQL error: ${errors[0].message}`)
    }

    if (!data?.user?.publications?.edges[0]?.node?.posts?.edges) {
      console.error('Unexpected API response structure:', data)
      throw new Error('Unexpected API response structure')
    }

    return data.user.publications.edges[0].node.posts.edges.map((edge: any) => ({
      ...edge.node,
      coverImage: edge.node.coverImage?.url || ''
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

