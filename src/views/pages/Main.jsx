import React, { Component } from "react";
import "./main.css";
import Header from "../components/Header.jsx";
import UserInfoPanel from "../components/UserInfoPanel.jsx";
import AddUserPanel from "../components/AddUserPanel.jsx";
import getArrIndex from "../utils/getArrIndex";
import arrayIsEquality from "../utils/arrayIsEquality";

export default class PageRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfoArray: [],
            userPanelVisible: false,
            isExist: false,
        };

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleDelUser = this.handleDelUser.bind(this);
        this.handleAddUserInfo = this.handleAddUserInfo.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleCancelAddUser = this.handleCancelAddUser.bind(this);
        this.handleAddUserInfo = this.handleAddUserInfo.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const currState = this.state;
        let isRender = currState.userPanelVisible !== nextState.userPanelVisible ||
                    currState.isExist !== nextState.isExist || 
                    arrayIsEquality(currState.userInfoArray, nextState.userInfoArray)
        return isRender;
    }

    handleChangeUser(newSate) {
        //接收子层修改用户数据receiving sublayer to modify user data
        let userInfoArray = [...this.state.userInfoArray];
        const index = getArrIndex(userInfoArray, newSate.id);
        userInfoArray[index] = newSate;
        this.setState({
            userInfoArray,
        });
    }

    handleDelUser(newSate) {
        let userInfoArray = [...this.state.userInfoArray];
        const index = getArrIndex(userInfoArray, newSate.id);
        userInfoArray.splice(index, 1);
        this.setState({
            userInfoArray,
        });
    }

    handleAddUser(newState) {
        let userInfoArray = [... this.state.userInfoArray];
        const len = userInfoArray.length;
        let isExist = false;
        for (let i = 0; i < len; i++) {
            //判断已有的列表中是否存在同名数据
            //Determine whether there is data of the same name in an existing list
            if (
                newState.firstName === userInfoArray[i].firstName &&
                newState.lastName === userInfoArray[i].lastName &&
                newState.gender === userInfoArray[i].gender
            ) {
                isExist = true;
                this.setState({
                    isExist,
                });
                break;
            }
        }
        if (!isExist) {
            newState.id = `No0${len + 1}`;            
            userInfoArray.push(newState);
            this.setState({
                userInfoArray,
            });
        }
    }

    handleCancelAddUser() {
        this.setState({
            userPanelVisible: false,
            isExist: false,
        });
    }

    handleAddUserInfo() {
        this.setState({
            userPanelVisible: true
        });
    }
    
    renderUserInfoPanel() {
        const { userInfoArray } = this.state;
        if (userInfoArray.length === 0) {
            return null;
        }
        return (
            <UserInfoPanel
                list = {userInfoArray}
                onChange = {this.handleChangeUser}
                onDel = {this.handleDelUser}
            />
        );
    }

    renderAddUserPanel() {
        const { userPanelVisible } = this.state;
        if (!userPanelVisible) {
            return null;
        }
        return (
            <AddUserPanel
                onAddUser = {this.handleAddUser}
                onCancelAddUser = {this.handleCancelAddUser}
            />
        );
    }

    render() {
        const { isExist } = this.state;
        return (
            <div>
                <Header onAddUserInfo = {this.handleAddUserInfo} />
                <div className = "content">
                    {this.renderUserInfoPanel()}
                    {
                        isExist ? <p className = "user-form__msg">The user has already existed</p> : ""
                    }
                    {this.renderAddUserPanel()}
                </div>
            </div>
        );
    }
}
