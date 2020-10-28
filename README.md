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

## Contribute and build
Contribute to this repository by sending pull requests my way! All help is welcome!

Make sure you have `webpack` installed on your host machine.
```
npm run-script build
```
Use `npm link` to link to a local frontend react project to be able to modify and test immediately.
