import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"

const POSTS_PATH = path.join(process.cwd(), "content/blog")

export async function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH)

  return Promise.all(
    files.map(async file => {
      const slug = file.replace(".mdx", "")
      return getPostBySlug(slug)
    })
  )
}

export async function getLatestPosts(limit: number) {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}

export async function getAllSlugs() {
  return fs.readdirSync(POSTS_PATH).map(file => file.replace(".mdx", ""))
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(source)

  const mdx = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  })

  return {
    slug,
    content: mdx.content,
    ...data,
  }
}
