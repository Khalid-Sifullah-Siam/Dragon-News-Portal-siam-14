'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

    const [showPass, setShowPass] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const handleRegister = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name,
            image: photo,
            email,
            password,
            callbackURL: '/',
        }, {
            onSuccess: () => {
                router.push('/')
            }
        })

        if (error) {
            alert(error.message);
        }
        else {
            alert('Sign up Success')
        }

    }


    return (
        <div className="h-screen">

            <div className=" bg-white w-[80vh] mx-auto p-20">
                <h2 className="text-4xl font-semibold text-[#403f3fFF] text-center mr-40  border-b w-full border-stone-200 pb-10">Register your account</h2>

                <form className="grid mt-8 mb-7 space-y-5" onSubmit={handleSubmit(handleRegister)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403f3fFF]">Your Name</legend>
                        <input
                            type="text"
                            className="input w-full bg-[#f3f3f3FF] text-[#9f9f9fFF] p-6"
                            placeholder="Enter your name"
                            {...register('name', { required: 'Name field is required' })}
                        />

                        {
                            errors.name && <p className="text-red-500">{errors.name.message}</p>
                        }

                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-xl font-semibold text-[#403f3fFF]">Photo URL</legend>
                        <input
                            type="text"
                            className="input w-full bg-[#f3f3f3FF] text-[#9f9f9fFF] p-6"
                            placeholder="Enter your photo url"
                            {...register('photo', { required: 'Photo URL field is required' })}
                        />

                        {
                            errors.photo && <p className="text-red-500">{errors.photo.message}</p>
                        }

                    </fieldset>

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
                        Register
                    </button>
                </form>

                <div className="flex justify-center font-semibold">
                    <p>Already Have An Account ?</p>
                    <Link href='/login' className="text-orange-400">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
