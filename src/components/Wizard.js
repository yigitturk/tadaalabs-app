import './Logo.css'
import React from 'react';
import wizard from './images/feetool.png';

// target="_blank" ile linkler yeni sekmede açılır

function Wizard(){
    return (
        <a class="center"> 
            <img id="wizard" src={wizard} class='wizard' alt="" />
        </a>
         );
}

export default Wizard;