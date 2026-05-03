'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInPage = () => {

    const [showPass, setShowPass] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (data) => {

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        })

        if (error) {
            alert(error.message)
        }
        else {
            alert('Sign in Success')
        }
    }



    return (
        <div className="h-screen">

            <div className=" bg-white w-[80vh] mx-auto p-20">
                <h2 className="text-4xl font-semibold text-[#403f3fFF] text-center mr-40  border-b w-full border-stone-200 pb-10">Login your account</h2>

                <form className="grid mt-8 mb-7 space-y-5" onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403f3fFF]">Email address</legend>
                        <input
                            type="text"
                            className="input w-full bg-[#f3f3f3FF] text-[#9f9f9fFF] p-6"
                            placeholder="Enter your email address"
                            {...register('email', { required: 'Email field is required' })}
                        />

                        {
                            errors.email && <p className="text-red-500">{errors.email.message}</p>
                        }

                    </fieldset>

                    <fieldset className="fieldset">

                        <legend
                            className="fieldset-legend text-xl font-semibold text-[#403f3fFF]"
                        >
                            Password
                        </legend>
                        
                         <div className="relative w-full">

                            <input
                                type={showPass ? "text" : "password"}
                                placeholder="Enter your Password"
                                className="w-full p-4 pr-12 bg-gray-100 rounded-lg outline-none"
                                {...register('password', { required: 'Password field is required' })}
                            />

                            <span
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </span>

                        </div>

                        {
                            errors.password && <p className="text-red-500">{errors.password.message}</p>
                        }

                    </fieldset>

                    <button className="btn bg-black text-white border-black">
                        Login
                    </button>
                </form>

                <div className="flex justify-center font-semibold">
                    <p>Dont’t Have An Account ?</p>
                    <Link href='/register' className="text-orange-400">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;