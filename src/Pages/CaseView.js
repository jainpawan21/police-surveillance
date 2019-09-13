import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class CaseView extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Row>
          <Col md="5">
            <Row>
              <h4>Case Id: 899</h4>
            </Row>
            <Row>
              <Col>
                <img src={require('./../Constants/logo512.png')} width="80%" height="380" alt="testImage"/>
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
