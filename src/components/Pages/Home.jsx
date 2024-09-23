import React,{useEffect,useState} from 'react'
import appwriteService from '../../appwrite/appwriteConfig';
import { Container,PostCard } from '../index'

function Home() {
    const [posts,setPosts]=useState([])
   
    useEffect(()=>{
        appwriteService.getAllPosts()
        .then((posts)=>{
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])

    if (posts.length === 0) {
        return (
            <div className="w-100 py-5 mt-4 text-center">
                <Container>
                    <div className="d-flex flex-wrap">
                        <div className="p-2 w-100">
                            <h1 className="fs-2 fw-bold text-dark hover-text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-100 py-5'>
            <Container>
                <div className='d-flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-100'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home