import * as jose from "jose"
import React, {Component} from "react";

// This Componenet is dependent on an external Google script


class SignInButton extends Component {

      async decodeJwtResponse(credential) {
        const jwt = credential;
        const {payload, protectedHeader} = await jose.jwtDecrypt(jwt, "Client_ID " );
        console.log(payload);
        console.log(protectedHeader);

        return payload;
      }

      handleCredentialResponse(response) {
        // decodeJwtResponse() is a custom function defined by you
        // to decode the credential response.
        console.log(response);
        const responsePayload = this.decodeJwtResponse(response.credential);

        console.log("ID: " + responsePayload.sub);
        console.log("Full Name: " + responsePayload.name);
        console.log("Given Name: " + responsePayload.given_name);
        console.log("Family Name: " + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);
      }

      componentDidMount(){

      }

      render()
      {          
          
          return <div>
          <script></script>
        <div id="g_id_onload"
            data-client_id="263914868316-vqvr8m3ki0ppgsv2oa2djq3th5camlmj.apps.googleusercontent.com"
            data-login_uri={window.location.origin}>
       </div>
       <div 
        className="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left">
       </div>
</div>}
    }

export default SignInButton