import React, { Component } from 'react'
import Topmenu from '../../component/Topmenu'
import Footer from '../../component/Footer'
import Container from 'react-bootstrap/Container'

export default class Post extends Component {
    render() {
        return (
            <Container fluid>
                <Topmenu></Topmenu>
                <Container className="d-flex flex-column">
                    <Footer></Footer>
                </Container>
            </Container>
        )
    }
}