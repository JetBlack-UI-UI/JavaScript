localStorage.setItem('greeting', 'Hello, World!');

localStorage.removeItem('greeting');


const user = {
  name: 'Alice',
  age: 25,
  isLoggedIn: true,
  preferences: {
    theme: 'dark',
    language: 'en'
  }
};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
const storedUserJSON = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUserJSON);
console.log(parsedUser);


const storedUserJSON1 = localStorage.getItem('user');
const parsedUser1 = JSON.parse(storedUserJSON1);
parsedUser1.country = 'USA';
const updatedUserJSON = JSON.stringify(parsedUser1);
localStorage.setItem('user', updatedUserJSON);
console.log(parsedUser1);












//5

console.log(localStorage.getItem('userq'));
if (localStorage.getItem('userq') === null) {
  console.log('No user data found');


  const newUser = {
    name: 'Bob',
    age: 30,
  };
  localStorage.setItem('userq', JSON.stringify(newUser));
  console.log('New user created', newUser);
}




else {
  const user = JSON.parse(localStorage.getItem('userq'));
  console.log('User data found', user);
}


// task shestoi
localStorage.clear();
console.log(localStorage.getItem('user'));


//7
let tasks = [
  {title: 'Task 1', completed: false },
  {title: 'Task 2', completed: true },
  {title: 'Task 3', completed: false }
];

localStorage.setItem('tasks', JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(savedTasks);

//8
 tasks = JSON.parse(localStorage.getItem('tasks'));
tasks[0].completed = true;
localStorage.setItem('tasks', JSON.stringify(tasks));
console.log(tasks);

