import { getPosts } from '../lib/api'
import BlogPostCard from './components/BlogPostCard'
import InfiniteScroll from './components/InfiniteScroll'

export const metadata = {
  title: 'Modern Blog - Home',
  description: 'Explore our latest blog posts on various topics',
}

export default async function Home() {
  const initialPosts = await getPosts(1, 6)

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      <InfiniteScroll initialItems={initialPosts} fetchMore={getPosts}>
        {(posts) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </InfiniteScroll>
    </div>
  )
}

