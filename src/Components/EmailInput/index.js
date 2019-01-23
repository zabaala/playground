import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input, { states as availableInputStates } from "../Input/index";

const propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    feedbackText: PropTypes.string,
    required: PropTypes.bool,
    normalState: PropTypes.oneOf(availableInputStates)
};

const defaultProps = {
    feedbackText: 'Invalid e-mail.',
    required: false,
    onChange: () => {},
    availableInputStates: 'normal'
};

class EmailInput extends Component {

    state = {
        isValid: false,
        inputLength: 0,
        value: '',
        ok: false
    };

    isValid = () => {
        const regexEmail =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(this.state.value);
    };

    /**
     * Handle onChange.
     *
     * @param e
     */
    handleOnChange = (e) => {
        e.persist();

        this.setState({
            inputLength: e.target.value.length,
            isValid: this.isValid(),
            value: e.target.value,
            ok: this.isValid()
        }, () => {
            this.props.onChange(e, this.state.isValid);
        });
    };

    render() {

        const {
            name,
            value,
            onChange,
            normalState,
            feedbackText,
            mask,
            dateFormat,
            required,
            ...attributes
        } = this.props;

        return (
            <Input
                type="email"
                name={name}
                state={this.state.isValid ? normalState : (this.state.inputLength === 0 ? normalState : 'error')}
                feedbackText={feedbackText}
                showFeedbackText={this.state.inputLength > 0 && !this.state.isValid}
                onChange={this.handleOnChange}
                value={this.state.value}
                required={required}
                ok={this.state.inputLength > 0 && this.state.ok && this.props.ok}
                {...attributes}
            />
        );
    }
}

EmailInput.propTypes = propTypes;
EmailInput.defaultProps = defaultProps;

export default EmailInput;