import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from "axios";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
}

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  return (
    <div className="prose">
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default Post

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string;
  const response = await axios.get<Post[]>(`${process.env.WPBLOG_URI}wp-json/wp/v2/posts?slug=${slug}`);
  const [post] = response.data;
  return {
    props: { post },
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