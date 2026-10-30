import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export function LayoutWithNavbarAndFooter({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
export function LayoutWithoutFooter({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}