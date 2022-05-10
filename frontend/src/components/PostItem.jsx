import { useEffect,useState } from 'react'
import axios from 'axios'
import { get } from 'http'
const API_URL = '/api/comment/bypost/'
const API_URL2 = '/api/users/getuser/'

function PostItem({ post }) {
  const [comments,setComments] = useState([])
  const [names,setNames]= useState([])

  const updateComments = async() => {
    let res = await axios.get(API_URL+post._id) ;
    setComments(res.data) ;
  }
  const getusername = async(id) => {
    let res = await axios.get(API_URL2+id) ;
    const user= res.data ;
    return user.name ;
  }
  
  
  useEffect(async()=>{
    updateComments() ;
    console.log(comments)
  },[])

  return (
    <div className='goal'>
      <div>{new Date(post.createdAt).toLocaleString('en-US')}</div>
      <h2>{post.text}</h2>
      {
          comments.map((comment)=>(
          <>
          <h4>{comment.text}</h4>
          </>
          ))
      }
    </div>
  )
}

export default PostItem
