import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import CreatePage from "./pages/CreatePage";

export default function Menu(props){

    return (
        <>
            <nav className="menu">
                <Link className="menu__item" to='/'> Posts </Link>
                <Link className="menu__item" to='/posts/new'> Create post </Link>
            </nav>

            <Routes>
                <Route exact path='/' element={<PostsPage/>}/>
                <Route exact path='/posts/new' element={<CreatePage/>}/>
            </Routes>
        </>
    );
}
