import React, { Component } from 'react';

import {Container, Tab, Nav, Row, Col} from 'react-bootstrap/';

export default class About extends Component {
		render() {
			return (
					<Container>

						<Tab.Container id="left-tabs-example" defaultActiveKey="first">

						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column mt-2">
									<Nav.Item>
										<Nav.Link eventKey="first">1</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="second">2</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="third">3</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>

							<Col sm={9}>
								<Tab.Content className="mt-2">

									<Tab.Pane eventKey="first">
										<img className="TabImg"
											src="https://wallpapercave.com/wp/wp5630739.jpg"
										/>
										<p>Hello World!</p>
									</Tab.Pane>

									<Tab.Pane eventKey="second">
										<img className="TabImg"
											src="https://wallpapercave.com/wp/wp8943747.jpg"
										/>
										<p>Hello World</p>
									</Tab.Pane>	

									<Tab.Pane eventKey="third">
										<img className="TabImg"
											src="https://wallpapercave.com/wp/wp5418853.jpg"
										/>
										<p>Hello World!</p>
									</Tab.Pane>		

								</Tab.Content>	
							</Col>
						</Row>	

						</Tab.Container>	

					</Container>		
				)
		}
}