
import React from "react";
import './toggle.css'
import { useState,useReducer } from 'react';
import { type } from "@testing-library/user-event/dist/type";

    const reducer = (Mode,action) =>{
        switch(action.type){
            case "lightMode":
                return {mode: "dark"};
            case "darkMode":
                return {mode: "light"};
            default:
                return {mode: "light"}
        }
    }
function Toggle() {

    const [Mode,deispatch] = useReducer(reducer,{mode: "light"})
    const setDarkMode = () =>{
        document.querySelector("main").setAttribute("data-theme",Mode.mode)
    }
    const setLightMode = () =>{
        document.querySelector("main").setAttribute("data-theme",Mode.mode)
    };
    const toggleF = e => {
        if(e.target.checked)
           deispatch({type: "lightMode"})
        else 
            deispatch({type: "darkMode"})
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