'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Generated by CoffeeScript 2.3.2
(function () {
  // This file is part of react-helpers
  // Copyright (C) 2017-present Dario Giovannetti <dev@dariogiovannetti.net>
  // Licensed under MIT
  // https://github.com/kynikos/react-helpers/blob/master/LICENSE
  var Component, HTML_TAG_NAMES, PureComponent, React, createElement, createFactory, createFragment, i, len, tagName;

  React = require('react');

  createElement = function createElement(type) {
    var _React2;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // Note that isPlainObject(args[0]) (from the 'is-plain-object' npm module)
    // returns true also for React elements!
    if (typeof args[0] === 'string' || React.isValidElement(args[0]) || Array.isArray(args[0])) {
      var _React;

      return (_React = React).createElement.apply(_React, [type, null].concat(args));
    }
    // I guess args[0] is a plain object then, let React.createElement possibly
    // complain about it
    return (_React2 = React).createElement.apply(_React2, [type].concat(args));
  };

  // TODO: Deprecate createFragment in a future version, just use React.Fragment
  createFragment = function createFragment() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return createElement.apply(undefined, [React.Fragment].concat(args));
  };

  // Note that React.createFactory() is "considered legacy" by upstream
  // https://reactjs.org/docs/react-api.html#createfactory
  createFactory = function createFactory(type) {
    return function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return createElement.apply(undefined, [type].concat(args));
    };
  };

  // TODO: Verify the tag names against html-tag-names in tests like in
  //       hyperscript-helpers
  //       Also include the SVG tags?
  // See https://github.com/ohanhi/hyperscript-helpers/issues/34 for the reason
  // why the tags aren't simply required from html-tag-names
  HTML_TAG_NAMES = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing', 'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

  for (i = 0, len = HTML_TAG_NAMES.length; i < len; i++) {
    tagName = HTML_TAG_NAMES[i];
    module.exports[tagName] = createFactory(tagName);
    module.exports[tagName.charAt(0).toUpperCase() + tagName.slice(1)] = createFactory(tagName);
  }

  Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component(props) {
      _classCallCheck(this, Component);

      var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

      if (_this.init != null) {
        _this.init(props);
      }
      return _this;
    }

    return Component;
  }(React.Component);

  PureComponent = function (_React$PureComponent) {
    _inherits(PureComponent, _React$PureComponent);

    function PureComponent(props) {
      _classCallCheck(this, PureComponent);

      var _this2 = _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call(this, props));

      if (_this2.init != null) {
        _this2.init(props);
      }
      return _this2;
    }

    return PureComponent;
  }(React.PureComponent);

  module.exports.createElement = createElement;

  module.exports.h = createElement;

  // TODO: Deprecate createFragment in a future version, just export
  // React.Fragment here
  module.exports.Fragment = createFragment;

  module.exports.createFactory = createFactory;

  module.exports.Component = Component;

  module.exports.PureComponent = PureComponent;

  module.exports.cloneElement = React.cloneElement;

  module.exports.isValidElement = React.isValidElement;

  module.exports.Children = React.Children;

  module.exports.createRef = React.createRef;

  module.exports.forwardRef = React.forwardRef;
}).call(undefined);