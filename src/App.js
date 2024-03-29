import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Login from './Pages/Login'
import CasesList from './Pages/CasesList'
import CaseAdd from './Pages/CaseAdd'
import CaseView from './Pages/CaseView'
import StationAdd from './Pages/StationAdd'
import ErrorPage from './Components/ErrorPage/ErrorPage'

function App() {
  function requireCheck() {
		if (localStorage.getItem("token")) {
			return true;
		}
		return false;
  }
  
  
  return (
    <div>
      <>
        {window.location.pathname === '/login' ? null : <NavBar />}
        <Switch>
          <Route path="/login" render={(props) => requireCheck() ? <Redirect to="/" /> : <Login {...props}/> } />
          <Route path="/" exact render={(props) => requireCheck() ? <CasesList {...props}/> : <Redirect to="/login" /> }/>
          <Route path="/add" render={(props) => requireCheck() ? <CaseAdd {...props}/> : <Redirect to="/login" /> } />
          <Route path="/case/:stcode/:id" render={(props) => requireCheck() ? <CaseView {...props}/> : <Redirect to="/login" />} />
          <Route path="/stationadd" render={(props) => requireCheck() ? <StationAdd {...props}/> : <Redirect to="/login" />}/>
          <Route
              path="*"
              render={(props) =>
                  <div>
                      <ErrorPage {...props}/>
                  </div>
              }
          /> 
        </Switch>
      </>
      
    </div>
  );
}

export default App;
