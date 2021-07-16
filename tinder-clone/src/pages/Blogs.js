import React from "react";
import ReactDOM from "react-dom";
import Sidebar from '../components/Sidebar';

import '../App.css';

export default function Blogs() {
    let { id } = 12;
    return (
        <div className="Blogs">
            <Sidebar/>
            {/* Tinder Cards */ } 
            {/* Swipe Buttons Cards */ } 
            {/* Chat Screen */ } 
            {/* Individual Chat Screen */ } 
            <section className = "main">
                <h1>Let's Build React Blogs!</h1>
            </section>
        </div>
    );
}

export const BlogsID = function Blogs(props) {
    let { id } = 12;

    return (
        <div className="Blogs">
            <Sidebar/>
            {/* Tinder Cards */ } 
            {/* Swipe Buttons Cards */ } 
            {/* Chat Screen */ } 
            {/* Individual Chat Screen */ } 
            <section className = "main">
                <h1>Let's Build React Blogs for Child ID: {props.match.params.id}!</h1>
            </section>
        </div>
    );
}