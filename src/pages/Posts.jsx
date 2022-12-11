import React, { useContext } from "react";
import PostItems from "../components/posts/PostItems";
import PostContext from "../context/postContext/postContext";

const Posts = () => {
  const postsContext = useContext(PostContext);
  const { allPosts, loading } = postsContext;
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <main className="mx-auto container p-4 grid md:grid-cols-4 grid-cols-1 gap-6">
      {allPosts &&
        allPosts
          ?.slice(0, 60)
          .map((post) => <PostItems key={post.id} post={post} />)}
    </main>
  );
};

export default Posts;
