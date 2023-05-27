import React, { useState } from 'react';
import TodoList from './component/TodoList';



function App() {
/*
TODO LIST

1- PROP PASSING TUTORIAL:
  Title: How to Use Props in React with TypeScript

Step 1: Define the Todo interface
- Create an interface named `Todo` with properties such as `id` (number), `title` (string),
 and `completed` (boolean). This interface represents the shape of a single todo item.

Step 2: Create the TodoList component
- Create a new file named `TodoList.tsx`.
- Import React and define the `Todo` interface in the file.
- Declare a new interface named `TodoListProps` that specifies the props expected by the `TodoList` component. 
In this case, it expects an array of `Todo` objects as the `todos` prop.
- Define the `TodoList` component as a functional component that receives the `todos` prop as a destructured prop object.
- Use the `map` method to iterate over the `todos` array and render a list item (`<li>`) for each todo item.
- Export the `TodoList` component as the default export.

Step 3: Import the TodoList component
- Open `App.tsx`.
- Import the `TodoList` component into `App.tsx` by adding the following import statement: `import TodoList from './TodoList';`.

Step 4: Set up the todos prop
- Define an array of `todos` in `App.tsx` and ensure it matches the `Todo` type definition.
- Example: `const todos: Todo[] = [{ id: 1, title: 'Todo 1', completed: false }, { id: 2, title: 'Todo 2', completed: true }];`.

Step 5: Pass the todos prop to TodoList
- Within the `return` statement of the `App` component, render the `TodoList` component and pass the 
`todos` prop to it: `<TodoList todos={todos} />`.
- Make sure the prop name (`todos`) and the prop value (`todos`) match.

By following these steps, you will be able to utilize props in React with TypeScript.
 Remember to modify the code according to your specific needs, such as adding event handlers or 
 additional properties to the `Todo` interface.

*/



  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const initialTodos:Todo[] = [
    {id: 232, title: 'Take the trash', completed: false},
    {id:3223, title: 'Clean the dishes', completed: true}
  ]

  
    

  /* 
  COMMENTING OUT TOGGLETODO AS TESTING PROPS


    type ToggleTodo = (selectedTodo: Todo) => void;

  */
 
  const [todos, setTodos] = useState<Todo[]>(initialTodos);


  return (
    <>
        <TodoList todos = {todos}/>
        <input type='text'/>
        <button>Add Todo</button>
        <button>Clear Complete</button>
        <text>0 Todo Left</text>
    </>
  );
}

export default App;
