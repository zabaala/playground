import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputSize from './InputSize';

class Input extends Component {

    static defaultProps = {
        type: 'txt',
        size: 'natural',
        error: false,
        success: false,
        invalid: false,
        disabled: false,
        onChange: () => {},
        onKeyDown: () => {},
        onKeyPress: () => {},
    };

    static propTypes = {
        id: PropTypes.string,
        error: PropTypes.bool,
        success: PropTypes.bool,
        invalid: PropTypes.bool,
        invalidFeedback: PropTypes.string,
        _ref: PropTypes.func,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        type: PropTypes.oneOf(['txt', 'number', 'email', 'password']),
        size: PropTypes.oneOf(['small', 'natural', 'large', 'x-large']),
        onChange: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyPress: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    /**
     * Handle onKeyDown event.
     *
     * @param event
     */
    handleOnKeyDown(event) {
        this.props.onKeyDown(event);
    }

    /**
     * Handle onKeyPress event.
     *
     * @param event
     */
    handleOnKeyPress(event) {
        this.props.onKeyPress(event);
    }

    /**
     * Handle onChange event.
     *
     * @param event
     */
    handleOnChange(event) {
        this.setState({
            inputValue: event.target.value
        });
        this.props.onChange(event);
    }

    /**
     * Render the component.
     *
     * @returns {XML}
     */
    render() {
        let className = InputSize.size[this.props.size];

        this.props.invalid && (className += ' is-invalid');
        this.props.success && (className += ' state-valid');

        return (
            <div>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    className={className}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    onKeyDown={e => this.handleOnKeyDown(e)}
                    onChange={e => this.handleOnChange(e)}
                    onKeyPress={e => this.handleOnKeyPress(e)}
                    ref={this.props._ref}
                    value={this.state.inputValue}
                />
                <div
                    className={this.props.invalid && this.props.invalidFeedback !== '' ? 'invalid-feedback' : 'd-none'}>
                    {this.props.invalidFeedback}
                </div>
            </div>
        );
    }
}

export default Input;