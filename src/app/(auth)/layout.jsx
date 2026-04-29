import Navbar from "@/Components/Navbar";
import { monserat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`container mx-auto ${monserat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;