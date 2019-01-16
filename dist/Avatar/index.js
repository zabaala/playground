'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.statusList = exports.sizes = exports.colors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colors = exports.colors = ['blue', 'azure', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'lime', 'green', 'teal', 'cyan', 'gray', 'gray-dark'];

var sizes = exports.sizes = ['sm', 'normal', 'md', 'lg', 'xl', 'xxl'];

var statusList = exports.statusList = ['none', 'green', 'yellow', 'red'];

var propTypes = {
    /**
     * Background color of avatar.
     */
    color: _propTypes2.default.oneOf(colors),
    /**
     * Size of avatar.
     */
    size: _propTypes2.default.oneOf(sizes),
    /**
     * Status color of avatar.
     */
    status: _propTypes2.default.oneOf(statusList),
    /**
     * HTML additional className.
     */
    className: _propTypes2.default.string,
    /**
     * Image source to be placed as background of avatar.
     * This property use <Image /> component.
     */
    src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

var defaultProps = {
    color: 'gray',
    size: 'normal',
    status: 'none',
    src: false,
    className: ''
};

var Avatar = function Avatar(props) {
    var className = props.className,
        children = props.children,
        status = props.status,
        size = props.size,
        color = props.color,
        src = props.src,
        attributes = _objectWithoutProperties(props, ['className', 'children', 'status', 'size', 'color', 'src']);

    var statusClass = status !== 'none' ? 'avatar-status bg-' + status : '';
    var sizeClass = size !== 'normal' ? 'avatar-' + size : '';
    var colorClass = color !== '' ? 'avatar-' + color : '';
    var __className = (0, _classnames2.default)('avatar', colorClass, sizeClass, className);

    var style = {};
    var __children = children;

    if (src !== '' && src !== false) {
        style.backgroundImage = 'url(' + src + ')';
        __children = null;
    }

    return _react2.default.createElement(
        'span',
        _extends({ className: __className, style: style }, attributes),
        __children,
        statusClass && _react2.default.createElement('span', { className: statusClass })
    );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

exports.default = Avatar;