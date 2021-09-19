import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PostsPreview.css'

export default class PostsPreview extends Component {    
    render() {
        return (
            <Row className="posts">
                <Col xs={3} className="d-flex align-items-center justify-content-center">
                    <img src={this.props.src} alt="imagem" className="img-posts img-fluid" />
                </Col>
                <Col xs={7} className="text-posts">
                    <Row>
                        <h2>Culpa elit officia aliquip anim tempor ad in.</h2>
                    </Row>
                    <Row>
                        <h5>Voluptate ipsum exercitation fugiat laboris do labore mollit veniam sint cupidatat nostrud velit cupidatat. Do sint duis occaecat nulla ea do tempor velit officia dolore fugiat id anim ut. Proident veniam qui fugiat nisi. Laborum duis consequat pariatur do cupidatat irure veniam Lorem laboris aliquip.</h5>
                    </Row>
                    <Row className="d-flex justify-content-end">
                        <Link to="/post">Continue lendo</Link>
                    </Row>
                </Col>
            </Row>
        )
    }
}