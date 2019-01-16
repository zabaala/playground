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

var _NavItem = require('../NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var alignments = exports.alignments = ['left', 'center', 'right'];

var propTypes = {
    className: _propTypes2.default.string,
    align: _propTypes2.default.oneOf(alignments)
};
var defaultProps = {
    align: 'left'
};

var Nav = function Nav(props) {
    var className = props.className,
        children = props.children,
        align = props.align,
        attributes = _objectWithoutProperties(props, ['className', 'children', 'align']);

    var __alignStyle = {
        left: {
            justifyContent: 'flex-start'
        },
        center: {
            justifyContent: 'center'
        },
        right: {
            justifyContent: 'flex-end'
        }
    };

    var __className = (0, _classnames2.default)('nav nav-tabs flex-column flex-lg-row border-0', className);

    return _react2.default.createElement(
        'ul',
        _extends({ className: __className }, attributes, { style: __alignStyle[align] }),
        children
    );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem2.default;

exports.default = Nav;