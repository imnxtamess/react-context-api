import PostPage from "./pages/PostPage";
import { useState, useEffect } from "react";
import PostContext from "./contexts/PostContext";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);
  return (
    <PostContext.Provider value={{ posts: posts }}>
      <PostPage />
    </PostContext.Provider>
  );
}
