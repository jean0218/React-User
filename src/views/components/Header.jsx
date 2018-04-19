import React, { Component } from "react";
import PropTypes from "prop-types";

export default function Header({ onAddUserInfo = () => {} }) {
    return (
        <header className = "header">
            <h1>User Directory</h1>
            <button 
                className = "btn" 
                onClick = {onAddUserInfo}
            >
                Add User
            </button>
        </header>
    );
}

Header.propTypes = {
    onAddUserInfo: PropTypes.func,
};