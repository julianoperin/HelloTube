import React, { useState } from "react";
import "./SignInPage.css";
import axios from "axios";

import { GoogleLogin } from "react-google-login";

const SignInPage: React.FC = () => {
  const [channelName, setChannelName] = useState<string>("");
  const [signInOption, setSignInOption] = useState<string>("");

  const responseGoogle = (res: any) => {
    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    const imageUrl = res.profileObj.imageUrl;

    console.log(res);

    axios
      .post("http://localhost:3001/signin", {
        name: name,
        email: email,
        googleId: googleId,
        channelName: channelName,
        imageUrl: imageUrl,
      })
      .then((response) => {
        console.log("success!!!");
        console.log("response:", response);
      });
  };

  return (
    <div className="signInPage">
      <div className="container-signIn">
        {signInOption === "" ? (
          <div className="body">
            <button className="btn-create-account">Create Account</button>
            <button className="btn-sign-in">Sign In</button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
