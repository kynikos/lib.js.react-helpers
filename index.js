// This file is part of react-helpers
// Copyright (C) 2017-present Dario Giovannetti <dev@dariogiovannetti.net>
// Licensed under MIT
// https://github.com/kynikos/react-helpers/blob/master/LICENSE

import {
  createElement as originalCreateElement,
  isValidElement,
} from 'react'

export {
  Fragment,
  Component,
  PureComponent,
  memo,
  cloneElement,
  isValidElement,
  Children,
  createRef,
  forwardRef,
} from 'react'


export function createElement(type, ...args) {
  // Note that isPlainObject(args[0]) (from the 'is-plain-object' npm module)
  // returns true also for React elements!
  if (
    typeof args[0] === 'string' ||
    isValidElement(args[0]) ||
    Array.isArray(args[0])
  ) {
    return originalCreateElement(type, null, ...args)
  }
  // I guess args[0] is a plain object then, let React.createElement possibly
  // complain about it
  return originalCreateElement(type, ...args)
}
export {createElement as default}
export {createElement as h}


// Note that React.createFactory() is "considered legacy" by upstream
// https://reactjs.org/docs/react-api.html#createfactory
export function createFactory(type) {
  return (...args) => createElement(type, ...args)
}
