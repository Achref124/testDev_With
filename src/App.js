import { useState } from 'react';
import './App.css';
import usersData from './Data';
import { Route, Routes } from 'react-router-dom';
import UserList from './Components/UsersList/UsersList';
import Details from './Pages/Details/Details';
import NavB from './Components/NavB/NavB';

function App() {
  const [users,setUsers]=useState(usersData)
  console.log(users)
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<div><NavB users={users} setUsers={setUsers}/><UserList users={users} /></div>} />
      <Route path='/user/:id' element={<Details users={users} />} />
      
      </Routes>
     
    </div>
  );
}

export default App;
