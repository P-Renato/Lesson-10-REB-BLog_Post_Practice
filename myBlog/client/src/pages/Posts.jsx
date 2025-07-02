import NewPost from '../components/NewPost'
import PostsList from '../components/PostsList'

function Posts() {
  return (
    <div className='flex'>
      <NewPost />
      <PostsList />
    </div>
  )
}

export default Posts