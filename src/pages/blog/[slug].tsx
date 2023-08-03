// import { GetStaticPaths, GetStaticProps } from "next";
// import axios from "axios";
// import moment from "moment";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Facebook, Linkedin } from "@/images";
// import { useRouter } from "next/router";
// import { WPBLOG_URI, POSTS_URL } from "@/constants"
// import Head from "next/head";
// import Script from "next/script"
// import { Seo } from "@/components";

// interface Post {
//   id: number;
//   title: { rendered: string };
//   content: { rendered: string };
//   date: string;
//   _embedded: {
//     "wp:featuredmedia"?: {
//       source_url: string;
//     }[];
//   };
//   featured_media: number;
//   slug: string;
//   author: number;
// }

// interface Props {
//   post: Post;
//   image: string;
//   author: string;
// }

// declare const IN: any;


// function Post({ post, image, author }: any) {
//   const published = moment(post.date).format("DD [de] MMMM [de] YYYY");
//   const [host, setHost] = useState<string | null >(null);

//   const router = useRouter();
  
//   useEffect(()=> {
//     if (typeof globalThis?.window !== undefined){
//       setHost(window.location.host);
//     }

//     if(typeof IN !== "undefined"){
//       IN.parse();
//     }
//   },[])

//   const handleShareClick = () => {
//     window.open(
//       `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//         'https://' + host + router.asPath
//       )}`,
//       "popup",
//       "width=600,height=600"
//     );
//   };
  
//   return (
//     <>
//     <Seo title={post.title.rendered} description={post.excerpt}/>
//     <Script
//         type="text/javascript"
//         src="//platform.linkedin.com/in.js"
//         async
//         defer
//       />
//     <div className="bg-white">
//       <div className="wrapper">
//         <div className="prose lg:prose-xl mx-auto py-28 lg:py-40">
//           {
//             image && (
//               <img
//                 src={image}
//                 alt={post.title.rendered}
//                 className="mx-auto rounded-2xl"
//                 loading="lazy"
//               />
//             )
//           }
          
//           <h1
//             className="text-[#556170] font-bold text-[35px] line-height-[1.2] pb-4 lg:pb-8 border-b border-[#62CFF4]"
//             style={{ marginBottom: "0" }}
//           >
//             {post.title.rendered}
//           </h1>
//           <span className="font-light text-sm text-center block">
//             Publicado {published}
//           </span>
//           <div
//             dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//             className="font-light text-[17px]"
//           />
//           <div>
//             <h3
//               className="text-[#556170] font-semibold leading-none"
//               style={{ fontSize: "20px" }}
//             >
//               Autor
//             </h3>
//             <span className="text-[17px] font-light">{author}</span>
//           </div>
//           <Link href="/blog/">Volver al Blog</Link>
//           <div className="flex justify-end gap-x-2 items-center">
//             <span className="text-[#556170] text-[20px]">Compartir en:</span>
//             <ul className="flex items-center gap-x-2" style={{ paddingLeft: '0'}}>
//               <Link
//                 href={`https://facebook.com/sharer.php?u=https://${host}${router.asPath}`}
//                 rel="noopener noreferrer"
//                 className="my-0 transition-opacity duration-200 ease-linear hover:opacity-70"
//                 target="_blank"
//               >
//                 <img
//                   src={Facebook.src}
//                   width={Facebook.width}
//                   height={Facebook.height}
//                   alt="facebook"
//                   style={{ marginTop: '0', marginBottom: '0'}}
//                   loading="lazy"
//                 />
//               </Link>
//               <button
//                 onClick={handleShareClick}
//                 className="my-0 transition-opacity duration-200 ease-linear hover:opacity-70"
//               >
//                 <img
//                   src={Linkedin.src}
//                   width={Linkedin.width}
//                   height={Linkedin.height}
//                   alt="linkedin"
//                   style={{ marginTop: '0', marginBottom: '0'}}
//                   loading="lazy"
//                 />
//               </button>
//             </ul>
//           </div>
          
//           <hr className="border-b border-[#62CFF4]"  style={{ marginTop: '0', marginBottom: '0'}}/>
//         </div>
//       </div>
//     </div>
//     </>   
//   );
// }

// export default Post;

// export const getStaticProps: GetStaticProps<Props> = async (context) => {
//   //console.log(context)
//   const slug = context.params?.slug as string;
//   const response = await axios.get<Post[]>(
//     `${WPBLOG_URI}/wp-json/wp/v2/posts?slug=${slug}`
//   );
//   const [post] = response.data;
//   const featuredimage = await axios.get<any>(
//     `${WPBLOG_URI}/wp-json/wp/v2/media/${post.featured_media}`
//   );
//   const dataAuthor = await axios.get<any>(
//     `${WPBLOG_URI}/wp-json/wp/v2/users/${post.author}`
//   );
//   const image = featuredimage.data.source_url;
//   const author = dataAuthor.data.name;

//   return {
//     props: { post, image, author },
//     revalidate:1
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await axios.get<Post[]>(
//     `${WPBLOG_URI}/wp-json/wp/v2/posts?fields=id,slug&per_page=30`
//   );
//   const posts = response.data;
//   const paths = posts.map((post) => ({
//     params: { slug: post.slug },
//   }));
//   return { paths, fallback: false };
// };


export default function Post(){
  return (
    <h1>Post</h1>
  )
}