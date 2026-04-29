import { redirect } from 'next/navigation';

const HomePage = () => {
    return (
        redirect('newscatagory/01')
    );
};

export default HomePage;