import React, { useState, useEffect } from "react";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Title,
  SubTitle,
  Form,
  ButtonContainer,
  ErrorMessage,
} from "./styles/sign-in";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const { currentUser, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleButton
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

export default SignIn;
