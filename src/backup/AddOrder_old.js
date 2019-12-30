import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import swal from 'sweetalert';
import { Form, Select } from "antd";
import { DatePicker } from "antd";
import moment from "moment";

const { Option } = Select;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

class AddOrder extends React.Component {

  constructor(props)
  {
      super(props)
      this.state={
        tendorid: '',
        tendorname:'',
        date:'',
        customername:'',
        amount:'',
        remainder:'',
        priority:'',
        requirement: '',
        specification: ''
      }
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
  handleSubmit=(event)=> {

    event.preventDefault();

    console.log(this.state.tendorid);
    console.log(event);
    var addcustomer = sessionStorage.getItem('SetForm2');
    var addobj = JSON.parse(addcustomer);
    console.log("33333",this.state.tendorid);
    console.log("addcustomer", addobj.Customer_tendor)
    // event.preventDefault();
    fetch('http://3.92.201.85:8999/order/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       Customer_tendor: addobj.Customer_tendor,
       Customer_ordertype: addobj.Customer_ordertype,
       Customer_customename: addobj.Customer_customername,
       Customer_ctype: addobj.Customer_ctype,
       Customer_country: addobj.Customer_country,
       Customer_address: addobj.Customer_address,
       Customer_tendorid:this.state.tendorid,
       Customer_tendorname:this.state.tendorname,
       Customer_date:this.state.date,
       Customer_amount:this.state.amount,
       Customer_Remainder:this.state.Remainder,
       Customer_priority:this.state.priority,
       Customer_requirement:this.state.requirement,
       Customer_specification:this.state.specification,
     })

  })
  swal("Customer Updated Successfully");
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="row">
            <div className="col-8">
              <input
                placeholder="Search by Order name"
                type="text"
                class="mr-sm-2 form-control stage-search"
              ></input>
            </div>
          </div>
          <h1 style={{ textAlign: "center", color: "#a5a0a0" }}>Customer</h1>
          <div class="form-row">
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Tendor ID" value={this.state.tendorid} onChange={this.handleTendorIdChange}
              />
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Tendor Name" value={this.state.tendorname} onChange={this.handleTendorNameChange}
              />
            </div>
            <div class="col-3">
              <div>
                <DatePicker
                  defaultValue={moment("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}  onChange={this.handleDateChange}
                />
              </div>
            </div>
            <div className='col-3'>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Customer Name" value={this.state.customername} onChange={this.handleCustomerNameChange}
              />
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Amount $$" value={this.state.amount} onChange={this.handleAmountChange}
              />
            </div>
            <div class="col-3">
              <Form.Item hasFeedback style=
              {{width: '115%'}}>
                <Select placeholder="Remainder"  onChange={this.handleRemainderChange}>
                  <Option value="1 Week">1 Week</Option>
                  <Option value="2 Week">2 Week</Option>
                  <Option value="3 Week">3 Week</Option>
                  <Option value="4 Week">4 Week</Option>
                </Select>
              </Form.Item>
            </div>
            <div class="col-3">
              <Form.Item hasFeedback  style={{width: '115%'}}  onChange={this.handlePriorityChange}>
                <Select placeholder="Priority">
                  <Option value="Low">Low</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="uHighsa">High</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-adds"
                placeholder="Requirement" value={this.state.requirement} onChange={this.handleRequirementChange}
              />
            </div>
            <div class="col-3">
              <input
                type="tel"
                class="form-control stage-adds"
                placeholder="Specification" value={this.state.specification} onChange={this.handleSpecificationChange}
              />
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn stg-btn">
              ADD
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddOrder;
