import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";
import './Topmenu.css'

export default class Topmenu extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className="navigation">
                <Navbar.Brand>Blog do Heitor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto link">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/post">
                            Post
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}