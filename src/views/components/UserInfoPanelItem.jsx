import React, { Component } from "react";
import UserForm from "./UserForm.jsx";
import UserInfo from "./UserInfo.jsx";
import PropTypes from "prop-types";

export default class UserInfoPanelItem extends Component {
    static propsDefault = {
        user: {},
        onChange: () => {},
        onDel: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    handleEdit() {
        this.setState({
            edit: true,
        });
    }

    handleSave() {
        let userData = this.refs.userForm.onSubmit();
        if (userData != null) {
            const currUser = this.props.user;
            //判断数据是否被修改
            //Determine whether the data is modified or not
            if (
                userData.firstName !== currUser.firstName ||
                userData.lastName !== currUser.lastName ||
                userData.gender !== currUser.gender
            ) {
                this.props.onChange(userData);
            }
            this.setState({
                edit: false
            });
        }
    }

    handleCancel() {
        this.setState({
            edit: false
        });
    }

    handleDel() {
        this.props.onDel(this.props.user);
    }

    renderUserPanel() {
        const { edit } = this.state;
        if (edit) {
            return(
                <UserForm 
                    ref = "userForm" 
                    {...this.props.user} 
                />
            )
        }
        return <UserInfo {...this.props.user} />;
    }

    renderButtonGroup() {
        const { edit } = this.state;
        if (!edit) {
            return (
                <div className = "user-info__operation-group">
                    <button 
                        className = "btn user-info__button" 
                        onClick = {this.handleEdit}
                    >
                        edit
                    </button>
                    <button 
                        className = "btn user-info__button" 
                        onClick = {this.handleDel}
                    >
                        del
                    </button>
                </div>
            );
        }
        return (
            <div className = "user-info__operation-group">
                <button 
                    className = "btn user-info__button" 
                    onClick = {this.handleSave}
                >
                    save
                </button>
                <button 
                    className = "btn user-info__button" 
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
                {this.renderUserPanel()}
                {this.renderButtonGroup()}
            </div>
        );
    }
}

UserInfoPanelItem.propTypes = {
    user: PropTypes.object,
    onChange: PropTypes.func,
    onDel: PropTypes.func,
};