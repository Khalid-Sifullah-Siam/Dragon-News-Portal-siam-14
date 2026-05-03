'use client';
import Image from "next/image";
import NavLink from "./NavLink";
import userAvater from '@/assets/user.png'
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const navItems = [
        { href: '/', children: 'Home' },
        { href: '/about', children: 'About' },
        { href: '/carrier', children: 'Carrier' },
    ]

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const handleSignOut = async() => {
        await authClient.signOut();
        alert('SignOut Success')
    }

    console.log(user)
    return (
        <div className="flex justify-between items-center py-4 px-6 relative lg:justify-around">

<div className="hidden lg:block"></div>


            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>


            <div className="hidden lg:flex lg:gap-4">
                {navItems.map((navItem, index) => (
                    <NavLink key={index} href={navItem.href}>
                        {navItem.children}
                    </NavLink>
                ))}
            </div>


            {isMenuOpen && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg flex flex-col items-start px-6 py-4 z-10 space-y-4 border-t">
                    {navItems.map((navItem, index) => (
                        <NavLink key={index} href={navItem.href}>
                            {navItem.children}
                        </NavLink>
                    ))}
                </div>
            )}

            
            <div className="flex items-center gap-2">
                { isPending ? <span className="loading loading-dots loading-xl "></span> :
                    user ?
                    <div className="flex justify-center items-center gap-4">
                        <Image src={user?.image} alt="user" width={40} height={40} />
                     <p className="font-semibold" >{user.name}</p> 
                     <button onClick={handleSignOut} className="bg-neutral text-white font-semibold text-lg py-2 px-4 rounded-2xl">SignOut</button>
                    </div>
                     : 
                <div className="flex gap-4">
                <Image src={userAvater} alt='UserAvater' width={41} height={41} />
                <Link href={'/login'} className="bg-neutral text-white font-semibold text-lg py-2 px-4 rounded-2xl">
                    Login
                </Link>
                </div>
                }
            </div>
        </div>
    );
};

export default Navbar;