'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.types = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var types = exports.types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

var propTypes = {
    /**
     * One or many css classes.
     */
    className: _propTypes2.default.string,
    /**
     * Type of alert.
     */
    type: _propTypes2.default.oneOf(types),
    /**
     * Define if alert is dismissible or not.
     */
    dismissible: _propTypes2.default.bool
};

var defaultProps = {
    type: 'info',
    dismissible: false
};

var _ref = _react2.default.createElement('button', { type: 'button', className: 'close', 'data-dismiss': 'alert' });

var Alert = function Alert(props) {
    var className = props.className,
        type = props.type,
        dismissible = props.dismissible,
        children = props.children,
        attributes = _objectWithoutProperties(props, ['className', 'type', 'dismissible', 'children']);

    var dismissibleClass = dismissible ? 'alert-dismissible' : '';
    var alertClass = 'alert-' + type;
    var cssClass = 'alert ' + alertClass + ' ' + dismissibleClass + ' ' + className;

    return _react2.default.createElement(
        'div',
        _extends({ className: cssClass }, attributes, { role: 'alert' }),
        dismissible && _ref,
        children
    );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

exports.default = Alert;