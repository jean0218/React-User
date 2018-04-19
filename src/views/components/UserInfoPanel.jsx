import React, { Component } from "react";
import UserInfoPanelItem from "./UserInfoPanelItem.jsx";
import PropTypes from "prop-types";

export default function UserInfoPanel(props) {
    return props.list.map(function(item) {
        return (
            <UserInfoPanelItem
                user = {item}
                onChange = {props.onChange}
                onDel = {props.onDel}
                key = {`userInfoPanel-${item.id}`}
            />
        );
    });
}

UserInfoPanel.propTypes = {
    list: PropTypes.array.isRequired,
};