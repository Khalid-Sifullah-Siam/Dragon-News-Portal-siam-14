import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='space-y-4 py-12 text-center'>
            <Image src={logo} alt='logo' width={300} height={300} className='mx-auto' />
            <p className='text-lg text-[#706f6fFF]'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;