import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import LoginButton from '../Login/LoginButton.js';
import LogoutButton from '../Logout/LogoutButton.js';
// import { useTokensFetch } from "../hooks/useTokensFetch.js";

const Navigation = (props) => {
    // Utilizing Auth0 rules to access tokens 
    // const { tokens, setTokens } = useTokensFetch();

    const [width, setWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth)
    })

    return (
        <Navbar expand="lg" className={width >= 768 ? "mx-3" : "mx-2"}>
            < Navbar.Brand href="/generate" > Seraphina</Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                    <Nav.Link><LoginButton /></Nav.Link>
                    <Nav.Link><LogoutButton /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {width >= 1000 &&
                <Nav>
                    <Nav.Link href="/pricing">Tokens: {props.tokens}</Nav.Link>
                </Nav>
            }
        </Navbar >
    );
}

export default Navigation;