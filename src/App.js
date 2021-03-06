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
import Homepage from "./components/Homepage/Homepage";
import Testimonial from "./components/Testimonial/Testimonial";
import About from "./components/About/About";
import ProductForm from "./components/Admin";
import ContactUs from "./components/contactUs/contactUs";
import { PrivateRoute } from "./helpers/privateRoute";
import PaymentModal from "./components/PaymentModal";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login&register">
            <LoginRegister />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cart">
            <Cart />
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
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <PrivateRoute path="/admin/add-product">
            <ProductForm />
          </PrivateRoute>
          <Route>
            <Default />
          </Route>
        </Switch>

        <Modal />
        <PaymentModal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
