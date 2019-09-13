import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Container, Button, Row, Col} from 'reactstrap'
import {
	Table,
	TableRow,
	TableHeader,
	TableData,
	LinkButton
} from './../Components/TableComponents'
export default class CasesList extends Component {
  render() {
    return (
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
								<tbody key="100">
									<TableRow>
										<TableHeader>ID</TableHeader>
										<TableHeader>Photo</TableHeader>
										<TableHeader>Description</TableHeader>
										<TableHeader>Added By</TableHeader>
										<TableHeader>Status</TableHeader>
										<TableHeader>Last Location</TableHeader>
										<TableHeader>Actions</TableHeader>
										{/* <TableHeader>Quick Actions</TableHeader> */}
									</TableRow>
								</tbody>

								
										<tbody key="2">
											<TableRow>
												<TableData>11 </TableData>
												<TableData>
													<img src={require('./../Constants/logo512.png')} width="100" height="100" alt="testImage"/>
													
												</TableData>
												<TableData>This is Child Trafficing Case</TableData>
												<TableData>Incpector ABC</TableData>
												<TableData>Still Searching</TableData>
												<TableData>In Mall</TableData>
												<TableData>
													<Link to="/case/1" >
														<LinkButton>View</LinkButton>
													</Link>
													<Link to="/">
														<LinkButton>Solved</LinkButton>
													</Link>
													<Link to="/" >
														<LinkButton>Edit</LinkButton>
													</Link>
													<Link to="/" >
														<LinkButton>Delete</LinkButton>
													</Link>
												</TableData>
											</TableRow>
										</tbody>			
							</Table>
						</Row>
						
      </Container>
			
    )
  }
}
