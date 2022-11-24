import './Logo.css'
import React from 'react';
import logo from './images/tadaalabs_logo.png';

// target="_blank" ile linkler yeni sekmede açılır
console.log(logo);
function Logo(){
    return (
        <a href="http://localhost:3000/"> 
            <img src={logo} alt="" />
        </a>
         );
}

export default Logo;