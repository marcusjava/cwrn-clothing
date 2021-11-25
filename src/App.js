import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";
import { useSelector, useDispatch } from "react-redux";
import Checkout from "./pages/checkout";
import { checkUserSession } from "./redux/user/userActions";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    /*   addCollectionDocs(
      "collections",
      shopData.map(({ title, items }) => ({ title, items }))
    ); */
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
