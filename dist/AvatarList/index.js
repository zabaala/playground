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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /**
     * Define the list as stacked.
     */
    stacked: _propTypes2.default.bool,
    /**
     * HTML additional className.
     */
    className: _propTypes2.default.string
};

var defaultProps = {
    stacked: false
};

var AvatarList = function AvatarList(props) {
    var className = props.className,
        children = props.children,
        stacked = props.stacked,
        attributes = _objectWithoutProperties(props, ['className', 'children', 'stacked']);

    var stackedClass = stacked === true ? 'avatar-list-stacked' : '';
    var __className = (0, _classnames2.default)('avatar-list', stackedClass, className);

    return _react2.default.createElement(
        'span',
        _extends({ className: __className }, attributes),
        children
    );
};

AvatarList.propTypes = propTypes;
AvatarList.defaultProps = defaultProps;

exports.default = AvatarList;