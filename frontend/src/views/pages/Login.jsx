import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Topmenu from '../../component/Topmenu'
import Footer from '../../component/Footer'
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <Container fluid>
                <Topmenu></Topmenu>
                <Container className="d-flex justify-content-center">
                    <Form className="form">
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Container className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Container>
                    </Form>
                </Container>
                <Footer></Footer>
            </Container>
        )
    }
}