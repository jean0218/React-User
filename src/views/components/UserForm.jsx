import React, { Component } from "react";
import { RadioGroup, Radio, Input } from "baseUI";
import PropTypes from "prop-types";

export default class UserForm extends Component {
    static defaultProps = {
        firstName: "",
        lastName: "",
        gender: "male",
        id: "",
    };

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            firstNameMessage: "",
            lastName: props.lastName,
            lastNameMessage: "",
            gender: props.gender,
            id: props.id,
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            firstName: newProps.firstName,
            lastName: newProps.lastName,
            gender: newProps.gender,
            id: newProps.id,
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        let isRender = false;
        const currState = this.state;
        for (let name in currState){
            if(currState[name] !== nextState[name]){
                isRender = true;
                break;
            }            
        }
        return isRender;
    }

    handleChangeFirstName(newState) {
        this.setState({
            firstName: newState.value,
            firstNameMessage: newState.errMsg,
        });
    }

    handleChangeLastName(newState) {
        this.setState({
            lastName: newState.value,
            lastNameMessage: newState.errMsg,
        });
    }

    onSubmit() {
        //供上层调用，获取表格数据 Call on the previous layer to get form data
        if (!(this.refs.firstName.onValidate() && this.refs.lastName.onValidate())) {
            return null;
        }
        const currState = this.state;
        return {
            firstName: currState.firstName,
            lastName: currState.lastName,
            gender: currState.gender,
            id: currState.id,
        };
    }

    handleChangeGender(newState) {
        this.setState({
            gender: newState,
        });
    }

    renderInputLine(newParams) {
        const {
            placeholder,
            rule,
            ref,
            defaultValue,
            message,
            onChange,
            onValidate
        } = newParams;
        return (
            <div className = "user-form__line">
                <label className = "user-form__label">{placeholder}</label>
                <Input
                    placeholder = {placeholder}
                    defaultValue = {defaultValue}
                    rule = {rule}
                    onChange = {onChange}
                    ref = {ref}
                />
                {
                    message.length === 0 ? null : <p className = "user-form__msg">{message}</p>
                }
            </div>
        );
    }

    render() {
        const {
            firstName,
            firstNameMessage,
            lastName,
            lastNameMessage,
            gender
        } = this.state;
        return (
            <form className = "user-form">
                {
                    this.renderInputLine({
                        placeholder: "First",
                        rule: "name",
                        ref: "firstName",
                        defaultValue: firstName,
                        message: firstNameMessage,
                        onChange: this.handleChangeFirstName
                    })
                } 
                {
                    this.renderInputLine({
                        placeholder: "Last",
                        rule: "name",
                        ref: "lastName",
                        defaultValue: lastName,
                        message: lastNameMessage,
                        onChange: this.handleChangeLastName
                    })
                }
                <div className = "user-form__line">
                    <label className = "user-form__label">Gender</label>
                    <RadioGroup
                        onChange = {this.handleChangeGender}
                        value = {gender}
                        className = "user-form__radio-group"
                    >
                        <Radio 
                            value = "male" 
                            labelInfo = "male" 
                        />
                        <Radio 
                            value = "female" 
                            labelInfo = "female" 
                        />
                    </RadioGroup>
                </div>
            </form>
        );
    }
}

UserForm.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.string,
};
