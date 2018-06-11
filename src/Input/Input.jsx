import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inputSizes } from './InputUtils';

class Input extends Component {

    static defaultProps = {
        type: 'txt',
        size: 'default',
        disabled: false,
        placeholder: '',
        onChange: () => {},
        onKeyDown: () => {},
        onKeyPress: () => {},
    };

    static propTypes = {
        /**
         * HTML ID of element
         */
        id: PropTypes.string,
        /**
         * Possible element states.
         */
        state: PropTypes.arrayOf(['error', 'warning', 'default', 'success']),
        /**
         * Appear when have some content.
         * The color is changed based on selected state.
         */
        feedbackText: PropTypes.string,
        _ref: PropTypes.func,
        /**
         * Disable or enable the component.
         */
        disabled: PropTypes.bool,
        /**
         * Element placeholder.
         */
        placeholder: PropTypes.string,
        /**
         * Type of component.
         */
        type: PropTypes.oneOf(['txt', 'number', 'email', 'password']),
        /**
         * Available sizes of component.
         */
        size: PropTypes.oneOf(inputSizes),
        /**
         * Function that should be called when component is changed.
         */
        onChange: PropTypes.func,
        /**
         * Function that should be called when a key is down.
         */
        onKeyDown: PropTypes.func,
        /**
         * Function that should be called when a key is pressed.
         */
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
        let className = inputSizes[this.props.size];

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