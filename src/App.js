import './App.css';
import Menu from './Menu';
import RegistrationForm from './RegistrationForm';
import Footer from './Footer';
import Hobbies from './Hobbies';
import Native from './Native';
import Login from './Login';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Menu/>
      <RegistrationForm/>
      <Login/>
      <Hobbies/>
      <Native/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;


// 1)create a menu component where should show a menu with 4 links namely home,about,contact and offices. use csss to make menu look professional. name of component should be Menu. u should show menu in react page. the border of menu should be grey.
// 2) create a registration component where  u will show a form where ppl can enter first name, last name, email, username and age and a register button.
// 3) create a Footer Component where u will show a footer with a grey border. keep the component in the end. 
// 4) create a component called Hobbies where u will show a table with 4 hobbies in 4 rows. 
// 5) create a component called Native where u will show ur native city in a heading. 
// 6) you created a login component. now on clicking login button, display an alert message" you are logged in ". 
// 7) create a Counter component. but this time every time u click on increase button, the count should increase by steps of 2. so if count is 0 then on clicking increase it should become 2. 
// same add a button to decrease count in steps of 2. add a button called reset. on clicking reset button the count should be reset to zero.
