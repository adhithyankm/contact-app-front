import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// 

import {  UserPlus } from 'react-feather';
import { Link } from 'react-router-dom';
// Facebook, Instagram, Twitter, 

function Header() {
    return (
        <div>

            <Navbar expand="lg" variant='dark'  className="bg-dark w-100 "  sticky='top'>
                <Container>

                    <Link to={''} style={{textDecoration:'none'}}>
                    <Navbar.Brand href="#home">CONTACT APP <span className='user'><UserPlus/></span> </Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    </Link>
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Service</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className='icons' style={{ justifyContent: "end" }}>
                        <Nav style={{ gap: "0.5rem", alignItems: "center" }}>

                            <Nav.Link href="#instagram"><Instagram color='white' /></Nav.Link>

                            <Nav.Link href="#home"><Twitter color='white' /></Nav.Link>

                            <Nav.Link href="#home"><Facebook color='white' /></Nav.Link>

                            


                        </Nav>

                    </Navbar.Collapse> */}


                </Container>
            </Navbar>
        </div>
    )
}

export default Header