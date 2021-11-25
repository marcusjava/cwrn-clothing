import React, { useState } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";
import {
  Container,
  Title,
  SubTitle,
  Form,
  ButtonContainer,
} from "./styles/sign-up";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      dispatch(signUpStart({ email, password, displayName }));
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <Container>
      <Title>I do not have a account</Title>
      <SubTitle>Sign up with your email and password</SubTitle>
      <Form onSubmit={handleSubmit}>
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
        <ButtonContainer>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

export default SignUp;
