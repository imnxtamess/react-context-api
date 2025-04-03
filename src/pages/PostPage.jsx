import PostsList from "../components/PostsList";

export default function PostPage() {
  return (
    <main>
      <div className="container text-center mt-5">
        <h1 className="mb-4">Posts</h1>
        <PostsList />
      </div>
    </main>
  );
}
