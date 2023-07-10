import { InstagramFeed, SearchBar, Categories } from ".";

export const BlogAside = ({ posts, setPosts }:any) => {
  return(
    <aside className="py-12 lg:py-20 bg-white sm:col-span-2">
      <div className="px-4 lg:px-8 ml-auto sm:max-w-[400px] w-full">
        <SearchBar setPosts={setPosts}/>
        <Categories/>
        {/* <InstagramFeed feed={feed}/> */}
      </div>
    </aside>
  )
}