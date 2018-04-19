import React, { Component } from "react";
import { fetchGet } from "baseUtils";
import PropTypes from "prop-types";


export default class BtnRandomUser extends Component {
    static propsDefault = {
        onClick: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            //服务端未获取请求时，控制按钮不可点击
            //The control button is not clickable when the server does not obtain a request
            isGetRandomUser: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            //未获得服务端结果时，不可再次发送请求
            //The request cannot be sent again when the server end result is not obtained
            isGetRandomUser: false,
        });
        const getRandomUser = fetchGet("https://randomuser.me/api/");
        const that = this;
        getRandomUser.then(function(result) {
            const data = result.results[0];
            that.setState({
                isGetRandomUser: true,
            });
            that.props.onClick({
                firstName: data.name.first,
                lastName: data.name.last,
                gender: data.gender,
            });
        })
        .catch(function(error) {
            console.log("error", error);
        });
    }

    render() {
        const { isGetRandomUser } = this.state;
        let events = {
            disable: "true",
        };
        if (isGetRandomUser) {
            events = {
                onClick: this.handleClick,
            };
        }
        return (
            <button 
                className = "btn user-form__button" 
                {...events}
            >
                Random User
            </button>
        );
    }
}

BtnRandomUser.propTypes = {
    onClick: PropTypes.func,
};