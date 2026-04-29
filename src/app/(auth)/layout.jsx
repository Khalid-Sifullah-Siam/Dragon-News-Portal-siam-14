import Navbar from "@/Components/Navbar";

const AuthLayout = ({children}) => {
    return (
        <div className="container mx-auto">
            <Navbar/>
            {children}
        </div>
    );
};

export default AuthLayout;