import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './PreviewCard.css'

export default class PreviewCard extends Component {
    render() {
        return (
            <Card bg={'light'} border='secundary' className="card">
                <Card.Img variant="top" src={this.props.src} className="image"></Card.Img>
                <Card.Body>
                    <Card.Title>Lorem proident laborum do aliquip culpa sit.</Card.Title>
                    <Card.Link href="#">Leia mais</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}