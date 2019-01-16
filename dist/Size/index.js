'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sizes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = exports.sizes = ['8', '9', '10', '12', '14', '16', '18', '20', '24', '30', '32', '36', '48', '60', '72'];

var propTypes = {
    size: _propTypes2.default.string.isRequired
};

var Size = function Size(_ref) {
    var size = _ref.size,
        children = _ref.children;


    return _react2.default.createElement(
        'span',
        { className: 's-' + size },
        children
    );
};

Size.propTypes = propTypes;

exports.default = Size;