import React, { Component } from 'react';
import {
  Container} from 'reactstrap';
import axios from '../Constants/axios';

class Login extends Component {

  state ={
    code: '',
    password: '',
    token: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  } 
  handleLoginSubmit = (e) =>{
    e.preventDefault();
    axios.post('login',{
      stationcode: this.state.code,
      password: this.state.password
    })
    .then((res) => {
      console.log(res)
      if(res.status === 200){
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('code',this.state.code)
        alert(res.data.msg)
        window.location.pathname = "/"
      }
      else {
        throw new Error()
      }
      
    })
    .catch((err) => {
      console.log(err.response)
      alert('Something Went Wrong, Try Login Again')
    })
  }

  
  render() {
    return (
      
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', background: 'url(require(../Constants/logo512.png))'}}>
      <Container style={{border: '2px solid black', width: "350px", height:"400px", alignSelf: 'center' }} className="p-5 mt-5"   >
        <h2 className="offset-4 mb-4">Sign In</h2>
        <form>
  <div className="form-group">
    <label htmlFor="code"><b>Police Station Code</b></label>
    <input type="text" className="form-control" name="code" id="code" maaria-describedby="code" placeholder="Enter Police Station Code" onChange={(e) => this.handleInputChange(e)}/>
  </div>
  <div className="form-group">
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={(e) => this.handleInputChange(e)}/>
  </div>
  <div style={{textAlign: 'center'}}>
  <button type="submit" className="btn btn-primary" onClick={(e) => this.handleLoginSubmit(e)}>Submit</button>
  </div>
</form>
         
         
          
       
      </Container>
      </div>
  
    );
  }
}
export default Login;
