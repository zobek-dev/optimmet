import { PostCard, Pagination } from "."
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";

interface Props{
  total: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>
}

export const BlogGrid = ({ total, page, setPage}: Props) => {
  const [posts, setPosts] = useState<any[] | null>(null);
   
  useEffect( () => {
    async function fetchPosts(){
      const response = await axios.get(`https://optimmet.cl/headless-optimmet/wp-json/wp/v2/posts?_embed&per_page=12&page=${page}`);
      setPosts(response.data);
    }
    fetchPosts();
  },[page])

  return(
    <div className="py-12 lg:py-20 sm:col-span-4"> 
      <div className="max-w-[950px] mr-auto px-4">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts && posts.map((post:any)=> (
            <PostCard id={post.id} key={post.id}/>
          ))}
        </ul>
        <Pagination page={page} setPage={setPage} total={total}/>
      </div>
    </div>
  )
}