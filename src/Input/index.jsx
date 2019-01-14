import React from 'react'
import PropTypes from 'prop-types';
import UiComponent from "../UiComponent";
import MaskedInput from '../MaskedInput';
import ActivityIndicator from "../ActivityIndicator";
import Icon from "../Icon";

//Style
import './index.sass';

/**
 * Available types.
 *
 * @type {[string,string,string,string,string,string,string]}
 */
export const types = [
    'text',
    'password',
    'email',
    'number',
    'tel',
    'url',
    'date'
];

/**
 * Available sizes.
 *
 * @type {[string,string,string,string]}
 */
export const sizes = ['sm', 'md', 'lg', 'xl'];

export const sizesClasses = {
    sm: 'form-control form-control-sm',
    md: 'form-control',
    lg: 'form-control form-control-lg',
    xl: 'form-control form-control-xl',
};

/**
 * Available states.
 * @type {[string,string,string,string]}
 */
export const states = ['error', 'warning', 'normal', 'success'];

const propTypes = {
    /**
     * Type of textField.
     */
    type: PropTypes.oneOf(types).isRequired,
    /**
     * Name of textField.
     */
    name: PropTypes.string.isRequired,
    /**
     * Value of textField.
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    /**
     * The size of component.
     */
    size: PropTypes.oneOf(sizes),
    /**
     * The state of component.
     */
    state: PropTypes.oneOf(states),
    /**
     * Event called onBlur.
     */
    onBlur: PropTypes.func,
    /**
     * Event called onChange.
     */
    onChange: PropTypes.func,
    /**
     * Event called onFocus.
     */
    onFocus: PropTypes.func,
    /**
     * Event called onKeyUp.
     */
    onKeyUp: PropTypes.func,
    /**
     * Event called onKeyPress.
     */
    onKeyPress: PropTypes.func,
    /**
     * A prop used from a parent element, to inform to this compoment if the parent test passes.
     * Must return true or false.
     */
    isValid: PropTypes.bool,
    /**
     * Error message the will appeared when a error occur (when state is invalid).
     */
    feedbackText: PropTypes.string,
    /**
     * Define if component must have accept only numbers.
     */
    numberOnly: PropTypes.bool,
    /**
     * Define if input is required.
     */
    required: PropTypes.bool,
    /**
     * Define if input is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Define if the component is waiting for any processing.
     */
    waiting: PropTypes.bool,
    /**
     * Parse data into a mask.
     */
    mask: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    /**
     * Maximum number of characters.
     */
    maxLength: PropTypes.number,
    /**
     * Tab index of element.
     */
    tabIndex: PropTypes.number,
    /**
     * A pipe that will be executed when input is changed.
     * When false or null the pipe will not be called,
     * otherwise the pipe must be a function that return the piped value.
     *
     * Example:
     * pipe={value => value.toUpperCase()}
     */
    pipe: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.bool
    ]),

    ok: PropTypes.bool
};

const defaultProps = {
    numberOnly: false,
    value: "",
    required: false,
    size: 'md',
    state: 'normal',
    onBlur: () => {},
    onKeyUp: () => {},
    onKeyPress: () => {},
    onChange: () => {},
    onFocus: () => {},
    isValid: true,
    disabled: false,
    waiting: false,
    mask: false,
    maxLength: -1,
    tabIndex: 0,
    pipe: false,
    ok: false
};

class Input extends UiComponent {

    state = {
        focused: false,
        invalid: false,
        value: this.props.value
    };

    constructor(props) {
        super(props);
        this.textFieldComponent = React.createRef();
    }

    /**
     * Update the state value, if him contains a new value.
     *
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.value !== '' && this.props.value === '') {
            this.setState({
                focused: true,
                value: nextProps.value
            });
        }

        return true;
    };

    /**
     * Bind component update, to set state of invalid attribute.
     *
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.isValid !== this.props.isValid) {
            this.setState({
                invalid: !this.props.isValid
            });
        }
    };

    /**
     * Change state of focused state.
     */
    labelAnimation = () => {
        this.setState({
            focused: true
        });
    };

    /**
     * Validate method called every time than elements is changed.
     */
    validate = () => {
        if (
            ! this.props.isValid
            || (this.props.required && this.state.value === '')
        ) {
            this.setState({invalid: true});
        } else {
            this.setState({invalid: false});
        }
    };

    /**
     * Check if input has a empty value, to reset the label
     * to original position.
     */
    resetLabel = () => {
        if (! this.state.value) {
            this.setState({
                focused: false
            });
        }
    };

    /**
     * Focus handler.
     * Called externally.
     */
    focus = () => {
        this.textFieldComponent.current.focus();
    };

    /**
     * onBlur handler.
     *
     * @param e
     */
    handleOnBlur = (e) => {
        e.persist();

        setTimeout(() => {
            this.setState({
                invalid: !this.props.isValid
            }, () => this.props.onBlur(e, !this.state.invalid));
        }, 100);

        this.resetLabel();
    };

    /**
     * onChange handler.
     *
     * @param e
     */
    handleOnChange = (e) => {
        this.props.onChange(e, !this.state.invalid);

        const setState = (value) => this.setState({
            value: this.props.pipe.constructor === Function ? this.props.pipe(value) : value
        }, () => {
            this.validate();
        });

        // Number only constraint...
        if (this.props.numberOnly === true) {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                setState(e.target.value);
            }
            return;
        }

        // maxLength constraint...
        if(this.props.maxLength !== -1) {
            if (e.target.value.length <= this.props.maxLength) {
                setState(e.target.value);
            }
            return;
        }

        // other cases...
        setState(e.target.value);

    };

    /**
     * onFocus handler.
     *
     * @param e
     */
    handleOnFocus = (e) => {
        this.props.onFocus(e);
        this.labelAnimation();
    };

    /**
     * onKeyUp handler.
     *
     * @param e
     */
    handleOnKeyUp = (e) => {
        this.props.onKeyUp(e);
    };

    /**
     * onKeyPress handler.
     *
     * @param e
     */
    handleOnKeyPress = (e) => {
        this.props.onKeyUp(e);
    };

    render() {

        const Tag = this.props.mask === false ? 'input' : MaskedInput;

        const className = [sizesClasses[this.props.size]];

        if (this.state.invalid) {
            className.push('invalid');
        }

        return (
            <div className={"form-input " + this.props.size}>
                <div className="input">
                    <Tag
                        className={className.join(' ')}
                        ref={this.textFieldComponent}
                        type={ this.props.type }
                        name={ this.props.name }
                        value={ this.state.value }
                        placeholder={this.props.placeholder}
                        style={{
                            color: this.props.color,
                            borderColor: this.state.invalid && 'red'
                        }}
                        onFocus={ e => this.handleOnFocus(e) }
                        onChange={ e => this.handleOnChange(e) }
                        onBlur={ e => this.handleOnBlur(e) }
                        onKeyUp={ e => this.handleOnKeyUp(e) }
                        onKeyPress={e => this.handleOnKeyPress(e)}
                        disabled={this.props.disabled || this.props.waiting}
                        mask={this.props.mask || ''}
                        required={this.props.required}
                        alt={this.props.feedbackText}
                        tabIndex={this.props.tabIndex}
                    />

                    {
                        this.props.required &&
                        <span className="required">*</span>
                    }

                    {
                        this.props.waiting &&
                        <ActivityIndicator
                            className="activity-indicator"
                            width={20}
                            height={20} />
                    }

                    { this.props.ok && <Icon name="check" className="check" /> }
                </div>

                <div className="feedback-text" style={{display: this.state.invalid ? '' : 'none'}}>
                    { this.props.feedbackText }
                </div>
            </div>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
