import PostContext from "../contexts/PostContext";
import { useContext } from "react";
export default function PostCard() {
  const { posts } = useContext(PostContext);
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="col">
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
