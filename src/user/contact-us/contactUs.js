import React, {Component} from 'react';
import './contactUs.css';
class contactUs extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return (
            <center>
            <div class="fcf-body">

            <div id="fcf-form">
            <h3 class="fcf-h3">Contact us</h3>
        
            <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">
                
                <div class="fcf-form-group">
                    <label for="Name" class="fcf-label">Your name</label>
                    <div class="fcf-input-group">
                        <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
                    </div>
                </div>
        
                <div class="fcf-form-group">
                    <label for="Email" class="fcf-label">Your email address</label>
                    <div class="fcf-input-group">
                        <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
                    </div>
                </div>
        
                <div class="fcf-form-group">
                    <label for="Message" class="fcf-label">Your message</label>
                    <div class="fcf-input-group">
                        <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                    </div>
                </div>
        
                <div class="fcf-form-group">
                    <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                </div>
        
              
        
            </form>
            </div>
        
        </div>
        </center>
        
        )
    }
}
export default contactUs