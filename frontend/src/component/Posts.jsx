import React from 'react'
import './Posts.css'

import img1 from '../assets/img/img1.jpg'

export default props => {
    return (
        <div className="posts">
            <div className="row">
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <img src={img1} alt="imagem" className="img-posts"/>
                </div>
                <div className="col-7 text-posts">
                    <div className="row">
                        <h2>Culpa elit officia aliquip anim tempor ad in.</h2>
                    </div>
                    <div className="row">
                        <h5>Voluptate ipsum exercitation fugiat laboris do labore mollit veniam sint cupidatat nostrud velit cupidatat. Do sint duis occaecat nulla ea do tempor velit officia dolore fugiat id anim ut. Proident veniam qui fugiat nisi. Laborum duis consequat pariatur do cupidatat irure veniam Lorem laboris aliquip. Dolor sit sit et ad non consequat dolore minim et ad est qui excepteur. Velit cupidatat dolore dolore dolore sint mollit sint nisi ad ad voluptate labore consequat irure.</h5>
                    </div>
                </div>

            </div>

        </div>
    )
}