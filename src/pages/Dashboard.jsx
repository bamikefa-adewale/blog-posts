import { useContext } from "react";
import PostItems from "../components/posts/PostItems";
import PostContext from "../context/postContext/postContext";

const Dashboard = () => {
  const postContext = useContext(PostContext);

  const { posts, loading } = postContext;
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="mx-auto container py-6 grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
      {posts && posts.map((post) => <PostItems key={post.id} post={post} />)}
    </div>
  );
};

export default Dashboard;
