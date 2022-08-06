import { ButtonContainer, ButtonTop } from "./Button.styles"
import { useAuth0 } from "@auth0/auth0-react";

export default function Button() {
    const { loginWithRedirect } = useAuth0();

    return (
        <ButtonContainer>
            <ButtonTop onClick={() => loginWithRedirect()}>
                Try Free
            </ButtonTop>
        </ButtonContainer>
    )
}