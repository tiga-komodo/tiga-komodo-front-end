import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Homepage from "./Homepage";

import { storeProducts } from "../data";

import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <Homepage />
        <div className="container">
          <Title name="Product" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
