import { getPosts, getPostById } from "../api/jsonplaceholder";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <main>
        <Link href={"/"} passHref>
          <a>accueil</a>
        </Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}
