import React,{useEffect,useState} from 'react'
import { PostForm,Container } from '../index';
import appwriteService from '../../appwrite/appwriteConfig';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [posts,setPosts]=useState(null);
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug)
            .then((post)=>{
                if (post) {
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }        
    },[slug,navigate])

  return posts ? (
    <>
    <div className='py-5'>
        <Container>
            <PostForm post={posts}/>
        </Container>
    </div>
    </>
  ) :null;
}

export default EditPost