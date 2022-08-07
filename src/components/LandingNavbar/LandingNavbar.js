import { Container, Title, Demo, ButtonContainer, ButtonTop } from './LandingNavbar.styles.js'
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingNav() {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container>
            <Title>Seraphina</Title>
            <Demo href='/#demo'>Demo</Demo>
            <ButtonContainer>
                <ButtonTop onClick={() => loginWithRedirect()}>
                    Try Free
                </ButtonTop>
            </ButtonContainer>
        </Container>
    )
}