import React, {Component} from 'react';
import './aboutUs.css';

class aboutUs extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return (
    <body>

        <div class="about-section">
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <center>
            <h2>Our Teams</h2>
        </center>
       
<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
       
    </body>
        )
    }
}
export default aboutUs