import React, { Component } from 'react';
import {
  Container, Row, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


class Login extends Component {

  state ={
    email: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  } 
  handleLoginSubmit = (e) =>{
    e.preventDefault();
    alert('email ' + this.state.email + 'password ' + this.state.password)
    console.log(window.location.pathname)
    window.location.pathname = "/"
  }

  
  render() {
    return (
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Container style={{border: '2px solid black', width: "400px"}} className="p-5 mt-5"   >
        <h2 className="offset-4 mb-4">Sign In</h2>
        <Form >
          
            <Col>
              <FormGroup >
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
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
                placeholder="********"
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
