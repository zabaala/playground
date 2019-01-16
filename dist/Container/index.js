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
    className: _propTypes2.default.string,
    /**
     * Size of element.
     */
    fluid: _propTypes2.default.bool
};

var defaultProps = {
    fluid: false,
    className: ''
};

var Container = function Container(_ref) {
    var className = _ref.className,
        children = _ref.children,
        fluid = _ref.fluid,
        attributes = _objectWithoutProperties(_ref, ['className', 'children', 'fluid']);

    var containerClass = fluid ? 'container-fluid' : 'container';
    var _className = containerClass + ' ' + className;

    return _react2.default.createElement(
        'div',
        _extends({ className: _className.trim() }, attributes),
        children
    );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

exports.default = Container;