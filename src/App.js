import React, { Component } from 'react';
import firebase from './config/firebase'
import './App.css';
import { isElementOfType } from 'react-dom/test-utils';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      phonenumber:""
    }
  }
  setUpReCaptcha=()=>{
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      this.onSignInSubmit();
    }
  });
}
onSignInSubmit=()=>{
  
  this.setUpReCaptcha();
  var num = this.state.phonenumber;
  var n = num.toString();
  console.log(typeof n)
  var phoneNumber = "+923461208184";
  var appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        var code = window.prompt("Enter OTP");
        confirmationResult.confirm(code).then(function (result) {
  // User signed in successfully.
  var user = result.user;
  // ...
  console.log("user is signed in")
}).catch(function (error) {
  // User couldn't sign in (bad verification code?)
  // ...
});
      }).catch(function (error) {
        // Error; SMS not sent
        // ...
      });
    }
    render(){
      console.log(this.state.phonenumber)
      return (
    <div className="App">
      {/* <h1>Phone Auth</h1> */}
      <div id="recaptcha-container"></div>
      <div>
        <input type="number" onChange={(e)=>this.setState({phonenumber:e.target.value})}/>
      </div>
      <div>
        <input type="button" value="send" onClick={()=>this.onSignInSubmit()}/>
      </div>
    </div>
  );
}
}


