import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import './Cart.css'

export default class Cart extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Geridönüşünüz müvəffəqiyyətlə göndərildi.");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input label="Ad: " />
          <Input label="Soyad: " />
          <Input label="Telefon: " />
          <Input label="Email: " />
          <Input label="Şərh: " />
          <Button />
        </form>
      </div>
    );
  }
}
