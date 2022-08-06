import LandingNav from "../components/Navbar/LandingNavbar.js"
import LandingHeader from "./LandingHeader/LandingHeader.js";
import LandingDemo from "./LandingDemo/LandingDemo.js";

export default function Landing() {
    return (
        <div>
            <LandingNav />
            <LandingHeader />
            <LandingDemo />
        </div>
    )
}

