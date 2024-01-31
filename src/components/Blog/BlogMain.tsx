import { BlogAside, BlogGrid } from '.'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface Props {
  totalPages: number
}

export const BlogMain = ({ totalPages }: Props) => {
  const [posts, setPosts] = useState<any[] | null>(null)
  const [page, setPage] = useState(1)
  const [categories, setCategories] = useState<any[] | null>(null)
  const [total, setTotal] = useState(totalPages)

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        `https://optimmet.cl/headless-optimmet/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`
      )
      setPosts(response.data)
    }
    fetchPosts()
  }, [page])
  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get(
        `https://optimmet.cl/headless-optimmet/wp-json/wp/v2/categories`
      )
      setCategories(response.data)
    }
    fetchCategories()
  }, [])

  console.log(categories)
  return (
    <section className="grid sm:grid-cols-6">
      <BlogAside setPosts={setPosts} categories={categories} />
      <BlogGrid total={total} page={page} setPage={setPage} posts={posts} />
    </section>
  )
}
