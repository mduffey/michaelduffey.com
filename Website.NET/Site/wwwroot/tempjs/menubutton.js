﻿// @hash v3-C7926E5DE360DC380D40943465099AB83E779CB2
// Automatically generated by ReactJS.NET. Do not edit, your changes will be overridden.
// Version: 3.4.1 (build 7d51701) with Babel 6.7.7
// Generated at: 10/23/2018 1:49:12 AM
///////////////////////////////////////////////////////////////////////////////
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuButton = function (_React$Component) {
    _inherits(MenuButton, _React$Component);

    function MenuButton() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(MenuButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {
            _this.props.onClick(_this.props.index);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuButton, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                {
                    type: 'button',
                    className: this.props.isActive ? 'btn btn-secondary active' : 'btn btn-secondary',
                    onClick: this.handleClick.bind(this)
                },
                this.props.name
            );
        }
    }]);

    return MenuButton;
}(React.Component);