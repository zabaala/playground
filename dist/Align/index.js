'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.alignments = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var alignments = exports.alignments = ['left', 'center', 'right', 'justify'];

var propTypes = {
    /**
     * One or many css classes.
     */
    className: _propTypes2.default.string,
    /**
     * Size of element.
     */
    align: _propTypes2.default.oneOf(alignments)
};

var defaultProps = {
    align: 'left'
};

var Align = function Align(props) {
    var className = props.className,
        children = props.children,
        align = props.align,
        attributes = _objectWithoutProperties(props, ['className', 'children', 'align']);

    var __className = (0, _classnames2.default)(className, 'text-' + align);

    return _react2.default.createElement(
        'div',
        _extends({ className: __className }, attributes),
        children
    );
};

Align.propTypes = propTypes;
Align.defaultProps = defaultProps;

exports.default = Align;