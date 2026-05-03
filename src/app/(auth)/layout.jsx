import Navbar from "@/Components/Navbar";
import { montserat } from "../layout";

const AuthLayout = ({ children }) => {
    return (
        <div className={`bg-slate-100 ${montserat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;