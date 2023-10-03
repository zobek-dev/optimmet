import { useState } from "react";
import { WPBLOG_URI, POSTS_URL } from "@/constants";
import axios from "axios";

export const SearchBar = ({ setPosts }: any) => {
  const [searchTerm, setSearchTerm] = useState<string | "">("");

  const handleInput = (e: any) => {
    setSearchTerm(e.target.value);
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    async function getSearchPosts() {
      const response = await axios.get(
        `${WPBLOG_URI}${POSTS_URL}?search=${encodeURIComponent(searchTerm)}`
      );
      setPosts(response.data);
    }
    getSearchPosts();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Buscar en el Blog
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 py-3 pl-10 text-sm text-gray-900 border border-[#62CFF4] rounded-3xl"
              placeholder="Buscar en el blog..."
              value={searchTerm}
              onChange={handleInput}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white block bg-[#62CFF4] hover:opacity-70 border border-[#62CFF4] transition-colors duration-200 ease-in-out hover:text-[#62CFF4] hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl  px-8 py-2 my-4 float-right"
        >
          Búscar
        </button>
      </form>
    </div>
  );
};
