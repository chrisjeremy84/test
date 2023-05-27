import React from 'react'
import Todo from './Todo'

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
  }

  interface TodoListProps {
    todos: TodoItem[];
  }

  const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} title= {todo.title} completed= {todo.completed}/>
        ))}
      </ul>
    );
  };
export default TodoList;