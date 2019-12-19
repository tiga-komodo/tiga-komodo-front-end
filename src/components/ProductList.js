import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from "../context/product";

export default class ProductList extends Component {
  state = {
    products: []
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Title name="Product" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map((product, i) => {
                  return <Product key={i} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
