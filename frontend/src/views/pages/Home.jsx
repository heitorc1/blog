import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Topmenu from '../../component/Topmenu'
import Footer from '../../component/Footer'
import PreviewCard from '../../component/PreviewCard'
import PostsPreview from '../../component/PostsPreview'

import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Topmenu></Topmenu>
                <Container fluid className="d-flex justify-content-between">
                    <PreviewCard src={img1}></PreviewCard>
                    <PreviewCard src={img2}></PreviewCard>
                    <PreviewCard src={img3}></PreviewCard>
                    <PreviewCard src={img1}></PreviewCard>
                </Container>
                <Container className="d-flex flex-column text-align-center justfify-content-center">
                    <PostsPreview src={img1}></PostsPreview>
                    <PostsPreview src={img2}></PostsPreview>
                    <PostsPreview src={img3}></PostsPreview>
                    <PostsPreview src={img1}></PostsPreview>
                    <PostsPreview src={img2}></PostsPreview>
                </Container>
                <Footer></Footer>
            </Container>
        )
    }
}