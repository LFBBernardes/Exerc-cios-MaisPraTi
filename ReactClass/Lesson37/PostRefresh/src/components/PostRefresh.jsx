import { useState, useEffect } from "react";

function PostRefresh() {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(1);
  useEffect(() => {
    const FetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    };
    const interval = setInterval(() => {
      setPostId((lastPost) => lastPost + 1);
    }, 1000);
    FetchPosts();
    return () => {
      clearInterval(interval);
    };
  }, [postId]);
  return (
    <div>
      <h1>{post ? post.title : "carregando a notícia, aguarde:"}</h1>
      <p>{post ? post.body : ""}</p>
    </div>
  );
}

export default PostRefresh;
