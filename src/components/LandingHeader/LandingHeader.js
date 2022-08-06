import { Headline, BackgroundImage, Subline, CenteringBox } from "./LandingHeader.styles"
import Button from "../Button/Button.js"

export default function LandingHeader() {

    return (
        <BackgroundImage>
            <CenteringBox>
                <Headline>Goodbye writer's block!</Headline>
                <Subline>Seraphina is an AI powered tool that sparks inspiration for your creative writing, whether you're stuck or simply searching for ideas</Subline>
                <Button />
            </CenteringBox>
        </BackgroundImage>
    )

}

