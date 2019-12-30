import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ActionModal from "../ActionModal";

const FormStyles = styled.div`
  position: relative;
  .form-title {
    font-size: 30px;
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
      background: transparent linear-gradient(90deg, #009dff 0%, #5cbbf7 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000029;
      border-radius: 23px;
    }
  }
`;

class EditCustomer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      modal: false,
      validated: false
    };
    this.id = this.props.match.params.id;
    this.path = this.props.location.pathname.match("sales")
      ? "sales"
      : "data-entry";
  }

  async componentDidMount() {
    await fetch(`http://3.92.201.85:8999/customer/${this.id}`)
      .then(response => response.json())
      .then(data =>
        this.setState(prevState => ({
          formData: { ...prevState.formData, ...data }
        }))
      );
  }

  itemAction = id => {
    this.handleSubmit();
  };

  setModal = modal => {
    if (modal) {
      this.setState({ modal: modal });
    } else {
      this.setState({ modal: modal });
      this.props.history.push(`/admin/${this.path}/customers`);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {};
    let elms = e.target.elements;
    let length = elms.length - 1;
    for (let i = 0; i < length; i++) {
      if(elms[i].name !== "documents" && !elms[i].value) {
        this.setState({
          validated: true
        });
        return;
      }

      if (elms[i].value) data[elms[i].name] = elms[i].value;
    }

    data = JSON.stringify(data);

    fetch(`http://3.92.201.85:8999/customer/${this.id}/update`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: data
    }).then(response => this.setModal(true))
    .catch(err => console.log(err));

  };

  onChangeInput = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        ...{
          [name]: value
        }
      }
    }));
  };

  render() {

    const {
      first_name,
      last_name,
      phone_no,
      email_id,
      street,
      state,
      country,
      zip_code,
      url,
      add_product,
      priority,
      type,
      documents,
      quick_note
    } = this.state.formData;

    return (
      <Container as={FormStyles}>
        <Row>
          <Col>
            <h1 className="form-title">Edit Customer</h1>
          </Col>
        </Row>

        <Form
          noValidate
          validated={this.state.validated}
          method="POST"
          onSubmit={e => this.handleSubmit(e)}
        >
          <Row>
            <Col md={5}>
              <Form.Group controlId="formGridFirstName">
                <Form.Control
                  name="first_name"
                  value={first_name}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="First name"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group>
                <Form.Control
                  name="last_name"
                  value={last_name}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Last name"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="number"
                  name="phone_no"
                  value={phone_no}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Phone No"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="email"
                  name="email_id"
                  required
                  value={email_id}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Email"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="street"
                  value={street}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Street Address"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Control
                  name="state"
                  value={state}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="State"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Control
                  name="country"
                  value={country}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Country"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group>
                <Form.Control
                  type="number"
                  name="zip_code"
                  value={zip_code}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Zip code"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="url"
                  value={url}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Website Link"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Add Product</Form.Label>
                <Form.Control
                  name="add_product"
                  value={add_product}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Add Product"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Control as="select" name="priority" required value={priority}
                  onChange={e => this.onChangeInput(e)}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name="type" required value={type}
                  onChange={e => this.onChangeInput(e)}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="documents"
                  value={documents}
                  onChange={e => this.onChangeInput(e)}
                  type="file"
                />
              </Form.Group>
            </Col>

            <Col md={{ span: 8, offset: 2 }}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="6"
                  name="quick_note"
                  value={quick_note}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Enter Quick note"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="my-5">
            <Col style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Update Customer
              </Button>
            </Col>
          </Row>
        </Form>

        <ActionModal
          display={this.state.modal}
          itemAction={() => this.itemAction(this.id)}
          closeModel={() => this.setModal(false)}
          success={true}
          message="Customer updated successfully!"
          redirectTo={`/admin/${this.path}/customers`}
          type="success"
        />
      </Container>
    );
  }
}

export default EditCustomer;
