import React, { Component } from 'react'
import Topmenu from './Topmenu'
import Footer from './Footer'
import PreviewCard from './PreviewCard'
import Posts from './Posts'

import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Topmenu></Topmenu>
                <div className="d-flex m-3 flex-fill justify-content-around">
                    <PreviewCard src={img1}></PreviewCard>
                    <PreviewCard src={img2}></PreviewCard>
                    <PreviewCard src={img3}></PreviewCard>
                    <PreviewCard src={img3}></PreviewCard>
                    <PreviewCard src={img3}></PreviewCard>
                </div>
                <div className="container d-flex flex-column justfify-content-center">
                    <Posts></Posts>
                    <Posts></Posts>
                    <Posts></Posts>
                    <Posts></Posts>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default App