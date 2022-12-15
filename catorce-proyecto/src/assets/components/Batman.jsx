import React, { useState } from 'react';

const Batman = () => {
    const darkKnight = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaHmrjLQL3oIpbmL0Dv0ul41loGYYrCCylQ&usqp=CAU'
    const whiteKnight = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpN4eeb88JgGHJaBFQoV2WR9vQWt8E9_yH3yWN30tTwX9s6dxUV8ch9HOYiYBkzeQw5w&usqp=CAU'
    const [batman, setBatman] = useState(true) 
    const changeBatman = () => {
           setBatman(!batman)
    }    
    
    return (
    
        <div className='mainContainer' >
            <h1>I am the vengance</h1>
            <button className='bati-btn' onClick={changeBatman} >
                <img className='logoBatman' src="https://www.supercoloring.com/sites/default/files/styles/drawing_full/public/fif/2017/09/batman-logo-printable-template-paper-craft.png" alt="" />
                Dark Knight - White Knight
                <img className='logoBatman' src="https://www.supercoloring.com/sites/default/files/styles/drawing_full/public/fif/2017/09/batman-logo-printable-template-paper-craft.png" alt=""/>  </button>
            <img src={batman ? darkKnight : whiteKnight} alt="" />
        </div>
    );
};

export default Batman;