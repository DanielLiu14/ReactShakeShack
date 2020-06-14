"use strict";
import "./homeOrderForm.sass";
import React from "react";

export class HomeOrderForm extends React.Component {
    state = {
        numberOfOrders: 0,
        name: "",
        foodItem: "Burgers",
        orderCounter: 0
    }
    onClickAddButton = () => {
        var order = { name: this.state.name, 
                        food: this.state.foodItem,
                        numFood: this.state.numberOfOrders,
                        id: this.state.orderCounter
                      }
        this.props.addOrderCallback(order);
        this.setState({
            orderCounter: this.state.orderCounter + 1
        });
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
                    <option value="Burgers">Burgers</option>
                    <option value="Fries">Fries</option>
                    <option value="Shakes">Shake</option>
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