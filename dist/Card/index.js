'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CardHeader = require('../CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require('../CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require('../CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {};
var defaultProps = {};

var Card = function Card(props) {
    var className = props.className,
        children = props.children,
        attributes = _objectWithoutProperties(props, ['className', 'children']);

    var __className = (0, _classnames2.default)('card', className);

    return _react2.default.createElement(
        'div',
        _extends({ className: __className }, attributes),
        children
    );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

// additional components...
Card.Header = _CardHeader2.default;
Card.Body = _CardBody2.default;
Card.Footer = _CardFooter2.default;

exports.default = Card;