import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import facebookImage from '@/assets/fb.png'
import twitterImage from '@/assets/twitter.png'
import instragramImage from '@/assets/instagram.png'
import swimmingImage from '@/assets/swimming.png'
import classImage from '@/assets/class.png'
import playgroundImage from '@/assets/playground.png'
import backgroundImage from '@/assets/bg.png'


const SocialSidebar = () => {
    return (
        <div className="space-y-6 text-center lg:text-left">
            <h2 className="font-semibold text-xl">Login with</h2>


            <div className="grid gap-3 justify-items-center lg:justify-items-stretch">
                <button className="btn text-blue-500 border-blue-500 w-full max-w-xs lg:max-w-none">
                    <FaGoogle />
                    Login with Google
                </button>

                <button className="btn bg-white border-black w-full max-w-xs lg:max-w-none">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>

            <h2 className="font-medium text-xl">Find us on</h2>

            <div className="flex flex-col items-center lg:items-stretch">

                <button className="btn bg-white py-8 w-full max-w-xs lg:max-w-none justify-center lg:justify-start">
                    <div className="py-2 px-3 rounded-full bg-gray-100">

                        <Image src={facebookImage} alt='FacebookImage' width={10} height={1} />
                    </div>
                    Facebook
                </button>

                <button className="btn bg-white py-8 w-full max-w-xs lg:max-w-none justify-center lg:justify-start">
                    <div className="py-2 px-3 rounded-full bg-gray-100">

                        <Image src={twitterImage} alt='TwitterImage' width={10} height={1} />
                    </div>
                    Twitter
                </button>

                <button className="btn bg-white py-8 w-full max-w-xs lg:max-w-none justify-center lg:justify-start">
                    <div className="py-2 px-3 rounded-full bg-gray-100">

                        <Image src={instragramImage} alt='InstragramImage' width={10} height={1} />
                    </div>
                    Instragram
                </button>
            </div>

            <div className="bg-[#f3f3f3FF] p-4 space-y-5">
                <h2 className="font-medium text-xl">Q-Zone</h2>

                <Image src={swimmingImage} alt="SwimmingImage" width={400} height={200} className="mx-auto lg:mx-0" />
                <Image src={classImage} alt="ClassImage" width={400} height={200} className="mx-auto lg:mx-0" />
                <Image src={playgroundImage} alt="PlayGroundImage" width={400} height={200} className="mx-auto lg:mx-0" />

            </div>

            <Image src={backgroundImage} alt="BackGroundImage" width={400} height={200} className="mx-auto lg:mx-0" />

        </div>
    );
};

export default SocialSidebar;