'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          placeholder="Leave a comment..."
          rows={3}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Submit
        </motion.button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
          >
            {comment.text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection

