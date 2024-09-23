import React,{useState,useEffect} from 'react'
import appwriteService from '../../appwrite/appwriteConfig';
import { Container,PostCard } from '../index';
function AllPost() {
    const [post ,setPost]=useState([]);
    useEffect(()=>{

        appwriteService.getPost([])
        .then((post)=>{
            if (post) {
                setPost(post.documents)
            }
        })
    },[])
        
  return (
    <div className='w-100 py-5'>
        <Container>
            <div className='d-flex flex-wrap'>
                {post.map((post)=>(
                    <div key={post.$id} className='p-2 col-3'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost