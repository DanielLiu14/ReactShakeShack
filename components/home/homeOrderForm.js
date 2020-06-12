"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    state = {
        numberOfOrders: 0,
        name: "",
        foodItem: "",
        orderCounter: 1
    }
    onClickAddButton = () => {
        this.setState({
            orderCounter: this.state.orderCounter + 1
        });
        console.log("Button clicked!");
        console.log("Name: " + this.state.name);
        console.log("Food: " + this.state.foodItem);
        console.log("Number of Items: " + this.state.numberOfOrders);
        console.log("Order Counter: " + this.state.orderCounter);
    }
    onChangeName = (event) => {
        const value = event.target.value;
        this.setState({
            name: value
        });
    }
    onChangeNumber = (event) => {
        const value = event.target.value;
        this.setState({
            numberOfOrders: value
        });
    }
    onChangeSelect = (e) => {
        const value = e.target.value;
        this.setState({
            foodItem: value
        });
    }
    render() {
        return (
            <section id="home-order-form">
                <h2>New Order Form</h2>
                <select onChange={(e) => this.onChangeSelect(e)}>
                    <option value="burgers">Burgers</option>
                    <option value="fries">Fries</option>
                    <option value="shakes">Shake</option>
                </select>
                <span>Number: </span>
                <input type="text" placeholder="Type here" onChange={(event) => this.onChangeNumber(event)}/>
                <span>Your name: </span>
                <input type="text" placeholder="Type here" onChange={(event) => this.onChangeName(event)}/>
                <button onClick={this.onClickAddButton}>Add to Orders</button>

            </section>
        );
    }
}
