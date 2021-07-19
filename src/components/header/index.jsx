import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/crown.svg";
import { useFirebase } from "../../context/firebase";
import { auth } from "../../util/firebase";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon";

function Header() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const signout = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signout}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;
