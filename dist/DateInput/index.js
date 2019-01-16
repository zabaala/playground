'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    feedbackText: _propTypes2.default.string,
    mask: _propTypes2.default.string,
    dateFormat: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    normalState: _propTypes2.default.oneOf(_Input.states)
};

var defaultProps = {
    mask: '11/11/1111',
    dateFormat: 'DD/MM/YYYY',
    feedbackText: 'Data inválida',
    required: false,
    onChange: function onChange() {},
    availableInputStates: 'normal'
};

var DateField = function (_Component) {
    _inherits(DateField, _Component);

    function DateField() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DateField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateField.__proto__ || Object.getPrototypeOf(DateField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isValid: false,
            inputLength: 0
        }, _this.handleOnChange = function (e) {
            e.persist();
            var inputValueLength = e.target.value.replace(/[\/_]/g, '').length; // accepted chars length.
            var dateIsValid = moment(e.target.value, _this.props.dateFormat).isValid();

            _this.setState({
                inputLength: inputValueLength,
                isValid: inputValueLength === 8 && dateIsValid
            }, function () {
                _this.props.onChange(e, _this.state.isValid);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Handle onChange.
     *
     * @param e
     */


    _createClass(DateField, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                value = _props.value,
                onChange = _props.onChange,
                normalState = _props.normalState,
                feedbackText = _props.feedbackText,
                mask = _props.mask,
                dateFormat = _props.dateFormat,
                required = _props.required,
                attributes = _objectWithoutProperties(_props, ['name', 'value', 'onChange', 'normalState', 'feedbackText', 'mask', 'dateFormat', 'required']);

            return _react2.default.createElement(_Input2.default, _extends({
                type: 'tel' // hacking to show a numeric keyboard to the user.
                , name: name,
                mask: mask,
                state: this.state.isValid ? normalState : this.state.inputLength === 0 ? normalState : 'error',
                feedbackText: feedbackText,
                showFeedbackText: this.state.inputLength >= 1 && !this.state.isValid,
                onChange: this.handleOnChange,
                value: value,
                required: required
            }, attributes));
        }
    }]);

    return DateField;
}(_react.Component);

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

exports.default = DateField;