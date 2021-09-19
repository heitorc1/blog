import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'
import Topmenu from '../../component/Topmenu'
import Footer from '../../component/Footer'
import './Post.css'
import img from '../../assets/img/img1.jpg'

export default class Post extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Topmenu></Topmenu>
                    <Container className="content d-flex flex-column justify-content-center">
                        <Row>
                            <Col>
                                <h2>Aliqua amet laboris tempor excepteur.</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Anim esse dolor eu consequat do exceteur dolore.</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Img src={img} fluid className="img"></Img>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    Culpa ad veniam excepteur cupidatat sunt. Nulla consectetur magna ipsum magna consequat exercitation commodo eu veniam. Duis do ipsum tempor nulla nostrud nulla commodo aute elit.
                                </p>
                                <p>
                                    Non pariatur nulla consectetur aliqua laborum aliqua laborum amet exercitation. Dolore laboris magna ullamco minim labore enim ullamco mollit dolor minim eiusmod ipsum. Anim culpa consequat nostrud ea pariatur voluptate. Irure eiusmod dolore ut nulla ipsum in elit dolore commodo ullamco nisi ipsum cillum nostrud. Ullamco et labore dolore est nostrud nostrud dolor dolor cillum consequat non non.
                                </p>
                                <p>
                                    Nostrud laborum incididunt ad deserunt voluptate occaecat. Cillum voluptate dolor pariatur et aute elit consectetur cillum esse reprehenderit irure. Nisi consequat sit sint id eu velit laboris culpa ipsum dolore veniam. Sunt non reprehenderit nulla in sit aliquip tempor.
                                </p>
                                <p>
                                    Ullamco nisi minim ex ea. Irure exercitation quis Lorem ex aute consectetur nulla nisi. Laboris nisi duis nulla minim Lorem dolor laborum. Dolor mollit cupidatat duis voluptate tempor sunt anim magna ullamco aliquip eu enim occaecat. Aliquip sit fugiat est amet ex labore pariatur.
                                </p>
                                <p>
                                    Pariatur aute excepteur consequat aute ea cupidatat do labore velit aliquip. Tempor ut esse irure amet nisi consequat mollit dolore. In dolore dolor incididunt tempor officia sit in officia do veniam proident veniam dolore ut. Fugiat aute laborum dolore nostrud aliqua sint occaecat tempor esse qui sunt. Tempor ipsum commodo nisi velit nisi laborum eiusmod ut nulla exercitation duis reprehenderit Lorem. Ad Lorem in amet occaecat qui proident.
                                </p>
                                <p>
                                    Eiusmod sunt officia ex proident eu aute cupidatat. Occaecat veniam nisi sit enim do consequat qui quis officia id. Aute adipisicing nostrud exercitation voluptate sint sit est duis laboris anim dolor duis eu. Laborum veniam commodo dolor commodo sint incididunt nisi ad eiusmod Lorem consequat magna qui.
                                </p>
                                <p>
                                    Velit eu ea ex velit non qui Lorem quis. Fugiat enim nulla dolore Lorem occaecat ipsum velit. Ea laboris dolor qui aute cupidatat proident cillum eiusmod irure enim et pariatur consequat. Ullamco occaecat ipsum pariatur est eu aliqua qui aliquip commodo cillum. Dolor commodo exercitation elit commodo enim velit non officia amet elit.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4 className="d-flex justify-content-end">
                                    Escrito por: Heitor
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                    <Footer></Footer>
                </Container>
            </>
        )
    }
}