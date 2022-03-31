import Head from "next/head";
import { getPosts } from "./api/jsonplaceholder";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Images } from "../assets";
import { makeStyles } from "@mui/styles";

const Home = (props) => {
  // const useStyles = makeStyles(() => ({
  //   myLeftButton: {
  //     backgroundColor: "blue",
  //   },
  // }));

  // const classes = useStyles();

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} passHref>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Button>Bonjour</Button>
        <Button>Aurevoir</Button>
      </div>
      <div>
        <img className="navbar-logo" src={Images.imgTest} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
