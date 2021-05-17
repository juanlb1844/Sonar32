import React from 'react';
import Button from 'react-bootstrap/Button';
 
const Login = () => { 
  
  const facebookLogin = () => {
    alert('fB'); 

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '850025339250150',
      xfbml      : true,
      version    : 'v10.0'
    });
    FB.AppEvents.logPageView(); 
  };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   

  }; 

  const facebookStart = () => { 
      alert("DIALOG")    
      window.FB.login( function(response){ if( response.status === "connected"){ console.log( response ); } }, {scope :'public_profile'} ); 
  };

  const googleLogin = () => {
     
      var s = document.createElement( 'script' );
      s.setAttribute( 'src', "https://apis.google.com/js/api.js" );
      s.onload= function() { };
      document.body.appendChild( s );
      alert("cargado"); 
  }; 


  const googleStart = () => {
     var GoogleAuth;
  var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  handleClientLoad(); 

  GoogleAuth.signIn(); 
  
  function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
 
    gapi.client.init({
        'apiKey': 'AIzaSyBbW99HNi4hkZdpNC381-RRq63MXCmdDFs',
        'clientId': '145180067857-iff01u76igkocukv6j1hfvjboe1bf97c.apps.googleusercontent.com',
        'discoveryDocs': [discoveryUrl],
        'scope': SCOPE
    }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      var user = GoogleAuth.currentUser.get();
      setSigninStatus();
 
    });
  }

  function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked "Sign out" button.
      GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      GoogleAuth.signIn();
    }
  }

  function revokeAccess() {
    GoogleAuth.disconnect();
  }

  function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
      console.log("AUTO"); 
    } else {
      console.log("NO AUTO"); 
  }
  }

  function updateSigninStatus() {
    setSigninStatus();
  }
  }; 

  return ( 
    <>

    <div class="container-login">
    <div class="content-login"> 
    <h1>LOGIN..</h1> 
   			<input class="input-login" placeholder="usuario"></input>
   			<input class="input-login" placeholder="contraseña" type="password"></input>
   			<div class="content-footer-login"> 
   			<button class="btn">Entrar</button> 
   			</div> 
   	 	<hr/> 
   	 	<div>  
         <button onClick={facebookLogin} class="btn-login btn-fb btn-primary">CARGAR FB</button>  
         <button onClick={facebookStart} class="btn-login btn-g btn-primary">INICIAR FB</button> 
         <button onClick={googleLogin} class="btn-primary">CARGAR G</button> 
         <button onClick={googleStart} class="btn-primary">CARGAR S</button>

      </div> 
   	 </div> 
   	 </div> 
    </>
);   };

export default Login; 