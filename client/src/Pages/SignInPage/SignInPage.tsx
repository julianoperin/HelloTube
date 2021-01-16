import React, { useState } from "react";
import "./SignInPage.css";
import axios from "axios";

import { GoogleLogin } from "react-google-login";

const SignInPage: React.FC = () => {
  const [channelName, setChannelName] = useState<string>("");

  const responseGoogle = (res: any) => {
    console.log(res);

    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;

    axios
      .post("http://localhost:3001/signin", {
        name: name,
        email: email,
        googleId: googleId,
        channelName: channelName,
      })
      .then((response) => {
        console.log("success!!!");
      });
  };

  return (
    <div className="signInPage">
      <div className="container-signIn">
        <div className="top">
          <h2>Sign In with Google</h2>
        </div>

        <div className="body">
          <input
            type="text"
            placeholder="Channel name..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setChannelName(event.target.value)
            }
          />
          <GoogleLogin
            clientId="597764444042-sbpkrsr5mh8glt7t3qma0hl6ps4l64b5.apps.googleusercontent.com"
            buttonText="Sign In"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
