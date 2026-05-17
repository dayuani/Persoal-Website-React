import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import { navLinks } from "../data/index.js";
import { NavLink } from "react-router-dom";



const NavbarComponents = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
      <Container fluid className="px-lg-5">
        
        {/* Logo Brand di Sebelah Kiri */}
        <Navbar.Brand href="#">Dayuani</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          {/* PROPERTI UTAMA: 
            'ms-auto' (Margin Start Auto) akan mendorong menu navigasi ini otomatis ke ujung kanan layar desktop.
            'text-center text-lg-start' membuat menu rata tengah di HP, tapi rapi di kanan saat layar laptop.
          */}
          <Nav className="ms-auto my-2 my-lg-0 text-center" navbarScroll>
            {navLinks.map((link) => (
              <Nav.Link 
                as={NavLink}
                to={link.path}
                key={link.id}
                className={({ isActive }) => isActive ? "nav-link active-custom" : "nav-link"}
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>

  )
}

export default NavbarComponents
