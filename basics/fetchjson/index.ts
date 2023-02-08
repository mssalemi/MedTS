import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Interace are used to define a structure of an object
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(({ data }) => {
  console.log('TS TODO');
  const todo = data as Todo;
  logTodo(todo);
  // as arrow function
  logTodoArrow(todo);
});

function logTodo(todo: Todo) {
  const { userId, id, title, completed } = todo;
  console.log('USER ID = ', userId);
  console.log(`${id}: ${title} - ${completed ? 'COMPLETE' : 'INCOMPLETE'}`);
}

const logTodoArrow = (todo: Todo) => {
  const { userId, id, title, completed } = todo;
  console.log('USER ID = ', userId);
  console.log(`${id}: ${title} - ${completed ? 'COMPLETE' : 'INCOMPLETE'}`);
};
