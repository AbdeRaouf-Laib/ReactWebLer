
import React from "react";
import './toggle.css'
import { useState } from 'react';

function Toggle() {
    const setDarkMode = () =>{
        document.querySelector("main").setAttribute("data-theme","dark")
    };
    const setLightMode = () =>{
        document.querySelector("main").setAttribute("data-theme","light")
    };
    const toggleF = e => {
        if(e.target.checked)
            setDarkMode()
        else 
            setLightMode();
    }
    return (
        <div className="toggle">
            <link type="text/css" rel="stylesheet" href="index.css" />
            <div className="toggle-switch">
                <label onChange={toggleF}>
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
            </div>
        </div>
    );
}


export default Toggle;