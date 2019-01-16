'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.colWidths = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.isobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colWidths = exports.colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]);

var columnProps = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.shape({
    size: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
})]);

var propTypes = {
    /**
     * One or many css classes.
     */
    className: _propTypes2.default.string,
    /**
     * Extra-small column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    xs: columnProps,
    /**
     * Small column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    sm: columnProps,
    /**
     * Medium column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    md: columnProps,
    /**
     * Large column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    lg: columnProps,
    /**
     * Extra-large column size.
     *
     * @example size values:
     *   12 || "12" => col-12 or col-`width`-12
     *   auto => col-auto or col-`width`-auto
     *   true => col or col-`width`
     *
     */
    xl: columnProps,
    /**
     * Accepted widths of component.
     */
    widths: _propTypes2.default.array,
    /**
     * Column html tag.
     */
    tag: _propTypes2.default.string
};

var defaultProps = {
    className: '',
    widths: colWidths,
    tag: 'div'
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : 'col-' + colWidth;
    } else if (colSize === 'auto') {
        return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
    }

    return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var Col = function Col(props) {
    var className = props.className,
        children = props.children,
        widths = props.widths,
        tag = props.tag,
        attributes = _objectWithoutProperties(props, ['className', 'children', 'widths', 'tag']);

    var colClasses = [];

    widths.forEach(function (colWidth, i) {
        var columnProp = props[colWidth];

        delete attributes[colWidth];

        if (!columnProp && columnProp !== '') {
            return;
        }

        var isXs = !i;

        if ((0, _lodash2.default)(columnProp)) {
            var _classnames;

            var colSizeInterFix = isXs ? '-' : '-' + colWidth + '-';
            var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

            colClasses.push((0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_classnames, 'order' + colSizeInterFix + columnProp.order, columnProp.order || columnProp.order === 0), _defineProperty(_classnames, 'offset' + colSizeInterFix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classnames)));
        } else {
            var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
            colClasses.push(_colClass);
        }
    });

    if (!colClasses.length) {
        colClasses.push('col');
    }

    var _className = (0, _classnames3.default)(className, colClasses);

    var Tag = '' + tag;

    return _react2.default.createElement(
        Tag,
        _extends({ className: _className.trim() }, attributes),
        children
    );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

exports.default = Col;