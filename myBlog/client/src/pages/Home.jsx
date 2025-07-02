import React from 'react'
import Post from '../components/Post'

const examplePost = {
  user: "user2",
  date: "02.07.2025:15:30:53",
  image: "https://picsum.photos/id/75/500/400",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officiis.",
  likes: 5,
};

function Home() {
  return (
    <div className='bg-blue-50 h-screen '>
       <div className="p-6 bg-white w-2/3 md:w-1/3 m-6">
        <h1 className="text-3xl">Home Page</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          repellat debitis? Doloremque asperiores sapiente quis porro? Unde
          reprehenderit amet consequatur laboriosam eligendi, molestias
          perspiciatis aliquam porro veniam. Cupiditate, repellendus illo!
        </p>
      </div>   
      <Post data={examplePost}     /> 
    </div>
  )
}

export default Home
