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

class EditProduct extends React.PureComponent {
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
    await fetch(`http://3.92.201.85:8999/product/${this.id}`)
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
      this.props.history.push(`/admin/${this.path}/products`);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = {};
    let elms = e.target.elements;
    let length = elms.length - 1;
    for (let i = 0; i < length; i++) {
      if (elms[i].name !== "documents" && !elms[i].value) {

        this.setState({
          validated: true
        });
        return;
      }
      if (elms[i].value) data[elms[i].name] = elms[i].value;
    }

    data = JSON.stringify(data);

    fetch(`http://3.92.201.85:8999/product/${this.id}/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: data
    })
      .then(response => this.setModal(true))
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
      product_name,
      product_category,
      Country,
      company_name,
      website,
      specification,
      price
      } = this.state.formData;
   

    return (
      <Container as={FormStyles}>
        <Row>
          <Col>
            <h1 className="form-title">Edit Product</h1>
          </Col>
        </Row>

        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Row>
          <Col md={4}>
              <Form.Group>
                <Form.Control
                  as="select"
                  name="product_category"
                  value={product_category}
                  onChange={e => this.onChangeInput(e)}
                  required
                >
                  <option>Product Category</option>
                  <option value="MACHINE GUN">MACHINE GUN </option>
                  <option value="Pistol">Pistol</option>
                  <option value="MI6">MI6</option>
                  <option value="Ammunition">Ammunition</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  name="product_name"
                  value={product_name}
                  onChange={e => this.onChangeInput(e)}
                  placeholder="Product name"
                  required
                />
              </Form.Group>
            </Col>

           

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="company_name"
                  value={company_name}
                  placeholder="Company name"
                  onChange={e => this.onChangeInput(e)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Control as="select" name="Country"  
                  value={Country}
                  onChange={e => this.onChangeInput(e)}
                  requiredrequired>
                  <option>Country</option>
                  <option value="chennai">Chennai </option>
                  <option value="dubai">Dubai</option>
                  <option value="u.s">U.S</option>
                </Form.Control>
              </Form.Group>
            </Col> 
            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="website"
                  value={website}
                  placeholder="Website"
                  onChange={e => this.onChangeInput(e)}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="specification"
                  value={specification}
                  placeholder="Specification"
                  onChange={e => this.onChangeInput(e)}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="price"
                  placeholder="Enter Price"
                  value={price}
                  onChange={e => this.onChangeInput(e)}
                  required
                />
              </Form.Group>
            </Col>

            {/* <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="file"
                  name="documents"
                  value={documents}
                  onChange={e => this.onChangeInput(e)}
                />
              </Form.Group>
            </Col> */}

            
          </Row>

          <Row className="my-5">
            <Col style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Update Product
              </Button>
            </Col>
          </Row>
        </Form>

        <ActionModal
          display={this.state.modal}
          itemAction={() => this.itemAction(this.id)}
          closeModel={() => this.setModal(false)}
          success={true}
          message="Product updated successfully!"
          redirectTo={`/admin/${this.path}/products`}
          type="success"
        />
      </Container>
    );
  }
}
export default EditProduct;
