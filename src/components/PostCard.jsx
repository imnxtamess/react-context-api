import { useState, useEffect } from "react";

export default function PostCard() {
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

  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div key={posts.id} className="col">
          <div className="card">
            <div className="card-body ">
              <h4>{post.title}</h4>
              <img src={post.image} alt={post.title} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
