import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';
import LoginButton from '../components/Login/LoginButton.js';
import LogoutButton from '../components/Logout/LogoutButton.js';

const Navigation = () => {
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
                    <Nav.Link href="/">Tokens: xyz</Nav.Link>
                </Nav>
            }
        </Navbar >
    );
}

export default Navigation;