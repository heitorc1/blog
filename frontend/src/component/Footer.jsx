import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
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
                <p className="text-center text-muted">Heitor Carneiro - 2021</p>
            </div>

        )
    }
}