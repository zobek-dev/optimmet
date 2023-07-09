import { BlogAside, BlogGrid } from ".";
import {useState} from "react";

interface Props {
  total: number
}

export const BlogMain = ({ total}: Props) => {

  const [page, setPage] = useState(1);
  //console.log(WP_URI)
  return(
    <section className="grid sm:grid-cols-6">
      <BlogAside />
      <BlogGrid total={total} page={page} setPage={setPage}/>
    </section>
  )
}