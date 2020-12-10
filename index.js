// This file is part of react-helpers
// Copyright (C) 2017-present Dario Giovannetti <dev@dariogiovannetti.net>
// Licensed under MIT
// https://github.com/kynikos/react-helpers/blob/master/LICENSE

// Use commonJS requires instead of ES6 imports so this module can be used also
// on a Node server
const {
  createElement,
  Fragment,
  Component,
  PureComponent,
  memo,
  cloneElement,
  isValidElement,
  Children,
  createRef,
  forwardRef,
} = require('react')

module.exports = {
  createElement,
  Fragment,
  Component,
  PureComponent,
  memo,
  cloneElement,
  isValidElement,
  Children,
  createRef,
  forwardRef,
}


function createElementExt(type, ...args) {
  // Note that isPlainObject(args[0]) (from the 'is-plain-object' npm module)
  // returns true also for React elements!
  if (
    typeof args[0] === 'string' ||
    isValidElement(args[0]) ||
    Array.isArray(args[0])
  ) {
    return createElement(type, null, ...args)
  }
  // I guess args[0] is a plain object then, let React.createElement possibly
  // complain about it
  return createElement(type, ...args)
}
module.exports.createElementExt = createElementExt


// Note that React.createFactory() is "considered legacy" by upstream
// https://reactjs.org/docs/react-api.html#createfactory
function createFactoryExt(type) {
  return (...args) => createElementExt(type, ...args)
}
module.exports.createFactoryExt = createFactoryExt
