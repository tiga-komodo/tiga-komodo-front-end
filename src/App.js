import React, { Component } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import LoginRegister from "./components/LoginRegister";
import Modal from "./components/Modal";
import NewRelease from "../src/components/NewRelease/NewRelease";
import Issue from "../src/components/Issue/Issue";
import Trend from "../src/components/Trend/Trend";
import Lifestyle from "../src/components/Lifestyle/Lifestyle";
import abouts from "./components/About/abouts"
import Homepage from "../src/components/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={LoginRegister} />
          <Route path="/newrelease" component={NewRelease} />
          <Route path="/issue" component={Issue} />
          <Route path="/trend" component={Trend} />
          <Route path="/abouts" component={abouts} />
          <Route path="/lifestyle" component={Lifestyle} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <abouts/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
