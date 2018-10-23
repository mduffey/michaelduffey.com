﻿// @hash v3-E05900F2CA34854CBF10E822415DA0E7920785B5
// Automatically generated by ReactJS.NET. Do not edit, your changes will be overridden.
// Version: 3.4.1 (build 7d51701) with Babel 6.7.7
// Generated at: 10/23/2018 1:49:12 AM
///////////////////////////////////////////////////////////////////////////////
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraphs = function (_React$Component) {
    _inherits(Paragraphs, _React$Component);

    function Paragraphs() {
        _classCallCheck(this, Paragraphs);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Paragraphs).apply(this, arguments));
    }

    _createClass(Paragraphs, [{
        key: "render",
        value: function render() {
            if (this.props.data !== '') {
                // The key is the index since we're splitting the paragraph up ourselves.
                var split = this.props.data.split("\n").map(function (i, key) {
                    return React.createElement(
                        "p",
                        { key: key },
                        i
                    );
                });
                return React.createElement(
                    "div",
                    null,
                    split
                );
            }
            return null;
        }
    }]);

    return Paragraphs;
}(React.Component);