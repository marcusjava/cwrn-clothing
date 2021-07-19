import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";
import { setCurrentUser } from "./redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { auth, createUserProfileDocument } from "./util/firebase";
import Checkout from "./pages/checkout";

function App() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("auth changed", user);
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
