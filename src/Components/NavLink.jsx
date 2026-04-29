'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    return (
        <div>
            <Link className={`${pathName === href ? 'border-b-2 border-red-500 ' : ''}`} href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;