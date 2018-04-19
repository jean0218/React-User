import React, { Component } from "react";
import PropTypes from "prop-types";

export default function UserInfo(props) {
    const { firstName, lastName, gender } = props;
    return (
        <div className = "user-info">
            <div className = "user-info__line">
                <label className = "user-info__label">First</label>
                <p className = "user-info__line__p">{firstName}</p>
            </div>
            <div className = "user-info__line">
                <label className = "user-info__label">Last</label>
                <p className = "user-info__line__p">{lastName}</p>
            </div>
            <div className = "user-info__line">
                <label className = "user-info__label">Gender</label>
                <p className = "user-info__line__p">{gender}</p>
            </div>
        </div>
    );
}

UserInfo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
};