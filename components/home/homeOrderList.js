"use strict";
import "./homeOrderList.sass";
import React from "react";
import { HomeOrderListItem } from './homeOrderListItem.js';
const FAKE_ORDER_LIST = [
    {
        id: 1,
        food: "burgers",
        numFood: 5,
        name: "Joe"
    },
    {
        id: 2,
        food: "fries",
        numFood: 8,
        name: "Bob"
    },
    {
        id: 3,
        food: "shakes",
        numFood: 2,
        name: "Jason"
    }
];

export class HomeOrderList extends React.Component {
    render() {
        const orders = FAKE_ORDER_LIST;
        const items = orders.map((order, index) => (<li key={index}><h1>{order.name}</h1></li>));
        return (
            <section id="home-order-list">
                <h1>Order List</h1>
                <ul>
                    {items}
                </ul>
            </section>
        );
    }
}
