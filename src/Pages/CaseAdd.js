import React, { Component } from 'react'
import {Container, Row, Form, Label, Col,Button, Input} from 'reactstrap'
import axios from './../Constants/axios'
export default class CaseAdd extends Component {

  state ={
    code: '',
    name: '',
    description: '',
    adhaar: '',
    file: {},
    mark: '',
  }
  handleInputChange = (e) => {
    this.setState({
      status: ''
    })
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', this.state.file)
    formData.append('stationcode', this.state.code)
    formData.append('name', this.state.name)
    formData.append('desc', this.state.description)
    formData.append('mark', this.state.mark)
    console.log(formData)
    axios.post('upload',
      
      formData
    )
    .then((res) => {
      console.log(res)
      alert('Added Successfully')
      setTimeout(() => {
        window.location.pathname = "/"
      }, 1000)
    })
    .catch((err) => {
      console.log(err.response)
      alert('Can Not Add Right Now')
     
    })

  }

  handleUploadPhoto = (e) => {
    console.log(e.target.files[0])
    this.setState({
      file: e.target.files[0]
    })  
  }

  
  render() {
    
    return (
      <Container className="mt-5">
        <div style={{width: '100%', textAlign: 'center'}} className="mt-2 mb-3" ><span>Fields marked with <span style={{color: 'red'}}>&#42;</span> are mandatory</span></div>
        <Form>
          <Row className="form-input">
            <Col md="3">
            <Label for="code">Station Code<span style={{color: 'red'}}>&#42;</span> : </Label>
            </Col>
            <Col md="9">
            <input className="form-control" type="textfileld" name="code" id="code" value={this.state.code} onChange={(e) => this.handleInputChange(e)} required/>
            </Col >
          </Row>
          <br/>
          <Row className="form-input">
            <Col md="3">
            <Label for="name">Name<span style={{color: 'red'}}>&#42;</span> : </Label>
            </Col>
            <Col md="9">
            <input className="form-control" type="textfileld" name="name" id="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)} required/>
            </Col >
          </Row>
          <br/>
          <Row className="form-input">
            <Col md="3">
            <Label for="description">Description<span style={{color: 'red'}}>&#42;</span> : </Label>
            </Col>
            <Col md="9">
            <input className="form-control" type="textarea" name="description" id="description" value={this.state.description} onChange={(e) => this.handleInputChange(e)} required/>
            </Col >
          </Row>
          <br />
          <Row className="form-input">
            <Col md="3">
            <Label for="adhaar">Adhaar No. : </Label>
            </Col>
            <Col md="9">
            <input className="form-control" type="number" name="adhaar" id="adhaar" value={this.state.adhaar} onChange={(e) => this.handleInputChange(e)} required/>
            </Col >
          </Row>
          <br />
          <Row className="form-input">
            <Col md="3">
            <Label for="mark">Identification Mark<span style={{color: 'red'}}>&#42;</span> :</Label>
            </Col>
            <Col md="9">
            <input className="form-control" type="textfileld" name="mark" id="mark" value={this.state.mark} onChange={(e) => this.handleInputChange(e)} required />
            </Col >
          </Row>
          <br />
          <Row className="form-input">
            <Col md="3">
            <Label for="file">Upload Photo<span style={{color: 'red'}}>&#42;</span></Label>
            </Col>
            <Col md="9">
            <input  type="file" name="file" id="file" onChange={(e) => this.handleUploadPhoto(e)} required/>
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
