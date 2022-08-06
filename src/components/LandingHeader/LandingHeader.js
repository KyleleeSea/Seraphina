import { Container, BackgroundVideo, Headline, BackgroundImage, Subline } from "./LandingHeader.styles"
import LandingVideo from "../../assets/LandingVideo.mp4"

export default function LandingHeader() {

    return (
        <BackgroundImage>
            {/* <BackgroundVideo loop autoPlay muted>
                <source src={LandingVideo} type="video/mp4" />
            </BackgroundVideo> */}
            <Headline>Goodbye writer's block!</Headline>
            <Subline>Seraphina is an AI powered tool that sparks inspiration for your creative writing, whether you're stuck or simply searching for ideas</Subline>
        </BackgroundImage>
    )

}

