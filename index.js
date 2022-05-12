// This file is part of react-helpers
// Copyright (C) 2017-present Dario Giovannetti <dev@dariogiovannetti.net>
// Licensed under MIT
// https://github.com/kynikos/react-helpers/blob/master/LICENSE

// Use commonJS requires instead of ES6 imports so this module can be used also
// on a Node server
const {
  createElement,
  isValidElement,
} = require('react')


function createElementExt(type, ...args) {
  // Note that isPlainObject(args[0]) (from the 'is-plain-object' npm module)
  // returns true also for React elements!
  if (
    isValidElement(args[0]) ||
    // https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
    typeof args[0] !== 'object' ||
    // typeof null == 'object', so also check if args[0] == null
    args[0] == null ||
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
