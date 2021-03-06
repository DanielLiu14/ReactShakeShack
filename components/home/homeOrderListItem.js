"use strict";
import React from "react";
export class HomeOrderListItem extends React.Component {
    render() {
        const order = this.props.order;
        return (
            <section id="home-order-list-item">
                <div>
                    <span className="home-row-id">{order.id}</span>
                    <span className="home-row-name">{order.name}</span>
                    <span className="home-row-food">{order.food}</span>
                    <span className="home-row-num">{order.numFood}</span>
                    <button onClick={() => this.props.deleteOrderCallback(order.id)}>Delete</button>
                </div>
            </section>
        );
    }
}