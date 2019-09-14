import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from '../Constants/axios'
export default class CaseView extends Component {

  state = {
    img: '',
    description: '',
    name: '',
    status: '',
    lastSeen: []
  }

  componentDidMount(){
    axios.post('',{
      stationcode: this.props.match.params.stcode,
      id: this.props.match.params.id
    })
    .then((res) => {

    })
  }
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row>
          <Col md="5">
            <Row>
              <h5>Case Id: {this.props.match.params.id}</h5>
            </Row>
            <Row>
              <Col>
                <img src={`https://storage.googleapis.com/fir-76656.appspot.com/${this.props.match.params.id}.jpg`} width="80%" height="380" alt="testImage" className="m-4 border"/>
              </Col>
            </Row>
            <Row>
              <h6><b>Name : </b>ABCDEFGH</h6>
              <br/>
              <h6><b>Description : </b>This person is lost in the main market</h6>
              <br/>
              <h6><b>Status : </b>Not Found</h6>
            </Row>
          </Col>
          <Col md="6">
            <div>
              <h4>1. Seen at Main Market at 6:00 pm on Wednesday.</h4>
              <br />
              <h4>1. Seen at Main Market at 6:00 pm on Wednesday.</h4>
              <br />
              <h4>1. Seen at Main Market at 6:00 pm on Wednesday.</h4>
              <br />
              <h4>1. Seen at Main Market at 6:00 pm on Wednesday.</h4>
              <br />
              <h4>1. Seen at Main Market at 6:00 pm on Wednesday.</h4>
              <br />
              <h4>1. Seen at Main Market at 6:00 pm on Wednesday.</h4>
              <br />
              
            </div>
          </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
