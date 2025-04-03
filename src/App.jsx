import Alert from "./components/Alert";
import PostPage from "./pages/PostPage";
import { useState, useEffect } from "react";
import PostContext from "./contexts/PostContext";
import AlertContext from "./contexts/alertContext";

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

  const alertData = { type: "info", message: "Hello from Context!" };
  return (
    <AlertContext.Provider value={alertData}>
      <PostContext.Provider value={{ posts: posts }}>
        <Alert />
        <PostPage />
      </PostContext.Provider>
    </AlertContext.Provider>
  );
}
