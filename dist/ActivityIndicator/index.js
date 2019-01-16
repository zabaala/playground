'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rolling = require('react-svg-loader!../../images/svg/rolling.svg');

var _rolling2 = _interopRequireDefault(_rolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    /**
     * Width of element.
     */
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    /**
     * Height of element.
     */
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

var defaultProps = {
    width: 100,
    height: 100
};

var ActivityIndicator = function ActivityIndicator(props) {
    return _react2.default.createElement(_rolling2.default, props);
};

ActivityIndicator.propTypes = propTypes;
ActivityIndicator.defaultProps = defaultProps;

exports.default = ActivityIndicator;