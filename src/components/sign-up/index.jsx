import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../util/firebase";
import CustomButton from "../custom-button";
import FormInput from "../form-input";

import "./styles.scss";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log({ user });
      await createUserProfileDocument(user, { displayName });
      clearFields();
      alert("User created successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          placeholder="Enter your name"
          name="displayName"
          value={displayName}
          handleChange={(e) => setDisplayName(e.target.value)}
          required
        />
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
        <FormInput
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="button-container">
          <CustomButton type="submit">SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
