'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.states = exports.sizesClasses = exports.sizes = exports.types = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UiComponent2 = require('../UiComponent');

var _UiComponent3 = _interopRequireDefault(_UiComponent2);

var _MaskedInput = require('../MaskedInput');

var _MaskedInput2 = _interopRequireDefault(_MaskedInput);

var _ActivityIndicator = require('../ActivityIndicator');

var _ActivityIndicator2 = _interopRequireDefault(_ActivityIndicator);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

require('./index.sass');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Style


/**
 * Available types.
 *
 * @type {[string,string,string,string,string,string,string]}
 */
var types = exports.types = ['text', 'password', 'email', 'number', 'tel', 'url', 'date'];

/**
 * Available sizes.
 *
 * @type {[string,string,string,string]}
 */
var sizes = exports.sizes = ['sm', 'md', 'lg', 'xl'];

var sizesClasses = exports.sizesClasses = {
    sm: 'form-control form-control-sm',
    md: 'form-control',
    lg: 'form-control form-control-lg',
    xl: 'form-control form-control-xl'
};

/**
 * Available states.
 * @type {[string,string,string,string]}
 */
var states = exports.states = ['error', 'warning', 'normal', 'success'];

var propTypes = {
    /**
     * Type of textField.
     */
    type: _propTypes2.default.oneOf(types).isRequired,
    /**
     * Name of textField.
     */
    name: _propTypes2.default.string.isRequired,
    /**
     * Value of textField.
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * The size of component.
     */
    size: _propTypes2.default.oneOf(sizes),
    /**
     * The state of component.
     */
    state: _propTypes2.default.oneOf(states),
    /**
     * Event called onBlur.
     */
    onBlur: _propTypes2.default.func,
    /**
     * Event called onChange.
     */
    onChange: _propTypes2.default.func,
    /**
     * Event called onFocus.
     */
    onFocus: _propTypes2.default.func,
    /**
     * Event called onKeyUp.
     */
    onKeyUp: _propTypes2.default.func,
    /**
     * Event called onKeyPress.
     */
    onKeyPress: _propTypes2.default.func,
    /**
     * A feedback text container.
     */
    feedbackText: _propTypes2.default.string,
    /**
     * Show or not the feedback text container.
     */
    showFeedbackText: _propTypes2.default.bool,
    /**
     * Define if component must have accept only numbers.
     */
    numberOnly: _propTypes2.default.bool,
    /**
     * Define if input is required.
     */
    required: _propTypes2.default.bool,
    /**
     * Define if input is disabled.
     */
    disabled: _propTypes2.default.bool,
    /**
     * Define if the component is waiting for any processing.
     */
    waiting: _propTypes2.default.bool,
    /**
     * Parse data into a mask.
     */
    mask: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    /**
     * Maximum number of characters.
     */
    maxLength: _propTypes2.default.number,
    /**
     * Tab index of element.
     */
    tabIndex: _propTypes2.default.number,
    /**
     * A pipe that will be executed when input is changed.
     * When false or null the pipe will not be called,
     * otherwise the pipe must be a function that return the piped value.
     *
     * Example:
     * pipe={value => value.toUpperCase()}
     */
    pipe: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string, _propTypes2.default.bool]),

    /**
     * Show check icon.
     */
    ok: _propTypes2.default.bool
};

var defaultProps = {
    numberOnly: false,
    value: "",
    required: false,
    size: 'md',
    state: 'normal',
    onBlur: function onBlur() {},
    onKeyUp: function onKeyUp() {},
    onKeyPress: function onKeyPress() {},
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    disabled: false,
    waiting: false,
    mask: false,
    maxLength: -1,
    tabIndex: 0,
    pipe: false,
    ok: false,
    showFeedbackText: false
};

var _ref = _react2.default.createElement(
    'span',
    { className: 'required' },
    '*'
);

var _ref2 = _react2.default.createElement(_ActivityIndicator2.default, {
    className: 'activity-indicator',
    width: 20,
    height: 20 });

var _ref3 = _react2.default.createElement(_Icon2.default, { name: 'check', className: 'check' });

var Input = function (_UiComponent) {
    _inherits(Input, _UiComponent);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.state = {
            focused: false,
            value: _this.props.value
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            if (nextProps.value !== '' && _this.props.value === '') {
                _this.setState({
                    focused: true,
                    value: nextProps.value
                });
            }

            return true;
        };

        _this.focus = function () {
            _this.textFieldComponent.current.focus();
        };

        _this.handleOnChange = function (e) {
            e.persist();

            var setValueState = function setValueState(value) {
                if (_this.props.numberOnly === true) {
                    value = value.replace(/[^0-9\\.]+/g, '');
                }

                _this.setState({
                    value: _this.props.pipe.constructor === Function ? _this.props.pipe(value) : value
                }, function () {
                    return _this.props.onChange(e);
                });
            };

            // maxLength constraint...
            if (_this.props.maxLength !== -1) {
                if (e.target.value.length <= _this.props.maxLength) {
                    setValueState(e.target.value);
                }
                return;
            }

            setValueState(e.target.value);
        };

        _this.textFieldComponent = _react2.default.createRef();
        return _this;
    }

    /**
     * Update the state value, if him contains a new value.
     *
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */


    /**
     * Focus handler.
     * Called externally.
     */


    /**
     * onChange handler.
     *
     * @param e
     */


    _createClass(Input, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Tag = this.props.mask === false ? 'input' : _MaskedInput2.default;

            var className = [sizesClasses[this.props.size]];

            var containerClasses = ["input-container", this.props.size, this.props.state];

            return _react2.default.createElement(
                'div',
                { className: containerClasses.join(' ') },
                _react2.default.createElement(
                    'div',
                    { className: 'input' },
                    _react2.default.createElement(Tag, {
                        className: className.join(' '),
                        ref: this.textFieldComponent,
                        type: this.props.type,
                        name: this.props.name,
                        value: this.state.value,
                        placeholder: this.props.placeholder,
                        onFocus: this.props.onFocus,
                        onChange: function onChange(e) {
                            return _this2.handleOnChange(e);
                        },
                        onBlur: this.props.onBlur,
                        onKeyUp: this.props.onKeyUp,
                        onKeyPress: this.props.onKeyPress,
                        disabled: this.props.disabled || this.props.waiting,
                        mask: this.props.mask || '',
                        required: this.props.required,
                        alt: this.props.feedbackText,
                        tabIndex: this.props.tabIndex
                    }),
                    this.props.required && _ref,
                    this.props.waiting && _ref2,
                    this.props.ok && _ref3
                ),
                this.props.showFeedbackText && _react2.default.createElement(
                    'div',
                    { className: 'feedback-text' },
                    this.props.feedbackText
                )
            );
        }
    }]);

    return Input;
}(_UiComponent3.default);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

exports.default = Input;