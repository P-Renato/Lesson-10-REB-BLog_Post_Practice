import { useEffect, useState } from "react"
import Post from "./Post";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:5001/posts/all")
      .then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(posts => setPosts(posts))
  }, [])

  return (
    <div className="p-6">
        <h1 className="text-3xl">Posts List:</h1>
        {posts.map(pst => <Post data={pst}/>)}
    </div>
  )
}

export default PostsList