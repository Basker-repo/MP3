import React from "react";
import "../App.css";
import { DatePicker } from "antd";
import moment from "moment";
import { Select } from "antd";
import styled from "styled-components";
import ActionModal from './ActionModal';
import { Container, Row, Col, Form, Button } from "react-bootstrap";


const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

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
      background: transparent linear-gradient(90deg, #009dff 0%, #5cbbf7 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000029;
      border-radius: 23px;
    }
  }
`;


const { Option } = Select;
class AddCustomerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tendor: "",
      country: "",
      ordertype: "",
      cust_name: "",
      ctype: "",
      address: "",
      tendorid: '',
      tendorname:'',
      date:'',
      customername:'',
      amount:'',
      remainder:'',
      priority:'',
      requirement: '',
      specification: ''
    };
    this.handleTendorChange = this.handleTendorChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleCTypeChange = this.handleCTypeChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleTendorIdChange = this.handleTendorIdChange.bind(this);
    this.handleTendorNameChange = this.handleTendorNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleRemainderChange = this.handleRemainderChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleRequirementChange = this.handleRequirementChange.bind(this);
    this.handleSpecificationChange = this.handleSpecificationChange.bind(this);

  }
  componentDidMount=()=>{
    console.log("gghkvuk",this.props.location.state.item);
    var customerdata = this.props.location.state.item;
    console.log(customerdata.Customer_tendor);
      this.setState({id:customerdata._id, tendor:customerdata.Tendor,country:customerdata.Customer_country,ordertype:customerdata.Customer_ordertype,cust_name:customerdata.Customer_cust_name,ctype:customerdata.Customer_ctype,address:customerdata.Customer_address,tendorid:customerdata.Customer_tendorid,tendorname:customerdata.Customer_tendorname,date:customerdata.Customer_date,customername:customerdata.Customer_customername,amount:customerdata.Customer_amount,remainder:customerdata.Customer_Remainder,requirement:customerdata.Customer_requirement,priority:customerdata.Customer_priority,specification:customerdata.customer_specification},()=>{
      console.log(this.state.tendor);
     })

  }

  handleSubmit =(event) =>{

      event.preventDefault();
      alert("hhhh");
      var id = this.props.location.state.item;
      var somedata = {
        Customer_tendor: this.state.tendor,
        Customer_country: this.state.country,
        Customer_ordertype: this.state.ordertype,
        Customer_cust_name: this.state.cust_name,
        Customer_ctype: this.state.ctype,
        Customer_address: this.state.address,
        Customer_tendorid:this.state.tendorid,
        Customer_tendorname:this.state.tendorname,
        Customer_date:this.state.date,
        Customer_amount:this.state.amount,
        Customer_Remainder:this.state.Remainder,
        Customer_priority:this.state.priority,
        Customer_requirement:this.state.requirement,
        Customer_specification:this.state.specification
      }
      console.log("somedata", somedata);
      console.log("idddddtstbhf", id._id);
      var ids  = id._id;
      fetch(  `https://cors-anywhere.herokuapp.com/http://3.92.201.85:8999/order/${ids}/update` , {
        method: 'PUT',
        body: JSON.stringify(somedata),
        headers: {
            'Content-Type': 'application/json'
        }
      })
    }

  handleTendorIdChange (e) {
    console.log(e.target.value);
  this.setState({
    tendorid: e.target.value
  });
}

handleTendorNameChange (e){
  this.setState({
    tendorname: e.target.value
  });
}

handleDateChange = (value) =>{
  this.setState({
    date: value._d
  });
}

handleCustomerNameChange  (e){
  this.setState({
    customername: e.target.value
  });
}
handleAmountChange  (e) {
  this.setState({
    amount: e.target.value
  });
}

handleRemainderChange = (value) => {
  this.setState({
    Remainder: value
  });
}
handlePriorityChange = (value) => {
  this.setState({
    priority: value
  });
}

handleRequirementChange  (e) {
  this.setState({
    requirement: e.target.value
  });
}
handleSpecificationChange  (e)  {
  this.setState({
    specification: e.target.value
  });
}
  handleTendorChange(e) {
    console.log("ggggg");
    this.setState({
      tendor: e.target.value
    });
  }

  handleCountryChange = value => {
    console.log("value", value);
    this.setState({
      country: value
    });
    console.log(this.setState.country);
  };

  handleTypeChange(e) {
    this.setState({
      ordertype: e.target.value
    });
  }

  handleCustomerChange(e) {
    this.setState({
      cust_name: e.target.value
    });
  }
  handleCTypeChange(e) {
    this.setState({
      ctype: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  render() {
    console.log("updata", this.state.tendorid);
    return (
      <Container as={FormStyles}>

      <Form onSubmit={e => this.handleSubmit(e)}>
      <Row>

        <Col md={4}>
          <Form.Group controlId="formBasicName">
            <Form.Control name="tendorid" value={this.state.tendorid} placeholder="Tendor ID" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formBasicName">
            <Form.Control name="tendorname"  placeholder="Tendor Name" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formBasicName">
            <Form.Control name="refno"  placeholder="REF No" />
          </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={3}>
          <Form.Group>
            <Form.Control name="subject" placeholder="Subject" />
          </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group>
        <DatePicker
                defaultValue={moment("01/01/2015", dateFormatList[0])} name="closingdate"
                format={dateFormatList}  onChange={this.handleDateChange}
              />
        </Form.Group>
          {/* <Form.Group>
            <Form.Control name="closingdate" placeholder="BID Closing Date" />
          </Form.Group> */}
        </Col>
        <Col md={3}>
        <Form.Group>
            <Form.Control as="select" name="validityperoid">
              <option>BID VALIDITY PERIOD</option>
              <option value="30days">30days</option>
                <option value="5days">5days</option>

            </Form.Control>
          </Form.Group>
          {/* <Form.Group>
            <Form.Control name="validityperoid" placeholder="BID VALIDITY PERIOD" />
          </Form.Group> */}
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Control name="email" placeholder="Email ID" />
          </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Control name="listofdocument" placeholder="List of Documents" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Control name="items" placeholder="List of ITEMS" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Control name="quantity" placeholder="Quantity" />
          </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Control name="Comment" placeholder="Comment" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="6"
              name="terms"
              placeholder="Terms & Condition"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-5">
        <Col style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
          ADD
          </Button>
        </Col>
      </Row>
    </Form>
    <ActionModal
          display={this.state.modal}
          itemAction={() => this.itemAction(this.id)}
          closeModel={() => this.setModal(false)}
          success={true}
          message="Customer Added successfully!"
          redirectTo="/admin/data-entry/vendors"
          type="success"
        />
</Container>
    );
  }
}
export default AddCustomerEdit;
