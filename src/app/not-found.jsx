"use client";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-4">
            
            {/* 404 Text */}
            <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">
                404
            </h1>

            {/* Message */}
            <p className="text-xl mb-6 max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Button */}
            <button
                onClick={() => router.push("/")}
                className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
            >
                Go Back Home
            </button>

        </div>
    );
};

export default NotFoundPage;