import Image from "next/image";
import NavLink from "./NavLink";
import userAvater from '@/assets/user.png'
import Link from "next/link";


const Navbar = () => {

    const navItems = [
        {
            href: '/',
            children: 'Home'
        },
        {
            href: '/about',
            children: 'About'
        },
        {
            href: '/carrier',
            children: 'Carrier'
        },
    ]
    return (
        <div className="flex justify-around">

            <div></div>
            <div className="flex gap-4">
                {
                    navItems.map((navItem, index) => <NavLink key={index} href={navItem.href} children={navItem.children}></NavLink>)
                }
            </div>

            <div className="flex justify-between items-center gap-2">
                <Image src={userAvater} alt='UserAvater' width={41} height={41} />
                <Link href={'/login'} className="bg-neutral text-white font-semibold text-xl py-2 px-6 rounded-2xl">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;