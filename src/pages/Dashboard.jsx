import { useContext } from "react";
import PostItems from "../components/posts/PostItems";
import AuthContext from "../context/auth/authContext";
import PostContext from "../context/postContext/postContext";

const Dashboard = () => {
  const postContext = useContext(PostContext);
  const usersContext = useContext(AuthContext);

  const { posts, loading } = postContext;
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <main className="mx-auto container py-6  px-4">
      <h2 className=" text-right text-3xl my-4 text-blue-500 font-semibold">
        {usersContext.users?.username}
      </h2>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
        {posts && posts.map((post) => <PostItems key={post.id} post={post} />)}
      </div>
    </main>
  );
};

export default Dashboard;
