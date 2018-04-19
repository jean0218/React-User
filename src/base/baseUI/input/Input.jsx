import React, { Component } from "react";
import PropTypes from "prop-types";
import { validateRules, trim } from "baseUtils";

export default class Input extends Component {
    static defaultProps = {
        className: "input",
        placeholder: "",
        defaultValue: "",
        type: "text", //input type
        rule: "", //Check rule name
        maxlength: 40, //The longest length of the input character
        onChange: () => {}
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        const currProps = this.props;
        let acitveValue;
        if ("acitveValue" in currProps) {
            acitveValue = currProps.acitveValue;
        } else if ("defaultValue" in currProps) {
            acitveValue = currProps.defaultValue;
        }
        this.state = {
            acitveValue
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            acitveValue: newProps.defaultValue
        });
    }

    handleChange(event) {
        const targetValue = trim(event.target.value);
        const { validate, errMsg } = this.validateInput(targetValue);
        if(
            this.state.acitveValue !== targetValue &&
            "defaultValue" in this.props &&
            targetValue.length <= this.props.maxlength
        ){
            this.setState({
                acitveValue: targetValue
            });
            this.props.onChange({
                value: targetValue,
                validate,
                errMsg,
            });
        }
    }

    validateInput(targetValue) {
        let validate = true,
            errMsg = "";
        const currRule = this.props.rule;
        if (currRule.length !== 0) {
            const valueReg = new RegExp(validateRules.rule[currRule]);
            validate = valueReg.test(targetValue);
            if (!validate) {
                errMsg = validateRules.message[currRule];
            }
        }
        return {
            validate,
            errMsg,
        };
    }

    onValidate = () => {
        //供上层调用，提交时校验表单 Check the input box at the time of submission of the form for the upper call
        const targetValue = this.state.acitveValue;
        const { validate, errMsg } = this.validateInput(targetValue);
        this.props.onChange({
            value: targetValue,
            validate,
            errMsg,
        });
        return validate;
    }

    render() {
        const {
            className,
            placeholder,
            type,
            rule,
        } = this.props;
        const {
            acitveValue,
        } = this.state;
        return (
            <input
                type = {type}
                className = {className}
                placeholder = {placeholder}
                value = {acitveValue}
                data-rule = {rule}
                onChange = {this.handleChange}
            />
        );
    }
}

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    rule: PropTypes.string,
    maxlength: PropTypes.number,
    onChange: PropTypes.func,
};
