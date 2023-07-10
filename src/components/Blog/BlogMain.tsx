import { BlogAside, BlogGrid } from ".";
import {useState, useEffect} from "react";
import axios from "axios"

interface Props {
  totalPages: number
}

export const BlogMain = ({ totalPages }: Props) => {
  const [posts, setPosts] = useState<any[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(totalPages);
   
  useEffect( () => {
    async function fetchPosts(){
      const response = await axios.get(`https://optimmet.cl/headless-optimmet/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`);
      setPosts(response.data);
    }
    fetchPosts();
  },[page])

  //console.log(WP_URI)
  return(
    <section className="grid sm:grid-cols-6">
      <BlogAside posts={posts} setPosts={setPosts}/>
      <BlogGrid total={total} page={page} setPage={setPage} posts={posts}/>
    </section>
  )
}