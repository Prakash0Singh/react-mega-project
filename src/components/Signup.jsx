import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Form, Link,useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button ,Input ,Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const dispatch=useDispatch();
    const { register, handleSubmit } = useForm();

    const create=async(data)=>{
        setError("");
        try {
            const userData = await authService.creataAccount(data)
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) {
                    dispatch(login(currentUser));
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
            <div className={`mx-auto w-100 custom-container`}>
            <div className="mb-2 d-flex justify-content-center">
                    <span className="d-inline-block w-100 logo-span">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center display-4 fw-bold">Sign up to create account</h2>
                <p className="mt-2 text-center text-muted">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="fw-medium text-primary  transition-hover"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-danger mt-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit" className="w-100">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
    </>
  )
}

export default Signup