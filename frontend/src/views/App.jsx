import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './pages/Home'
import Post from './pages/Post'


import './App.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/post">
                        <Post></Post>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        )
    }
}