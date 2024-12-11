import fs from 'fs/promises'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'app', 'data')

export async function getPosts() {
  try {
    const filePath = path.join(dataDirectory, 'posts.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    const posts = JSON.parse(fileContents)
    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export async function getPostById(id: string) {
  try {
    const posts = await getPosts()
    return posts.find(post => post.id === id)
  } catch (error) {
    console.error('Error getting post by ID:', error)
    return null
  }
}

export async function getRelatedPosts(id: string) {
  try {
    const posts = await getPosts()
    return posts.filter(post => post.id !== id).slice(0, 3)
  } catch (error) {
    console.error('Error getting related posts:', error)
    return []
  }
}

