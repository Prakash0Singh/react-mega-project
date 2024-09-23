import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice'
import {Button ,Input, Logo} from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error,setError]=useState('');
    const login =async (data)=>{
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData=await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/");
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <>
        <div className='d-flex align-items-center justify-content-center w-100'>
            <div className={`mx-auto w-100 login-container`}>
                <div className='mb-2 d-flex justify-content-center' >
                    <span className=' d-inline-block w-100 logo-span'>
                        <Logo width='100%'/>
                    </span>
                </div>
                <h2 className='text-center fs-2 fw-bold lh-tight'>Sign in to your account</h2>
                <p className="mt-2 text-center fs-6">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="fw-medium text-primary transition-hover"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-danger mt-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-4'>
                    <div className='space-y-5'>
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
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password",{
                                required:true,
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-100'
                        >Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login