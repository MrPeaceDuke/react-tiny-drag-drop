# react-tiny-drag-drop

This aims to implement a simple, yet fully functional, drag and drop functionality for React.

## Installation
```
npm install react-tiny-drag-drop
```
## Usage

Working example: https://codesandbox.io/s/react-tiny-drag-drop-zg7mr

### Usage
```
import React from 'react';
import {Draggable, Droppable} from "react-tiny-drag-drop";

export function App(props) {
  const onDrop((i) => alert(i));
  return (
    <Droppable context="item" onDrop={onDrop}><div>Drop here...</div></Droppable>
    <Draggable context="item" dataKey={1}>Item 1</Draggable>
    <Draggable context="item" dataKey={2}>Item 2</Draggable>
  );    
}
```

##### \<Draggable\> Component
Wrap around any object that should be draggable.
| Parameter         | Type     | Description                                                        | Default           |
| ----------------- |--------- |------------------------------------------------------------------- | ------------------|
| `context`         | string   | Use context to pair `Draggable` and `Droppable` objects            |                   |
| `dataKey`         | string   | Value that will be sent to the `Droppable.onDrop()` event callback |                   |
| `disabled`        | boolean  | Set to `true` to disable functionality                             | `false`           |
| `onDragEnd`       | function | Callback function for `onDragEnd` events (when dragging stops)     | `(dataKey) => {}` |

##### \<Droppable\> Component
| Parameter         | Type     | Description                                                                                          | Default
| ----------------- |--------- |----------------------------------------------------------------------------------------------------- | ---
| `context`         | string   | Use context to pair `Draggable` and `Droppable` objects                                              | `null`
| `disabled`        | boolean  | Set to `true` to disable functionality                                                               | `false`
| `onDragOver`      | function | Callback function for `onDragOver` events (when any `Draggable` is dragged over this `Droppable`)    | `(dataKey, dataContext, context) => {}`
| `onDrop`          | function | Callback function for `onDrop` events (when a `Draggable` in the same context is dropped)            | `(dataKey, context) => {}`

## Contribute and build
Contribute to this repository by sending pull requests my way! All help is welcome!

Make sure you have `webpack` installed on your host machine.
```
npm run-script build
```
Use `npm link` to link to a local frontend react project to be able to modify and test immediately.
