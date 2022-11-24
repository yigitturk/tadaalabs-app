import './Cards.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';


function Cards(props){

    AOS.init({
        duration: 1000,
      });
    
    
    return (
        <div class="yigoray">
        <div class="container">
  <div data-aos="fade-up-right" class="card">
    <div class="box">
      <div class="content">
        <h2>Secondary Fee Utility</h2>
        <p>Secondary Fee Utility, Enforce people to purchase with paying fees
        <br></br>
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div data-aos="zoom-in-up" class="card">
    <div class="box">
      <div class="content">
        <h2>Staking & Raffle</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>

  <div data-aos="fade-up-left" class="card">
    <div class="box">
      <div class="content">
        <h2>Tadaa Launchpad</h2>
        <p>Awesome Launchpad</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>
        </div>
);

}
export default Cards;