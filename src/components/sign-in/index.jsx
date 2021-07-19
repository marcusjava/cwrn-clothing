import React, { useState, useEffect } from "react";
import { useFirebase } from "../../context/firebase";
import { signInWithGoogle } from "../../util/firebase";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth, createUserProfileDocument } from "../../util/firebase";

import "./styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);

      alert("User created successfully");
      clearFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="subtitle">Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type="password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="button-container">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleButton>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
