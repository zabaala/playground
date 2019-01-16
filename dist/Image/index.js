'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActivityIndicator = require('../ActivityIndicator');

var _ActivityIndicator2 = _interopRequireDefault(_ActivityIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    /**
     * One or many css classes.
     */
    src: _propTypes2.default.string.isRequired,
    /**
     * With of image. Can be a number or a string.
     */
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * Height of image. Can be a number or a string.
     */
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    /**
     * Function that will be called when image fully loaded.
     */
    onLoad: _propTypes2.default.func,
    /**
     * Function that will be called when a load image error occur.
     */
    onError: _propTypes2.default.func
};

var defaultProps = {
    onLoad: function onLoad() {},
    onError: function onError() {}
};

var _ref = _react2.default.createElement(_ActivityIndicator2.default, { width: 30, height: 30 });

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.componentDidMount = function () {
            _this.download(_this.props.src);
        };

        _this.componentDidUpdate = function (prevProps) {
            if (prevProps.src !== _this.props.src) {
                _this.download(_this.props.src);
            }
        };

        _this.handleOnLoaded = function (e) {
            _this.props.onLoad(e);
        };

        _this.handleOnError = function (e) {
            _this.props.onError(e);
        };

        _this.download = function (src) {
            fetch(src).then(function (response) {
                _this.setState({
                    src: null,
                    error: false
                });

                if (!response.ok) {
                    _this.handleOnError();
                    throw Error(response.statusText);
                }

                response.arrayBuffer().then(function (buffer) {
                    var base64Flag = 'data:image/jpeg;base64,';
                    var imageStr = _this.arrayBufferToBase64(buffer);

                    _this.setState({
                        src: base64Flag + imageStr
                    });
                });
            }).catch(function (error) {
                _this.setState({
                    src: null,
                    error: true
                });
            });
        };

        _this.arrayBufferToBase64 = function (buffer) {
            var binary = '';
            var bytes = [].slice.call(new Uint8Array(buffer));

            bytes.forEach(function (b) {
                return binary += String.fromCharCode(b);
            });

            return window.btoa(binary);
        };

        _this.state = {
            src: null,
            error: false
        };

        _this.handleOnLoaded = _this.handleOnLoaded.bind(_this);
        _this.handleOnError = _this.handleOnError.bind(_this);
        return _this;
    }

    /**
     * @param src
     */


    /**
     * @param buffer
     * @returns {string}
     */


    _createClass(Image, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                onLoad = _props.onLoad,
                onError = _props.onError,
                src = _props.src,
                others = _objectWithoutProperties(_props, ['onLoad', 'onError', 'src']);

            if (this.state.src === null && this.state.error === false) {
                return _ref;
            }

            if (this.state.src !== null && this.state.error === false) {
                return _react2.default.createElement('img', _extends({}, others, {
                    src: this.state.src,
                    onLoad: function onLoad(e) {
                        return _this2.handleOnLoaded(e);
                    }
                }));
            }

            // @todo: The user can define a component to be returned, if any error occur...
            // Maybe: create a Empty component.
            if (this.state.error === true) {
                return '';
            }
        }
    }]);

    return Image;
}(_react2.default.Component);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

exports.default = Image;