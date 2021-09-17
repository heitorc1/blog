import React, { Component } from 'react'
import Topmenu from './Topmenu'
import Footer from './Footer'
import PreviewCard from './PreviewCard'
/*
import Content from './Content'
import Carousel from './Carousel'


import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'
*/
class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Topmenu></Topmenu>
                <div className="d-flex m-3 flex-wrap">

                        <PreviewCard></PreviewCard>
                        <PreviewCard></PreviewCard>
                        <PreviewCard></PreviewCard>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default App