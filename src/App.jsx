import Alert from "./components/Alert";
import PostPage from "./pages/PostPage";
import { useState, useEffect } from "react";
import PostContext from "./contexts/PostContext";
import { AlertProvider, useAlertContext } from "./contexts/AlertContext";

function AppContent() {
  const { setAlertData } = useAlertContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setAlertData({
          type: "error",
          message: err.message,
        });
      });
  }, []);
  return (
    <PostContext.Provider value={{ posts: posts }}>
      <Alert />
      <PostPage />
    </PostContext.Provider>
  );
}

export default function App() {
  return (
    <AlertProvider>
      <AppContent />
    </AlertProvider>
  );
}
