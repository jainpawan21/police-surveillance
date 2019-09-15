import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from '../Constants/axios';
import Loading from '../Components/Loader/Loading'
import {Container, Button, Row,Label,Col, Input} from 'reactstrap'
import {
	Table,
	TableRow,
	TableHeader,
	TableData,
	LinkButton

} from './../Components/TableComponents'
export default class CasesList extends Component {

	state ={
		data: [],
		dataStatus: true
	}

	handleSelectChange = (e) =>{
		console.log(e)
	}
	setSolved = (e, code, id) => {
		console.log(code)
		console.log(id)
		e.preventDefault();
		axios.post('personfound',{
			stationcode: code,
			id: id
		})
		.then((res) => {
			alert(`Updated status of case no. ${id}`)
			window.location.pathname = "/"
		})
		.catch((err) => alert(`Failed to update status of case no. ${id}`))
	}
	componentDidMount(){
		
		const code = localStorage.getItem('code')
		if(code === 'ADMIN'){
			axios.get('getrecords')
			.then((res) => {
				console.log(res)
				this.setState({
					data: res.data.data
				})

				
			})
			.catch((err) => console.log(err.response) )
		}
		else {
			axios.post('getstatus',{
				stationcode: code
				
			})
			.then((res) => {
				console.log(res)
				this.setState({
					data: res.data.data
				})
				console.log(this.state.data)
				
				for(let i of this.state.data){
					
					if(typeof(i.seen) === 'object'){
						localStorage.setItem(i.id,i.seen.length)
					}
					else{
						localStorage.setItem(i.id,0)
					}
				}
			
				console.log('hello')
			})
			.catch((err) => console.log(err.response) )
		}
	  this.makeNotification = setInterval(this.taskRunner, 30000)
	}

	 taskRunner() {
		var notificationData = []
		  axios.post('getstatus',{
				stationcode: localStorage.getItem('code')
			})
			.then((res) =>{
				notificationData = res.data.data
				for(let i of notificationData){
					console.log('in forloop')
					const seenCount = typeof(i.seen) === 'object' ? i.seen.length.toString() : '0'

					// console.log(localStorage.getItem(i.id))
					// console.log(typeof(i.seen))
					// console.log(i.seen)
					// console.log(i.id)
					// console.log(seenCount)
					// console.log(localStorage.getItem(i.id) === seenCount)
					if(localStorage.getItem(i.id) !== undefined && seenCount !== localStorage.getItem(i.id)){
						alert('There is a update in ' + i.id)
					}
				}
			})
			// notificationData = await res.data.data
			// console.log('before forloop')
			// await this.doSomething(notificationData);
		
		}

		doSomething = (notificationData) => {
			
		}
	componentWillUnmount(){
		clearInterval(this.makeNotification)
	}
  render() {
		if(this.state.data.length === 0){
			return (
				<div style={{display: 'flex', justifyContent: 'center', height:'88vh', backgroundColor: 'black'}}>
					<Loading />
				</div>
			)
		}
		else{
    return (
			<>
			<div>
				
		<Container className="mt-5">
				<Row>
				
					<Label for="filter" md={1}>Filter</Label>
          <Col xs={3}>
          <Input type="select" name="filter" id="filter" value={this.state.day} onChange={(e) => this.handleSelectChange(e) }>
            <option value="" hidden>Select</option>
            <option value="Solved">Solved</option>
            <option value="Unsolved">Unsolved</option>
            <option value="Recently Added">Recently Added</option>
           
          </Input>
          </Col>
				
					<div className="ml-auto mb-2 mt-2">
					<Link to="/add">
						<Button>Add</Button>
					</Link>
					</div>
				</Row>
        <Row style={{ overflowX: "auto" }}>
							<Table>
								<tbody key="1">
									<TableRow>
										<TableHeader>ID</TableHeader>
										<TableHeader>Photo</TableHeader>
										<TableHeader>Name</TableHeader>
										<TableHeader>Description</TableHeader>
										<TableHeader>Status</TableHeader>
										<TableHeader>Last Location</TableHeader>
										<TableHeader>Actions</TableHeader>
										
									</TableRow>
								</tbody> 
								  {this.state.data.map((record) => {
										const st = record.status === 0 ? 'Not Found' : 'Found'
										const desc = record.desc.length > 30 ? record.desc.substring(0,30) + "..." : record.desc
										const lastseen = typeof(record.seen) === 'object' ? record.seen[record.seen.length -1] : '---'
										console.log(typeof(record.seen))
										const color = record.status === 1 ? "green" : "red"
									return (
										<tbody key={record.id}>
											<TableRow>
												<TableData>{record.id} </TableData>
												<TableData>
													{/* <img src={require('./../Constants/logo512.png')} width="100" height="100" alt="testImage"/> */}
													<img src={`https://storage.googleapis.com/fir-76656.appspot.com/${record.img}`} width="100" height="100" alt="testImage "/>													
												</TableData>
												<TableData>{record.name}</TableData>
												<TableData>{desc}</TableData>
												<TableData bgcolor={color}> {st}</TableData>
												<TableData>{lastseen}</TableData>
												<TableData>
													<Link to={`/case/${record.stationcode}/${record.id}`} >
														<LinkButton>View</LinkButton>
													</Link>
													{record.status === 0 ? <LinkButton onClick={(e) => this.setSolved(e, record.stationcode, record.id)}>Solved</LinkButton> : null}
												</TableData>
											</TableRow>
										</tbody>
									)
								})}
													
							</Table>
						</Row>
						
			</Container>

			
			</div>
			
			</>
		)
	}
  }
}
