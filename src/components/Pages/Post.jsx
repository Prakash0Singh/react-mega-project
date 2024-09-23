import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/appwriteConfig";
import { Button, Container } from "../index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-5">
            <Container>
                <div className="w-100 d-flex justify-content-center mb-4 position-relative border rounded-3 p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-3"
                    />

                    {isAuthor && (
                        <div className="position-absolute end-6 top-0">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-success text-white" className="me-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-danger text-white" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-100 mb-5">
                    <h1 className="fs-2 fw-bold">{post.title}</h1>
                </div>
                <div className="">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}