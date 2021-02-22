import React, { useState } from "react";

let currentKey = null;
let currentContext = null;

export function Draggable (props) {
  const [onDragEndFunc, setOnDragEndFunc] = useState({ function: typeof props.onDragEnd == 'function' ? props.onDragEnd : () => {}});

  if (props.disabled) {
    return (
      <div>{props.children}</div>
    );
  }

  return (
    <div
      draggable={true}
      onDragStart={() => {
        currentKey = props.dataKey;
        currentContext = props.context;
      }}
      onDragEnd={() => {
        onDragEndFunc.function(props.dataKey);
	  }}
	  style={this.props.style}
    >
      {props.children}
    </div>
  );
}

export function Droppable (props) {
  const [onDropFunc, setOnDropFunc] = useState({ function: typeof props.onDrop == 'function' ? props.onDrop : () => {}});
  const [onDragoverFunc, setOnDragoverFunc] = useState({ function: typeof props.onDragOver == 'function' ? props.onDragOver : () => {}});
  const [context, setContext] = useState(props.context ? props.context : null);

  const onDragOver = (event) => {
    event.preventDefault();

    onDragoverFunc.function(currentKey, currentContext, context);
  };

  const onDrop = () => {
    if (context == currentContext) {
      onDropFunc.function(currentKey, currentContext);
    }
  };

  if (props.disabled) {
    return (
      <div>{props.children}</div>
    );
  }

  return (
    <div
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {props.children}
    </div>
  );
}
