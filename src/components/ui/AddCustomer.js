import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FormStyles = styled.div`
	position: relative;
	.form-title {
		font-size: 16px;
		text-align: center;
		margin: 2em auto;
	}

	form {
		margin-top: 2em;

		.form-control {
			box-shadow: 0px 3px 6px #00000029;
			border-radius: 14px;
			min-height: 46px;
			margin-bottom: 3em;
		}
		input[type="file"] {
			margin-bottom: 3em;
		}
		button {
			width: 159px;
			height: 45px;
			background: transparent linear-gradient(90deg, #009DFF 0%, #5CBBF7 100%) 0% 0% no-repeat padding-box;
			box-shadow: 0px 6px 10px #00000029;
			border-radius: 23px;
		}
	}
`;

function AddCustomer() {

	const handleSubmit = (e) => {
		let data = {}
		e.preventDefault();
		let elms = e.target.elements;
		let length = elms.length - 1;
		for(let i = 0; i < length; i++) {
			if(elms[i].value)
				data[elms[i].name] = elms[i].value;
		}
		data = JSON.stringify(data);

		fetch('http://3.92.201.85:8999/customer/create', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			},
			body: data
		})
		.then(response => response.ok);

	}


	return (

		<Container as={FormStyles}>
				<Row>
						<Col><h1 className="form-title">Add Customer</h1></Col>
				</Row>

				<Form method="POST" onSubmit={(e) => handleSubmit(e)}>
						<Row>
								<Col md={5}>
									<Form.Group>
										<Form.Control name="first_name" placeholder="First name" />
									</Form.Group>
								</Col>

								<Col md={5}>
									<Form.Group>
										<Form.Control name="last_name" placeholder="Last name" />
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Control name="phone_no" placeholder="Phone No" />
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Control type="email" name="email_id" placeholder="Email" />
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Control name="street" placeholder="Street Address" />
									</Form.Group>
								</Col>

								<Col md={3}>
									<Form.Group>
										<Form.Control name="state" placeholder="State" />
									</Form.Group>
								</Col>

								<Col md={3}>
									<Form.Group>
										<Form.Control name="country" placeholder="Country" />
									</Form.Group>
								</Col>

								<Col md={2}>
									<Form.Group>
										<Form.Control name="zip_code" placeholder="Zip code" />
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Control name="url" placeholder="Website Link" />
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
									<Form.Label>Add Product</Form.Label>
										<Form.Control name="add_product" placeholder="Add Product" />
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Label>Priority</Form.Label>
										<Form.Control as="select" name="priority">
											<option value="small">Small</option>
											<option value="medium">Medium</option>
											<option value="high">High</option>
										</Form.Control>
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Label>Type</Form.Label>
										<Form.Control as="select" name="type">
											<option value="small">Small</option>
											<option value="medium">Medium</option>
											<option value="high">High</option>
										</Form.Control>
									</Form.Group>
								</Col>

								<Col md={4}>
									<Form.Group>
										<Form.Control name="documents" type="file" />
									</Form.Group>
								</Col>

								<Col md={{span: 8, offset: 2}}>
									<Form.Group>
										<Form.Control as="textarea" rows="6" name="quick_note" placeholder="Enter Quick note" />
									</Form.Group>
								</Col>
						</Row>
						<Row className="my-5">
							<Col style={{textAlign: 'center'}}>
								<Button variant="primary" type="submit">
									Add Customer
								</Button>
							</Col>
						</Row>
				</Form>

		</Container>
	);

}
export default AddCustomer;
