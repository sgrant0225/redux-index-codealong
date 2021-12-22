//this container will connect to the store(Redux)

import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
   
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
   
    render() {
       return(
           <ol>
               {this.renderTodos()}
           </ol>
       );
    }
};

//Next we need to get a list of Todos from our Redux State by writing the mapStateToProps() function
//and include in the connect argument 

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(TodosContainer);