'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.colors = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = exports.colors = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'white', 'gray', 'gray-dark', 'azure', 'lime', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'black'];

var _colors = {
    blue: '#467fcf',
    indigo: '#6574cd',
    purple: '#a55eea',
    pink: '#f66d9b',
    red: '#cd201f',
    orange: '#fd9644',
    yellow: '#f1c40f',
    green: '#5eba00',
    teal: '#2bcbba',
    cyan: '#17a2b8',
    white: '#fff',
    gray: '#868e96',
    'gray-dark': '#343a40',
    azure: '#45aaf2',
    lime: '#7bd235',
    primary: '#467fcf',
    secondary: '#868e96',
    success: '#5eba00',
    info: '#45aaf2',
    warning: '#f1c40f',
    danger: '#cd201f',
    light: '#f8f9fa',
    dark: '#343a40',
    black: '#000'
};

var propTypes = {
    color: _propTypes2.default.string.isRequired
};

var Color = function Color(_ref) {
    var color = _ref.color,
        children = _ref.children;


    var style = {
        color: _colors[color]
    };

    return _react2.default.createElement(
        'span',
        { style: style },
        children
    );
};

Color.propTypes = propTypes;

exports.default = Color;