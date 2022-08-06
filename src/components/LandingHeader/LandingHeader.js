import { Headline, BackgroundImage, Subline, CenteringBox, ButtonContainer, ButtonTop } from "./LandingHeader.styles"
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingHeader() {
    const { loginWithRedirect } = useAuth0();

    return (
        <BackgroundImage>
            <CenteringBox>
                <Headline>Goodbye writer's block!</Headline>
                <Subline>Seraphina is an AI powered tool that sparks inspiration for your creative writing, whether you're stuck or simply searching for ideas</Subline>
                <ButtonContainer>
                    <ButtonTop onClick={() => loginWithRedirect()}>
                        Try Free
                    </ButtonTop>
                </ButtonContainer>
            </CenteringBox>

        </BackgroundImage>
    )

}

