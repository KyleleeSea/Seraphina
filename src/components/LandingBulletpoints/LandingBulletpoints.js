import { Row } from "react-bootstrap"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import { Text, CTAText, ButtonContainer, ButtonTop, Wrapper, InnerWrapper, CTAWrapper, Image } from "./LandingBulletpoints.styles"

// Gif icons
import style from '../../assets/style.gif'
import data from '../../assets/data.gif'
import genre from '../../assets/genre.gif'

import { useAuth0 } from "@auth0/auth0-react";

export default function LandingBulletpoints() {
    const { loginWithRedirect } = useAuth0();

    return (
        <Wrapper>
            <InnerWrapper>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col sm >
                            <Image src={data} />
                            <Text>Trained on the highest quality data</Text>
                        </Col>
                        <Col sm>
                            <Image src={style} />
                            <Text>Follows your writing style</Text>
                        </Col>
                        <Col sm>
                            <Image src={genre} />
                            <Text>Ready for any genre</Text>
                        </Col>
                    </Row>
                </Container>
                <CTAWrapper>
                    <CTAText>Upload. Unlock. Unblock.
                    </CTAText>
                    <ButtonContainer>
                        <ButtonTop onClick={() => loginWithRedirect()}>
                            Input Your Writing
                        </ButtonTop>
                    </ButtonContainer>
                </CTAWrapper>
            </InnerWrapper>
        </Wrapper>
    )
}