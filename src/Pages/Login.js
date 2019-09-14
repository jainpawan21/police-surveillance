import React, { Component } from 'react';
import {
  Container, Row, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
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
      // window.location.pathname = "/"
    })
    .catch((err) => {
      console.log(err.response)
      alert('Something Went Wrong, Try Again')
    })
  }

  
  render() {
    return (
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Container style={{border: '2px solid black', width: "400px"}} className="p-5 mt-5"   >
        <h2 className="offset-4 mb-4">Sign In</h2>
        <Form >
          
            <Col>
              <FormGroup >
                <Label for="code">Station Code</Label>
                <Input
                  type="text"
                  name="code"
                  id="code"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <div style={{textAlign: 'center'}}>
          <Button onClick={(e) => this.handleLoginSubmit(e) }>Submit</Button>
          </div>
        </Form>
      </Container>
      </div>
  
    );
  }
}
export default Login;
