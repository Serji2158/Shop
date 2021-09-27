import React, { Component } from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

// const Main = () => {
//   return (
//     <>
//       <Section title="Mobile Phones">
//         <PhoneList phones={data.phones} />
//       </Section>
//       <Section title="Laptops">
//         <LaptopList laptops={data.laptops} />
//       </Section>
//     </>
//   );
// };

class Main extends Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    this.setState((prev) => {
      return {
        cart: [...prev.cart, product],
      };
    });
  };

  removeFromCartByID = (id) => {
    this.setState((prev) => ({
      cart: [...prev.cart.filter((product) => product.id !== id)],
    }));
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    return (
      <>
        <Section title="Mobile Phones">
          <PhoneList phones={data.phones} addToCart={this.addToCart} />
        </Section>
        <Section title="Laptops">
          <LaptopList laptops={data.laptops} addToCart={this.addToCart} />
        </Section>
      </>
    );
  }
}

export default Main;
