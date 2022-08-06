import LandingNav from "./LandingNavbar/LandingNavbar.js"
import LandingHeader from "./LandingHeader/LandingHeader.js";
import LandingDemo from "./LandingDemo/LandingDemo.js";
import LandingBulletpoints from "./LandingBulletpoints/LandingBulletpoints.js";

export default function Landing() {
    return (
        <div>
            <LandingNav />
            <LandingHeader />
            <LandingDemo />
            <LandingBulletpoints />
        </div>
    )
}

