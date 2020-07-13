"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _evaIcons = require("eva-icons");

var eva = _interopRequireWildcard(_evaIcons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @name react-eva-icons
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Dimitris Raptis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright Dimitris Raptis 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Icon = function (_Component) {
	_inherits(Icon, _Component);

	function Icon() {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	}

	_createClass(Icon, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setupEvaIcons();
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			this.setupEvaIcons();
		}
	}, {
		key: "setupEvaIcons",
		value: function setupEvaIcons() {
			var _props = this.props,
			    fill = _props.fill,
			    animation = _props.animation,
			    size = _props.size;


			var config = {
				fill: fill,
				width: size,
				height: size,
				animation: animation
			};

			eva.replace(config);
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    name = _props2.name,
			    fill = _props2.fill,
			    size = _props2.size,
			    animation = _props2.animation;
			var type = animation.type,
			    _animation$hover = animation.hover,
			    hover = _animation$hover === undefined ? false : _animation$hover,
			    _animation$infinite = animation.infinite,
			    infinite = _animation$infinite === undefined ? false : _animation$infinite;

			var icon = _react2.default.createElement("i", _extends({
				"data-eva": name,
				"data-eva-fill": fill,
				"data-eva-height": size,
				"data-eva-width": size
			}, type !== undefined ? {
				'data-eva-animation': type,
				'data-eva-hover': hover,
				'data-eva-infinite': infinite
			} : {}));
			return icon;
		}
	}]);

	return Icon;
}(_react.Component);

Icon.propTypes = {
	animation: _propTypes2.default.object,
	fill: _propTypes2.default.string,
	name: _propTypes2.default.string,
	size: _propTypes2.default.string
};

Icon.defaultProps = {
	animation: {},
	fill: "#fff",
	name: "",
	size: "20"
};

exports.default = Icon;