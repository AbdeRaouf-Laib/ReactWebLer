
import React from "react";
import './toggle.css'
import { useState } from 'react';

function Toggle() {
    const [PgColor, setPgColor] = useState('white');
    const [Color, setColor] = useState('black');
    return (
        <div className="toggle">
            <link type="text/css" rel="stylesheet" href="index.css" />
            <div className="toggle-switch">
                <label onChange={()=>{setPgColor("black");
                setColor("white")}}>
                    <input type="checkbox" />
                    <span className="slider" />
                </label>
            </div>
        </div>
    );
}


export default Toggle;