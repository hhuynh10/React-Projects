import Header from "./Header";
import {Outlet} from "react-router-dom";
import React from 'react'

const Layout = () => {
    return (
        <div className="py-4 px-8 flex flex-col min-h-screen max-w-6xl mx-auto">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout