import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Topmenu from '../../component/Topmenu'
import Footer from '../../component/Footer'
import './Login.css'

export default class Register extends Component {
    render() {
        return (
            <Container fluid>
                <Topmenu></Topmenu>
                <Container className="d-flex justify-content-center">
                    <Form className="form">
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="Enter your fist name" />
                        </Form.Group>
                        
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control placeholder="Enter your last name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Container className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                Create account
                            </Button>
                        </Container>
                    </Form>
                </Container>
                <Footer></Footer>
            </Container>
        )
    }
}