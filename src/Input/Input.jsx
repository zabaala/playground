import React from 'react';
import UiComponent from "../UiComponent";
import PropTypes from 'prop-types';
import {inputSizes, inputSizesClassed, inputTypes, inputStates} from './InputUtils';

class Input extends UiComponent {

    static defaultProps = {
        type: 'text',
        size: 'normal',
        state: 'normal',
        disabled: false,
        placeholder: '',
        onChange: () => {},
        onKeyDown: () => {},
        onKeyPress: () => {},
    };

    static propTypes = {
        /** Element ref */
        _ref: PropTypes.func,
        /**
         * HTML ID of element
         */
        id: PropTypes.string,
        /**
         * Possible element states.
         */
        state: PropTypes.oneOf(inputStates),
        /**
         * Appear when have some content.
         * The color is changed based on selected state.
         */
        feedbackText: PropTypes.string,
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
        type: PropTypes.oneOf(inputTypes),
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
        let className = inputSizesClassed[this.props.size];

        this.props.state === 'error' && (className += ' is-invalid state-invalid');
        this.props.state === 'success' && (className += ' is-valid state-valid');

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
                {this.props.feedbackText !== '' && (
                    <div
                        className={'invalid-feedback d-block text-' + this.props.state}>
                        {this.props.feedbackText}
                    </div>
                )}

            </div>
        );
    }
}

export default Input;