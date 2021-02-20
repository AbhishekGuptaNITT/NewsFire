import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const header = (props) => {
    const nav = (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Navbar.Brand href="/">News Fire</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/aboutus'>About us</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Site managed by: <a target='__blank' href="https://www.linkedin.com/in/abhishek-gupta-6a1544191/">Abhishek Gupta</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
    return(
        <div>
            {nav}
        </div>
    )
}
export default header