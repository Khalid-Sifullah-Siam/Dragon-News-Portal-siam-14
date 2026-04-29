import BreakingNews from "@/Components/BreakingNews";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;