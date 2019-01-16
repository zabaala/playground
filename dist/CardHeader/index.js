'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CardTitle = require('../CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardOptions = require('../CardOptions');

var _CardOptions2 = _interopRequireDefault(_CardOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {};
var defaultProps = {};

var CardHeader = function CardHeader(props) {
    var className = props.className,
        children = props.children,
        attributes = _objectWithoutProperties(props, ['className', 'children']);

    var __className = (0, _classnames2.default)('card-header', className);

    return _react2.default.createElement(
        'div',
        _extends({ className: __className }, attributes),
        children
    );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
CardHeader.Title = _CardTitle2.default;
CardHeader.Options = _CardOptions2.default;

exports.default = CardHeader;