'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.targetList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var targetList = exports.targetList = ['_blank', '_self', '_parent', '_new'];

var propTypes = {
    /**
     * One or many css classes.
     */
    className: _propTypes2.default.string,
    /**
     * Define if alert is dismissible or not.
     */
    href: _propTypes2.default.string,
    /**
     * Type of alert.
     */
    target: _propTypes2.default.oneOf(targetList)
};

var defaultProps = {
    href: '#',
    target: '_parent',
    className: ''
};

var Link = function Link(props) {
    var className = props.className,
        href = props.href,
        target = props.target,
        children = props.children,
        attributes = _objectWithoutProperties(props, ['className', 'href', 'target', 'children']);

    return _react2.default.createElement(
        'a',
        _extends({ href: href, target: target, className: className }, attributes),
        children
    );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

exports.default = Link;