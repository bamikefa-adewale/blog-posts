import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/authContext";

const PostContext = createContext({
  posts: [],
  loading: false,
  allPosts: [],
});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);
  const { users } = context;
  console.log(users?.id);
  useEffect(() => {
    const getUserPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/posts/user/${users?.id}`
        );
        if (data) {
          setPosts(data.posts);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getUserPosts();
  }, [users?.id]);

  //   Get all Post
  useEffect(() => {
    const getAllPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://dummyjson.com/posts`);
        if (data) {
          setAllPosts(data.posts);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getAllPosts();
  }, []);

  console.log(allPosts);
  return (
    <PostContext.Provider value={{ posts, loading, allPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
