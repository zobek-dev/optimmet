import { PostCard, Pagination } from "."
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";

interface Props{
  total: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>
  posts: any
}

export const BlogGrid = ({ total, page, setPage, posts}: Props) => {
  
  return(
    <div className="py-12 lg:py-20 sm:col-span-4"> 
      <div className="max-w-[950px] mr-auto px-4">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts && posts.map((post:any)=> (
            <PostCard id={post.id} key={post.id}/>
          ))}
        </ul>
        <Pagination page={page} setPage={setPage} total={total} />
      </div>
    </div>
  )
}