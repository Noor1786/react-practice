import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="650148853104-s48bp4teld394dcjono61kl66r84gngd.apps.googleusercontent.com">
      <GoogleLogin onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        
        
        </GoogleOAuthProvider>
      
    </div>
  )
}

export default App
