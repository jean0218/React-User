import React, { Component } from "react";
import PropTypes from "prop-types";
import BtnRandomUser from "./BtnRandomUser.jsx";
import UserForm from "./UserForm.jsx";

export default class AddUserPanel extends Component {
    static propsDefault = {
        onAddUser: () => {},
        onCancelAddUser: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };

        this.handleClickRandomUser = this.handleClickRandomUser.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClickRandomUser(newState) {
        this.setState({
            user: newState,
        });
    }

    handleClickSave() {
        const userData = this.refs.userForm.onSubmit(); //获取表单数据 Obtaining form data
        if (userData != null) {
            this.props.onAddUser(userData);
            this.setState({
                user: {
                    firstName: "",
                    lastName: "",
                    gender: "male",
                }
            });
        }
    }

    handleCancel() {
        this.props.onCancelAddUser();
    }

    renderOperationGroup() {
        return (
            <div className = "user-form__operation-group">
                <BtnRandomUser onClick = {this.handleClickRandomUser} />
                <button 
                    className = "btn user-form__button" 
                    onClick = {this.handleClickSave}
                >
                    add
                </button>
                <button 
                    className = "btn user-form__button" 
                    onClick = {this.handleCancel}
                >
                    cancel
                </button>
            </div>
        );
    }

    render() {
        return (
            <div className = "panel">
                <UserForm 
                    ref = "userForm" 
                    {...this.state.user} 
                />
                {this.renderOperationGroup()}
            </div>
        );
    }
}

AddUserPanel.propTypes = {
    onAddUser: PropTypes.func,
    onCancelAddUser: PropTypes.func,
};
