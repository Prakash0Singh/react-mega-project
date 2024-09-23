import React from 'react'
import service from '../appwrite/appwriteConfig';
import { Link } from 'react-router-dom';

function PostCard({$id,title,featuredImage}) {
  return (
    <>
        <Link to={`/post/${$id}`}>
            <div className='w-100 bg-light rounded p-3 '>
                <div className='w-100 mb-4 d-flex justify-content-center'>
                    <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded p-3' />
                </div>
                <h2 className='fs-4 fw-bold'>{title}</h2>
            </div>
        </Link>
    </>
  )
}

export default PostCard