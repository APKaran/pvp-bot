import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.css'
export default function TopNav() {
  return (
    <div class="topnav" data-metrics-location="TN">
        <Navbar bg='default' expand='lg' className='navbar-default'>
            <Container>
                <Nav>
                    <Nav.Link className='link'>HOME</Nav.Link>
                    <Nav.Link className='link'>OUR ADVANTAGE</Nav.Link>
                    <Nav.Link className='link'>INVESTMENTS</Nav.Link>
                    <Nav.Link className='link'>COMPLIANCE SUPPORT</Nav.Link>
                    <Nav.Link className='link'>ADVISOR RESOURCES</Nav.Link>
                    <Nav.Link className='link'>INSIGHTS</Nav.Link>
                    <Nav.Link className='link'>ABOUT US</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
</div>
  )
}
