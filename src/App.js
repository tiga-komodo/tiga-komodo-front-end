import React, { Component } from "react";
import "./App.css";
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
import NewRelease from "./components/NewRelease/NewRelease";
import Issue from "./components/Issue/Issue";
import Trend from "./components/Trend/Trend";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import Homepage from "./components/Homepage/Homepage";
import Testimonial from "./components/Testimonial/Testimonial";
import About from "./components/About/About";
import ProductForm from "./components/Admin";

import { PrivateRoute } from "./helpers/privateRoute";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginRegister />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/newrelease">
            <NewRelease />
          </Route>
          <Route path="/issue">
            <Issue />
          </Route>
          <Route path="/trend">
            <Trend />
          </Route>
          <Route path="/lifestyle">
            <Lifestyle />
          </Route>
          <Route path="/testimonial">
            <Testimonial />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <PrivateRoute path="/admin/add-product">
            <ProductForm />
          </PrivateRoute>
          <Route>
            <Default />
          </Route>
        </Switch>

        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
