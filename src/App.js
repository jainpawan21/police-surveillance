import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Pages/Login'
import CasesList from './Pages/CasesList'
import CaseAdd from './Pages/CaseAdd'
import CaseView from './Pages/CaseView'

function App() {
  return (
    <div>
      <>
        {window.location.pathname === '/login' ? null : <NavBar />}
        <Switch>
          <Route path="/" exact render={(props) => <CasesList {...props}/>}/>
          <Route path="/login" render={(props) => <Login {...props}/>} />
          <Route path="/add" render={(props) => <CaseAdd {...props}/>} />
          <Route path="/case/:stcode/:id" render={(props) => <CaseView {...props}/>} />
          
        </Switch>
      </>
      
    </div>
  );
}

export default App;
