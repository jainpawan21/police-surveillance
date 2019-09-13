import React, { Component } from 'react'
import {Container, Row, Form, Label, Col,Button, Input} from 'reactstrap'
export default class CaseAdd extends Component {

  state ={
    code: '',
    name: '',
    description: '',
    adhaar: ''
  }

  

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('submitting')
  }
  render() {
    
    return (
      <Container className="mt-5">
        <Form>
          <Row className="form-input">
            <Col md="3">
            <Label >Station Code : </Label>
            </Col>
            <Col md="9">
            <Input type="textfileld" name="code" id="code" value={this.state.code} onChange={(e) => this.handleInputChange(e)} />
            </Col >
          </Row>
          <br/>
          <Row className="form-input">
            <Col md="3">
            <Label >Name : </Label>
            </Col>
            <Col md="9">
            <Input type="textfileld" name="name" id="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)} />
            </Col >
          </Row>
          <br/>
          <Row className="form-input">
            <Col md="3">
            <Label >Description : </Label>
            </Col>
            <Col md="9">
            <Input type="textarea" name="description" id="description" value={this.state.description} onChange={(e) => this.handleInputChange(e)} />
            </Col >
          </Row>
          <br />
          <Row className="form-input">
            <Col md="3">
            <Label >Adhaar No. : </Label>
            </Col>
            <Col md="9">
            <Input type="textfileld" name="adhaar" id="adhaar" value={this.state.adhaar} onChange={(e) => this.handleInputChange(e)} />
            </Col >
          </Row>
          <br />
          <Row className="form-input">
            <Col md="3">
            <Label >Upload Photo</Label>
            </Col>
            <Col md="9">
            <Input type="file" name="photo" id="photo" value={this.state.photo} onChange={(e) => this.handleInputChange(e)} />
            </Col >
          </Row>
          <br />
          <div style={{textAlign: 'center'}} >
            <Button className="bg-info" onClick={(e) => this.handleSubmit(e)}>Add Case</Button>
          </div>
        </Form>
      </Container>
    )
  }
}
