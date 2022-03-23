import Head from "next/head";
import { getPosts } from "./api/jsonplaceholder";
import Link from 'next/link';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <ul>
        {props.posts.map((post) => (
          <li key={post}>
            <Link href={`/blog/${post.id}`} passHref>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
