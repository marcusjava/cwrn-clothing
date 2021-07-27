import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "../../util/firebase";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../../util/firebase";
import {
  Container,
  Title,
  SubTitle,
  Form,
  ButtonContainer,
} from "./styles/sign-in";

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
    <Container>
      <Title>I already have an account</Title>
      <SubTitle>Sign in with your email and password.</SubTitle>
      <Form onSubmit={handleSubmit}>
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
        <ButtonContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleButton>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

export default SignIn;
