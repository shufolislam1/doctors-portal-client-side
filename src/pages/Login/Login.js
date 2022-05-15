import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updteError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data)
        await signInWithEmailAndPassword(data.email, data.Password)
        await updateProfile({ displayName:data.name });
        navigate('/appoinment')
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="mx-auto text-3xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type='email'
                                placeholder='email'
                                class="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email'
                                        }
                                    },
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Password'
                                class="input input-bordered w-full max-w-xs"
                                {...register("Password",
                                    {
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 or long'
                                        }
                                    },
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors?.Password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                                {errors?.Password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;