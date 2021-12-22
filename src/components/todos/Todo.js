//This a presentational component. This compomnent will display todos as a list item

import React from "react";

const Todo = props => {
    return (
        <li>{props.text}</li>
    )
}

export default Todo;

