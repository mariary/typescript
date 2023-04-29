import React from 'react';
import {BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";


function App() {
  return (
    <BrowserRouter>
      <div style={{textAlign: 'center', margin: 20}}>
        <div>
          <p><NavLink to={'/users'}>Users</NavLink></p>
          <p><NavLink to={'/todos'}>Todos</NavLink></p>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
