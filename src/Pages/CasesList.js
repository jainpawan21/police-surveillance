import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from '../Constants/axios';
import Loading from '../Components/Loader/Loading'
import {Container, Button, Row, Col} from 'reactstrap'
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

	setSolved = (e, code, id) => {
		console.log(code)
		console.log(id)
		e.preventDefault();
		axios.post('personfound',{
			stationcode: code,
			id: id
		})
		.then((res) => alert(`Updated status of case no. ${id}`))
		.catch((err) => alert(`Failed to update status of case no. ${id}`))
	}
	componentDidMount(){
		console.log(this.state.data)
		axios.post('getstatus',{
			stationcode: 'KUK'
		})
	  .then((res) => {
			console.log(res)
			this.setState({
				data: res.data.data
			})
		})
		.catch((err) => console.log(err.response) )
	}
  render() {
		if(this.state.data.length === 0){
			return (
				<div style={{display: 'flex', justifyContent: 'center', height:'80vh'}}>
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
												<TableData>{st}</TableData>
												<TableData>In Mall</TableData>
												<TableData>
													<Link to={`/case/${record.stationcode}/${record.id}`} >
														<LinkButton>View</LinkButton>
													</Link>
													{record.status === 0 ? <LinkButton onClick={(e) => this.setSolved(e, record.stationcode, record.id)}>Solved</LinkButton> : null}
													<Link to="/" >
														<LinkButton>Edit</LinkButton>
													</Link>
													<Link to="/" >
														<LinkButton>Delete</LinkButton>
													</Link>
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
