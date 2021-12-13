import React from 'react'
import Posts from '../components/Posts';
import NotFound from '../components/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Posts /> } />
                <Route path="*" element={ <NotFound /> } />
                {/* <Route path="posts" element={ <Posts /> } /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
