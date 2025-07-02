import React from 'react'

function Post({data: {user, date, image, description, likes}}) {
  return (
    <div className='post w-xs border border-gray-600 p-2 '>
      <div className="top flex justify-between text-gray-400 text-sm p-2">
            <p className="user">{user}</p>
            <p className="date">{date}</p>
        </div>
        <div className="center">
            <img src={image} alt="post image" className='rounded' />
            <p className="text-sm mt-4 mb-2">{description}</p>
        </div>
        <div className="bottom">
          <span>👍 <span className='text-xs text-blue-600'> {likes} </span> </span>
        </div>
    </div>
  )
}

export default Post
