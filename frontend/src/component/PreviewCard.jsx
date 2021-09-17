import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


export default props => {
    return (
        <Card bg={'light'} border='secundary' style={{margin: '10px' }}>
            <Card.Img variant="top" src={props.src} style={{ padding: '10px' }}></Card.Img>
            <Card.Body>
                <Card.Title>Lorem proident laborum do aliquip culpa sit.</Card.Title>
                <Card.Link href="#">Leia mais</Card.Link>
            </Card.Body>
        </Card>
    )
}