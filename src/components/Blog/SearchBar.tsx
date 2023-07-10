import { useState } from "react";
import { WPBLOG_URI, POSTS_URL } from "@/constants";
import axios from "axios";

export const SearchBar = ({setPosts}:any) => {
  const [searchTerm, setSearchTerm] = useState<string | "">("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    async function getSearchPosts(){
      const response = await axios.get(`${WPBLOG_URI}${POSTS_URL}?search=${encodeURIComponent(searchTerm)}`);
      setPosts(response.data);
    }
    getSearchPosts()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Búscar en el blog"
        />
        <button>
          Buscar
        </button>
      </form>
    </div>
  );
};
