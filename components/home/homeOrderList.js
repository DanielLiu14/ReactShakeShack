"use strict";
import "./homeOrderList.sass";
import React from "react";
import { HomeOrderListItem } from "./homeOrderListItem.js";
import "./homeOrderListItem.sass";
import { Link } from "react-router-dom";
let mysteryBlock = (<div></div>);
let totalNumberOrders = 0;
export class HomeOrderList extends React.Component {
    render() {
        const orders = this.props.list;
        const items = orders.map((order, index) => {
            return (
                <li key={index}>
                    <HomeOrderListItem
                        order={order}
                        deleteOrderCallback={this.props.deleteOrderCallback}
                    />
                </li>
            );
        });
        orders.forEach(order => {
            totalNumberOrders = parseInt(order.numFood) + parseInt(totalNumberOrders)
        });
        if (totalNumberOrders >= 10) {
            mysteryBlock = (<Link to="/quit">Too many orders. I quit!</Link>);
        } else {
            totalNumberOrders = 0;
        }
        return (
            <section id="home-order-list">
                <h1>Order List</h1>
                <div className = "table-head">
                    <span className="home-row-id">Order ID</span>
                    <span className="home-row-name">Name</span>
                    <span className="home-row-food">Food</span>
                    <span className="home-row-num">Number of food</span>
                </div>
                <ul>
                    {items}
                </ul>
                <div id = "link">
                    {mysteryBlock}
                </div>
            </section>
        );
    }
}
