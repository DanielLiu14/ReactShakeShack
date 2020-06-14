"use strict";
import "./home.sass";
import React from "react";
import { HomeOrderForm } from "./homeOrderForm.js";
import { HomeOrderList } from "./homeOrderList.js";
import { updateSavedOrders } from "../localStorage.js";
import API from "../api.js";
import { LoadingPopup } from "../loading/loading.js";
export default class HomePage extends React.Component {
    state = {
        orderList: [],
        showLoading: false
    }
    apiAddOrderToList = order => {
        this.setState(
            {showLoading: true}
        );
        API.addOrder()
            .then(() => {
                this.addOrderToList(order);
            })
            .catch(() => {
                window.alert("Your order wasn't added: ");
            })
            .finally(() => {
                this.setState(
                    {showLoading: false}
                );
            });
    }
    componentDidMount() {
        API.fetchOrders().then(data => {
            this.setState({
                orderList: data || []
            });
        });
    }
    addOrderToList = (order) => {
        const list = this.state.orderList;
        list.push(order)
        this.setState({
            orderList: list
        });
        updateSavedOrders(this.state.orderList);
    }
    deleteOrderFromList = (orderId) => {
        const newList = this.state.orderList.filter(o => o.id !== orderId);
        this.setState({
            orderList: newList
        });
        updateSavedOrders(newList);
    };
    render() {
        return (
            <div id="view-home">
                <h1>Shake Shack Order Manager</h1>
                <HomeOrderForm addOrderCallback={this.apiAddOrderToList}/>
                <HomeOrderList list={this.state.orderList} deleteOrderCallback={this.deleteOrderFromList}/>
                <LoadingPopup show={this.state.showLoading}/>
            </div>
        );
    }
}
