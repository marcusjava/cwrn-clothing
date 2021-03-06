import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/crown.svg";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon";
import { Container, LogoContainer, Options, Option } from "./styles/header";
import { signOutStart } from "../../redux/user/userActions";

function Header() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const signout = () => {
    dispatch(signOutStart());
  };
  return (
    <Container>
      <LogoContainer to="/">
        <img src={logo} alt="logo" />
      </LogoContainer>
      <Options>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        {currentUser ? (
          <Option as="div" onClick={signout}>
            SIGN OUT
          </Option>
        ) : (
          <Option to="/signin">SIGN IN</Option>
        )}
        <CartIcon />
      </Options>
    </Container>
  );
}

export default Header;
