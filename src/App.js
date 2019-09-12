import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Pages/Login'
import CasesList from './Pages/CasesList'
import CaseAdd from './Pages/CaseAdd'
function App() {
  return (
    <div>
      <>
        
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <CasesList />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/add" render={() => <CaseAdd />} />
          
        </Switch>
      </>
      
    </div>
  );
}

export default App;
