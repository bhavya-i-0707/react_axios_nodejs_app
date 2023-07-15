import logo from './logo.svg';
import './App.css';
import Users from "./Components/Users";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import RemoveUser from "./Components/RemoveUser";
import Errorhandling from "./Components/Errorhandling";



function App() {
  return (
    <div>
    <Users />
    <AddUser />
    <UpdateUser />
    <RemoveUser />
    <Errorhandling />
    
  </div>
  );
}

export default App;
