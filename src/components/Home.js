import React from 'react';
import './Home.css'
// import iceCream from '../iceCream.png'
const Home = () => {
  return (
    <header>
      {/* <h1>Ice Cream Brand Name</h1> */}
      <nav>
        <ul>
    
                
          <li><a href="/">Home</a></li>
          <li><a href="#offer">Offers</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#restaurant">Restaurant</a></li>
          <li><a href="#help">Help</a></li>
          {/* <li><a href="#login">Log in</a></li> */}
          
          <li><a href="#signup">Sign up</a></li>
          <li><a href="#cart">Cart</a></li>

          <li><a href="#footer">ContactUs</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Home;