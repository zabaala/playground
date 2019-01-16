'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Separator = function Separator(_ref) {
    var className = _ref.className;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('hr', { className: className + ' separator' })
    );
};

Separator.propTypes = {
    className: _propTypes2.default.string
};

Separator.defaultProps = {
    className: "m-0"

};

exports.default = Separator;