﻿// @hash v3-BD12CEB952E576470D1CEF6F9D35758F2A3D849B
// Automatically generated by ReactJS.NET. Do not edit, your changes will be overridden.
// Version: 3.4.1 (build 7d51701) with Babel 6.7.7
// Generated at: 10/23/2018 1:49:12 AM
///////////////////////////////////////////////////////////////////////////////
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Introduction = function (_React$Component) {
    _inherits(Introduction, _React$Component);

    function Introduction(props) {
        _classCallCheck(this, Introduction);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Introduction).call(this, props));

        _this.state = { title: "", description: "" };
        return _this;
    }

    _createClass(Introduction, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var xhr = new XMLHttpRequest();
            xhr.open('get', this.props.url, true);
            xhr.onload = function () {
                var data = JSON.parse(xhr.responseText);
                _this2.setState({ title: data.title, description: data.description });
            };
            xhr.send();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    this.state.title
                ),
                React.createElement(Paragraphs, { data: this.state.description })
            );
        }
    }]);

    return Introduction;
}(React.Component);