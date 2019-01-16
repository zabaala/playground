'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
    /**
     * One or many css classes.
     */
    className: _propTypes2.default.string
};

var defaultProps = {};

var Text = function Text(props) {
    var className = props.className,
        children = props.children,
        attributes = _objectWithoutProperties(props, ['className', 'children']);

    var Tag = 'span';

    return _react2.default.createElement(
        Tag,
        _extends({ className: className }, attributes),
        children
    );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

exports.default = Text;