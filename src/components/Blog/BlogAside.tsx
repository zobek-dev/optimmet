import { InstagramFeed, SearchBar, Categories } from '.'

export const BlogAside = ({ setPosts, categories }: any) => {
  return (
    <aside className="py-12 lg:py-20 bg-white sm:col-span-2">
      <div className="px-4 lg:px-8 ml-auto sm:max-w-[400px] w-full flex flex-col gap-8">
        <SearchBar setPosts={setPosts} />
        <Categories categories={categories} setPosts={setPosts} />
        {/* <InstagramFeed feed={feed}/> */}
      </div>
    </aside>
  )
}
