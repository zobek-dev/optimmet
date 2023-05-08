import { GetStaticPaths, GetStaticProps } from 'next';
import axios from "axios";
import moment from "moment";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
  featured_media: number;
  slug: string;
  author: number;
}

interface Props {
  post: Post;
  image: string;
  author: string;
}



function Post({ post, image, author }: Props) {
  const published = moment(post.date).format('DD [de] MMMM [de] YYYY'); 
  console.log(post)
  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="prose lg:prose-xl mx-auto py-28 lg:py-40">
          <img src={image} alt={post.title.rendered} className="mx-auto rounded-2xl" loading="lazy"/>
          <h1 className="text-[#556170] font-bold text-[35px] line-height-[1.2] pb-4 lg:pb-8 border-b border-[#62CFF4]" style={{marginBottom:'0'}}>
            {post.title.rendered}
          </h1>
          <span className="font-light text-[12px] text-center">Publicado {published}</span>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className='font-light text-[17px]' />
          <div>
            <h3 className="text-[#556170] font-semibold leading-none" style={{ fontSize: '20px'}}>Autor</h3>
            <span className="text-[17px] font-light">{author}</span>
          </div>
        </div>
      </div>
    </div>
  );    
}

export default Post

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string;
  const response = await axios.get<Post[]>(`${process.env.WPBLOG_URI}wp-json/wp/v2/posts?slug=${slug}`);
  const [post] = response.data;
  const featuredimage = await axios.get<any>(`${process.env.WPBLOG_URI}wp-json/wp/v2/media/${post.featured_media}`);
  const dataAuthor = await axios.get<any>(`${process.env.WPBLOG_URI}wp-json/wp/v2/users/${post.author}`)
  const image = featuredimage.data.source_url;
  const author = dataAuthor.data.name
  console.log(author)

  return {
    props: { post, image, author},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Post[]>(`${process.env.WPBLOG_URI}wp-json/wp/v2/posts?fields=id,slug`);
  const posts = response.data;
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};