import React from "react";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

import "./styles.scss";

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <div className="sign-up">
        <SignIn />
      </div>
      <div className="sign-in">
        <SignUp />
      </div>
    </div>
  );
}

export default SignInAndSignUp;
