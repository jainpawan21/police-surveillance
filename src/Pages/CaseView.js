import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from '../Constants/axios'
import Loading from '../Components/Loader/Loading'
export default class CaseView extends Component {

  state = {
    loading: true,
    img: '',
    description: '',
    name: '',
    mark: '',
    status: '',
    lastSeen: undefined
  }

  componentDidMount(){
    axios.post('caseid',{
      stationcode: this.props.match.params.stcode,
      id: this.props.match.params.id
    })
    .then((res) => {
      console.log(res.data.data)
      this.setState({
        lastSeen: res.data.data.seen,
        img: res.data.data.img,
        description: res.data.data.desc,
        mark: res.data.data.mark,
        name: res.data.data.name,
        status: res.data.data.status,
        loading: false
      })
      
  
    })
    .catch((err) => {
      this.setState({
        loading: true
      })
    })
  }
  render() {
    const ltSeen = 
      typeof(this.state.lastSeen) === 'object' ?
        <div>
              {this.state.lastSeen.map((val, i) => {
                return(
                  <Row key={i}>
                    <h4>{i+1}. {val}</h4>
                  </Row>
                )
              })}
              
              

            </div> : 'No any last seeen'
      
    
    const st = this.state.status ? 'Found' : 'Not Found'
    if(this.state.loading){
      return (
        <div style={{display: 'flex', justifyContent: 'center', height:'88vh', backgroundColor: 'black'}}>
					<Loading />
				</div>
      )
    }
    else {
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
                 <img src={`https://storage.googleapis.com/fir-76656.appspot.com/${this.state.img}`} width="80%" height="380" alt="testImage" className="m-4 border"/>
                
              </Col>
            </Row>
            
              <Row>
              <h6><b>Name : </b>{this.state.name}</h6>
              </Row>
              
              <Row>
              <h6><b>Description : </b>{this.state.description}</h6>
              </Row>
              
              <Row>
              <h6><b>Status : </b>{st}</h6>
              </Row>
            
          </Col>
          <Col md="6">
            <>
            <h3>Last seen</h3>
            {ltSeen}
            </>
          </Col>
          </Row>
        </Container>
      </div>
    )
    }
  }
}
