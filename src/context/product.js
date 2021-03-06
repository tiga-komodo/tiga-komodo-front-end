import React, { Component } from "react";
import axios from "axios";
// import { storeProducts, detailProduct } from "../data";
import { BACKEND_URI } from "../helpers/env";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    user: {},
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalPayment: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  addUser = data => {
    let newUser = data;
    this.setState(() => {
      return {
        user: newUser
      };
    });
  };

  setProducts = () => {
    axios
      .get(BACKEND_URI + "/products")
      .then(result => {
        this.setState({
          // isLoaded: true,
          products: result.data
        });
        // console.log(result);
      })
      .catch(error => {
        console.log(error);

        // this.setState({
        // isLoaded: true,
        // error: error.message
        // });
      });
  };

  getItem = id => {
    const product = this.state.products.find(item => item._id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    console.log(tempProducts);
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product }
      };
    }, this.addTotals);
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  openModalPayment = () => {
    this.setState(() => {
      return { modalPayment: true };
    });
  };

  closeModalPayment = () => {
    this.setState(() => {
      return { modalPayment: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item._id === id;
    });

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return { cart: [...tempCart] };
    }, this.addTotals);
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item._id === id;
    });

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
    }

    this.setState(() => {
      return { cart: [...tempCart] };
    }, this.addTotals);
  };

  getTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState(() => {
      return {
        cartSubTotal: totals.subTotal,
        cartTax: totals.tax,
        cartTotal: totals.total
      };
    });
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));

    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item._id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  getOrder = id => {
    const order = this.state.orders.find(item => item._id === id);
    return order;
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addUser: this.addUser,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          openModalPayment: this.openModalPayment,
          closeModalPayment: this.closeModalPayment
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
