import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import Post from './pages/Post'
import Register from './pages/Register'
import Login from './pages/Login'
import ScrollToTop from '../component/ScrollToTop';
import './App.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop></ScrollToTop>
                <Switch>
                    <Route path="/post">
                        <Post></Post>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        )
    }
}