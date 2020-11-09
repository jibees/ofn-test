import React from "react";
import "./assets/main.css";
import { RecoilRoot } from "recoil";
import { Header } from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { MyCartPage } from "./pages/MyCart";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/my-cart">
              <MyCartPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
