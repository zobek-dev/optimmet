import {PostCard} from "."

export const BlogGrid = ({posts, wp}:any) => {
  return(
    <div className="py-12 lg:py-20 sm:col-span-4"> 
      <div className="max-w-[866px] mr-auto px-4 bg-green-600 w-full">
        <ul>
          {posts && posts.map((post: any, wp: any)=> (
            <PostCard id={post.id} wp={wp} key={post.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}