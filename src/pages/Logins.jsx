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
      </div> 
   	 </div> 
   	 </div> 
    </>
);   };

export default Login; 