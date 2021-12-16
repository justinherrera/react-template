import React from 'react'
import Home from '../components/HomePage';
import Posts from '../components/Posts';
import Post from '../components/Post';
import NotFound from '../components/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/posts" element={ <Posts /> } />
                <Route path="/posts/:id" element={ <Post /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
