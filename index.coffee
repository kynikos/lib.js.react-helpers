# This file is part of react-helpers
# Copyright (C) 2017-present Dario Giovannetti <dev@dariogiovannetti.net>
# Licensed under MIT
# https://github.com/kynikos/react-helpers/blob/master/LICENSE

React = require('react')


createElement = (type, args...) ->
    # Note that isPlainObject(args[0]) (from the 'is-plain-object' npm module)
    # returns true also for React elements!
    if typeof args[0] is 'string' or React.isValidElement(args[0]) or
                                                        Array.isArray(args[0])
        return React.createElement(type, null, args...)
    # I guess args[0] is a plain object then, let React.createElement possibly
    # complain about it
    return React.createElement(type, args...)


# TODO: Deprecate createFragment in a future version, just use React.Fragment
createFragment = (args...) ->
    return createElement(React.Fragment, args...)


# Note that React.createFactory() is "considered legacy" by upstream
# https://reactjs.org/docs/react-api.html#createfactory
createFactory = (type) ->
    return (args...) ->
        return createElement(type, args...)


# TODO: Verify the tag names against html-tag-names in tests like in
#       hyperscript-helpers
#       Also include the SVG tags?
# See https://github.com/ohanhi/hyperscript-helpers/issues/34 for the reason
# why the tags aren't simply required from html-tag-names
HTML_TAG_NAMES = [
  'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside',
  'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink',
  'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite',
  'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd',
  'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em',
  'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form',
  'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header',
  'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins',
  'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing',
  'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta',
  'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes',
  'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param',
  'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt',
  'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot',
  'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub',
  'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea',
  'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul',
  'var', 'video', 'wbr', 'xmp'
]

for tagName in HTML_TAG_NAMES
    module.exports[tagName] = createFactory(tagName)
    module.exports[tagName.charAt(0).toUpperCase() + tagName.slice(1)] =
        createFactory(tagName)


class Component extends React.Component
    constructor: (props) ->
        super(props)
        if @init?
            @init(props)


class PureComponent extends React.PureComponent
    constructor: (props) ->
        super(props)
        if @init?
            @init(props)


module.exports.createElement = createElement
module.exports.h = createElement
# TODO: Deprecate createFragment in a future version, just export
# React.Fragment here
module.exports.Fragment = createFragment
module.exports.createFactory = createFactory
module.exports.Component = Component
module.exports.PureComponent = PureComponent
module.exports.cloneElement = React.cloneElement
module.exports.isValidElement = React.isValidElement
module.exports.Children = React.Children
module.exports.createRef = React.createRef
module.exports.forwardRef = React.forwardRef
