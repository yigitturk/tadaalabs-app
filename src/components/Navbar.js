import './Navbar.css'
import React, { useState } from 'react';


function Navbar(props){

    
    const [scroll1,setScroll1] = useState();
    const [scroll2,setScroll2] = useState();
    const [scroll3,setScroll3] = useState();
    const [scroll4,setScroll4] = useState();
    window.onscroll = function() {scrollHandler()};

    var body = document.body,
    html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);


    const scrollHandler = () => {
        if (window.scrollY<=height/4*0.75){
            setScroll1('active');
            setScroll2('');
            setScroll3('');
            setScroll4('');
        }
        if (window.scrollY>height/4*0.75 && window.scrollY<=height/4*1.5 ){
            setScroll1('');
            setScroll2('active');
            setScroll3('');
            setScroll4('');
        }
        if (window.scrollY>height/4*1.5 && window.scrollY<=height/4*2.25 ){
            setScroll1('');
            setScroll2('');
            setScroll3('active');
            setScroll4('');
        }
        if (window.scrollY>height/4*2.25){
            setScroll1('');
            setScroll2('');
            setScroll3('');
            setScroll4('active');
        }
    }
    const clickHandler1 = () => {
        window.scrollTo({
            top: height/4*0,
            behavior: 'smooth'
        });
    }
    const clickHandler2 = () => {
        window.scrollTo({
            top: height/4*1,
            behavior: 'smooth'
        });
    }
    const clickHandler3 = () => {
        window.scrollTo({
            top: height/4*2,
            behavior: 'smooth'
        });
    }
    const clickHandler4 = () => {
        window.scrollTo({
            top: height/4*3,
            behavior: 'smooth'
        });
    }
    
    return (
        <div class="center">
            <div onscroll={scrollHandler} class="topnav">
            <b onClick={clickHandler1} class={scroll1}>Home</b>
            <b onClick={clickHandler2} class={scroll2}>Services</b>
            <b onClick={clickHandler3} class={scroll3}>Team</b>
            <b onClick={clickHandler4} class={scroll4}>Contact</b>
            </div>
        </div>
);

}
export default Navbar;