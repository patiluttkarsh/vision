import { getRelatedPosts } from '../../lib/api'
import Link from 'next/link'
import Image from 'next/image'

const RelatedPosts = async ({ postId }) => {
  const relatedPosts = await getRelatedPosts(postId)

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedPosts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`} className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <div className="relative w-16 h-16">
              <Image
                src={post.thumbnail}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{post.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts

