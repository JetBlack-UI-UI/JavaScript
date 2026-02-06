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




console.log(localStorage.getItem('userq'));
if (localStorage.getItem('userq') === null) {
    console.log('No user data found');

}
else {console.log('est');}




// task shestoi
  localStorage.clear();
console.log(localStorage.getItem('user')); 



