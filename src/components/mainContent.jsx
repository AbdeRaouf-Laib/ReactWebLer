
import { useState } from 'react';

export default function MainContent(props) {
    const [PgColor, setPgColor] = useState('white');
    const [Color, setColor] = useState('black');
    return (
        <>
            <main style= {{background:PgColor, color:Color }}>
                {props.contentName} Page
            </main>
        
        </>
    )
}