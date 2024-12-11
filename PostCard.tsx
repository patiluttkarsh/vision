'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PostCard = ({ post }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
    >
      <Link href={`/post/${post.id}`}>
        <div className="relative h-48">
          <Image
            src={post.thumbnail}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default PostCard

