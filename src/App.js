import './App.css';
import {HashRouter as Router} from "react-router-dom";
import Menu from "./components/Menu";
import React from "react";
import "../src/css/main.css";

function App() {
    return (
        <Router>
            <Menu/>
        </Router>
    );
}

export default App;
