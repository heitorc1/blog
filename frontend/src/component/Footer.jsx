import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    render() {
        return (
            <Container className="d-flex flex-column pt-4">
                <Row className="line"></Row>
                <Row className="justify-content-center pt-3">
                    <ul className="nav">
                        <li className="nav-item footer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item footer">
                            <Link to="/post">Post</Link>
                        </li>
                        <li className="nav-item footer">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-item footer">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </Row>
                <Row className="justify-content-center pt-1">
                    <p className="text-center text-muted">Heitor Carneiro - {this.state.date.getFullYear()}</p>
                </Row>
                
            </Container>
        )
    }
}