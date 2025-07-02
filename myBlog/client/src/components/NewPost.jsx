import React, { useState } from "react";

function NewPost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [autho, setAuthor] = useState("");
  const [likes, setLikes] = useState("");
  const [data, setDate] = useState("");



  const submitHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:5001/posts/add", {
            method: "POST",
            body: JSON.stringify({
              description, image, author: "renato", likes, date: (new Date()).toString().slice(0, 24),
            }), 
            headers: {
              "Content-type": "application/json"
            }
        })
        .then(res => {
              if(res.ok) {
                return res.json()
              }
            }).then(data => console.log(data))
  }
  return (
    <div className="my-12 min-w-3xs p-3 h-screen bg-gray-100">
        <h3 className="text-lg font-bold">Add New Post</h3>
        <p className="text-xs">Please fill out the form</p>
      <form className="flex flex-col gap-y-2 my-4" onSubmit={submitHandler}>
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="border border-gray-300 text-sm ps-2"
         onChange={(event) => setDescription(event.target.value)}
        />
        <input type="text" name="image" placeholder="Image URL" className="border border-gray-300" />
        <input type="submit" value="Add" className="border rounded bg-blue-400 text-white w-full py-1" />
      </form>
    </div>
  );
}

export default NewPost;
