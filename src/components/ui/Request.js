import React from "react";
import "../App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { Redirect } from "react-router";
import { Form, Select } from "antd";

const { Option } = Select;
class Stages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tendor: "",
      country: "",
      ordertype: "",
      cust_name: "",
      ctype: "",
      address: ""
    };
    this.handleTendorChange = this.handleTendorChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleCTypeChange = this.handleCTypeChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  // setRedirect = () => {
  //   console.log("gggg");
  //   this.props.history.push(`/admin/sales/addorders`);
  // };

  handleTendorChange(e) {
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

  saveAndContinue = e => {

    const SetForm = {
      Customer_tendor: this.state.tendor,
      Customer_country: this.state.country,
      Customer_ordertype: this.state.ordertype,
      Customer_cust_name: this.state.cust_name,
      Customer_ctype: this.state.ctype,
      Customer_address: this.state.address
    }

    sessionStorage.setItem("SetForm2", JSON.stringify(SetForm));
    this.props.history.push(`/admin/sales/customer/addorders`);

  }

  render() {

    return (
      <form>
        <div class="container register-form">
          <div class="form">
            <div className="row">
              <div className="col-8">
                <input
                  placeholder="Search by Order name"
                  type="text"
                  class="mr-sm-2 form-control stage-search"
                  style={{ backgroundColor: "white" }}
                ></input>
              </div>
            </div>
          </div>
          <h1 style={{textAlign: 'center',color: '#a5a0a0'}}>Customer</h1>
​
          <div class="form-content">
            <div class="row">
              <div class="col-md-4">
                <input
                  type="text"  style={{ border: 'transparent', padding: '9%',boxShadow: '0px 3px 6px #00000029' }}
                  class="form-control data-adds"
                  placeholder="Tendor"  value={this.state.tendor} onChange={this.handleTendorChange}
                />
              </div>
              <div class="col-md-4">

    						<select class="form-control" onChange={this.handleCountryChange} style={{ border: 'transparent', height:"56px",boxShadow: '0px 3px 6px #00000029'}}>
                  <option value="china">China</option>
                  <option value="usa">U.S.A</option>
                  <option value="chennai">Chennai</option>
                  <option value="dubai">Dubai</option>
    						</select>
              </div>
              <div class="col-md-4">
                <input
                  type="text" style={{ border: 'transparent', padding: '9%',boxShadow: '0px 3px 6px #00000029' }}
                  class="form-control data-adds"
                  placeholder="Order Type"  value={this.state.ordertype} onChange={this.handleTypeChange}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "8%" }}>
              <div class="col-md-4">
                <input
                  type="text" style={{ border: 'transparent', padding: '9%',boxShadow: '0px 3px 6px #00000029' }}
                  class="form-control data-adds"
                  placeholder="Customer Name"  value={this.state.cust_name} onChange={this.handleCustomerChange}
                />
              </div>
            </div>
            <div class="row" style={{ marginTop: "8%" }}>
              <div class="col-md-4">
                <input
                  type="text" style={{ border: 'transparent', padding: '9%',boxShadow: '0px 3px 6px #00000029' }}
                  class="form-control data-adds"
                  placeholder="C.Type" value={this.state.ctype} onChange={this.handleCTypeChange}
                />
              </div>
              <div class="col-md-6">
              <textarea rows="6" class="form-control resize-v post-area"placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}   style={{ border: 'transparent',boxShadow: '0px 3px 6px #00000029'}}></textarea>
​
                {/* <input
                  type="text"
                  class="form-control data-adds"
                  placeholder="Address" value={this.state.address} onChange={this.handleAddressChange}   style={{ border: 'transparent', padding: '20%' }}
                /> */}
              </div>
            </div>
            <div class="text-center">
            <button type="button" class="btn btn-info stage-button"  onClick={this.saveAndContinue}>Create</button>
            <FaArrowRight style={{marginRight: '2%'}}/>Order
        </div>
        </div>
        </div>
      </form>
    );
    
  }
}
export default Stages;
