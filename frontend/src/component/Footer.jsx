import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import './Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    render() {
        return (
            <>
                <Row className="justify-content-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">Teste</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">Teste2</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link px-2 text-muted">Teste3</a>
                        </li>
                    </ul>
                </Row>
                <Row className="justify-content-center">
                    <p className="text-center text-muted">Heitor Carneiro - {this.state.date.getFullYear()}</p>
                </Row>
            </>
        )
    }
}