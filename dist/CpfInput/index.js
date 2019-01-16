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
    required: _propTypes2.default.bool,
    normalState: _propTypes2.default.oneOf(_Input.states)
};

var defaultProps = {
    feedbackText: 'Invalid CPF.',
    required: false,
    onChange: function onChange() {},
    availableInputStates: 'normal'
};

var CpfInput = function (_Component) {
    _inherits(CpfInput, _Component);

    function CpfInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CpfInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CpfInput.__proto__ || Object.getPrototypeOf(CpfInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isValid: false,
            inputLength: 0,
            value: '',
            ok: false
        }, _this.isValid = function (value) {
            var cpf = value.replace(/[^\d]+/g, '');

            if (cpf === '') return false;

            // Elimina CPFs invalidos conhecidos
            if (cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") return false;

            // Valida 1o digito
            var add = 0;

            for (var i = 0; i < 9; i++) {
                add += parseInt(cpf.charAt(i)) * (10 - i);
            }

            var rev = 11 - add % 11;

            if (rev === 10 || rev === 11) {
                rev = 0;
            }

            if (rev !== parseInt(cpf.charAt(9))) {
                return false;
            }

            // Valida 2o digito
            add = 0;

            for (var _i = 0; _i < 10; _i++) {
                add += parseInt(cpf.charAt(_i)) * (11 - _i);
            }

            rev = 11 - add % 11;

            if (rev === 10 || rev === 11) {
                rev = 0;
            }

            return rev === parseInt(cpf.charAt(10));
        }, _this.handleOnChange = function (e) {
            e.persist();

            var isValid = _this.isValid(e.target.value);

            _this.setState({
                inputLength: e.target.value.length,
                value: e.target.value,
                isValid: isValid,
                ok: isValid
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


    _createClass(CpfInput, [{
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
                type: 'tel',
                numberOnly: true,
                name: name,
                maxLength: 11,
                state: this.state.isValid ? normalState : this.state.inputLength === 0 ? normalState : 'error',
                feedbackText: feedbackText,
                showFeedbackText: this.state.inputLength > 0 && !this.state.isValid,
                onChange: this.handleOnChange,
                value: this.state.value,
                required: required,
                ok: this.state.inputLength > 0 && this.state.ok && this.props.ok
            }, attributes));
        }
    }]);

    return CpfInput;
}(_react.Component);

CpfInput.propTypes = propTypes;
CpfInput.defaultProps = defaultProps;

exports.default = CpfInput;