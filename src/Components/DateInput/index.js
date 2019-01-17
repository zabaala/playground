import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input, { states as availableInputStates } from "../Input/index";
import * as moment from 'moment';

const propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    feedbackText: PropTypes.string,
    mask: PropTypes.string,
    dateFormat: PropTypes.string,
    required: PropTypes.bool,
    normalState: PropTypes.oneOf(availableInputStates)
};

const defaultProps = {
    mask: '11/11/1111',
    dateFormat: 'DD/MM/YYYY',
    feedbackText: 'Data inválida',
    required: false,
    onChange: () => {},
    availableInputStates: 'normal'
};

class DateField extends Component {

    state = {
        isValid: false,
        inputLength: 0
    };

    /**
     * Handle onChange.
     *
     * @param e
     */
    handleOnChange = (e) => {
        e.persist();
        const inputValueLength = e.target.value.replace(/[\/_]/g,'').length; // accepted chars length.
        const dateIsValid = moment(e.target.value, this.props.dateFormat).isValid();

        this.setState({
            inputLength: inputValueLength,
            isValid: (inputValueLength === 8) && dateIsValid
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
                type="tel" // hacking to show a numeric keyboard to the user.
                name={name}
                mask={mask}
                state={this.state.isValid ? normalState : (this.state.inputLength === 0 ? normalState : 'error')}
                feedbackText={feedbackText}
                showFeedbackText={this.state.inputLength >= 1 && !this.state.isValid}
                onChange={this.handleOnChange}
                value={value}
                required={required}
                {...attributes}
            />
        );
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

export default DateField;