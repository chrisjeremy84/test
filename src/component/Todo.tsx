import React from 'react'



interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  interface TodoListProps {
    key: Todo['id'];
    title: Todo['title'];
    completed: Todo['completed']
  }



  //Successfully passed the Prop to the component.
  //Next should be passing functions and classes


const TodoItem: React.FC<TodoListProps> = ({ key, title, completed }) => {
 
    return (
      <label>
        <input type='checkbox' checked={completed}/>
        <text>{title}</text>
      </label>
    
  )
}
 


export default TodoItem