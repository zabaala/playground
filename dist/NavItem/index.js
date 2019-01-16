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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var targetList = exports.targetList = _Link.targetList;

var propTypes = {
    active: _propTypes2.default.bool,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    href: _propTypes2.default.string,
    target: _propTypes2.default.oneOf(targetList)
};
var defaultProps = {
    active: false,
    icon: false,
    target: '_parent'
};

var NavItem = function NavItem(props) {
    var className = props.className,
        children = props.children,
        active = props.active,
        icon = props.icon,
        href = props.href,
        target = props.target,
        attributes = _objectWithoutProperties(props, ['className', 'children', 'active', 'icon', 'href', 'target']);

    var __activeClass = active === true ? 'active' : '';
    var __className = (0, _classnames2.default)('nav-item', __activeClass, className);

    var __activeStyle = {};

    if (active) {
        __activeStyle.borderBottom = '1px solid #467fcf';
    }

    return _react2.default.createElement(
        'li',
        _extends({ className: __className }, attributes),
        _react2.default.createElement(
            _Link2.default,
            { href: href, target: target, className: 'nav-link', style: __activeStyle },
            icon && _react2.default.createElement(_Icon2.default, { name: icon }),
            children
        )
    );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

exports.default = NavItem;