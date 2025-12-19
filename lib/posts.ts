import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import { MDXComponents } from "@/components/mdx/MDXComponents"

const POSTS_PATH = path.join(process.cwd(), "content/blog")

export async function getAllSlugs() {
  return fs
    .readdirSync(POSTS_PATH)
    .map(file => file.replace(".mdx", ""))
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf8")

  const { content, data } = matter(source)

  const mdx = await compileMDX({
    source: content,
    components: MDXComponents,
  })

  return {
    slug,
    content: mdx.content,
    title: data.title,
    description: data.description,
    image: data.image,
  }
}

export async function getAllPosts() {
  const slugs = await getAllSlugs()

  return Promise.all(
    slugs.map(slug => getPostBySlug(slug))
  )
}

export async function getLatestPosts(limit: number) {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}
