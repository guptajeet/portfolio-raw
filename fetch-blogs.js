import fetch from 'node-fetch';

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

async function fetchBlogPosts() {
  try {
    const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
}

fetchBlogPosts();

