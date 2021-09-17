import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class PreviewCard extends Component {
    render() {
        return (
            <Card style={{ width: '30rem', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Enim aliqua id mollit quis laborum excepteur elit voluptate labore est id cillum.</Card.Title>
                    <Card.Text>
                        Aute occaecat consectetur ullamco ullamco est eu fugiat irure ad cupidatat occaecat nisi elit. Quis consequat aliquip nisi cillum consequat aliquip cillum eiusmod deserunt esse culpa. Dolor magna dolore nisi proident enim irure minim nostrud ipsum occaecat proident labore Lorem qui. Labore elit culpa ipsum eiusmod voluptate eiusmod eu cillum.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}