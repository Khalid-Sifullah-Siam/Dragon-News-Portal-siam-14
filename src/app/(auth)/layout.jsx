import Navbar from "@/Components/Navbar";
import { montserat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`container mx-auto ${montserat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;