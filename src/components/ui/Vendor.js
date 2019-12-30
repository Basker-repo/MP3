import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight} from "react-icons/fa";
import { Redirect } from 'react-router';


import {
  Form,
  Select,
} from 'antd';

const { Option } = Select;



class AddVendor extends React.Component {
  setRedirect = () => {
    console.log("gggg");
    this.props.history.push(`/addorders`)
  }

  render() {
    return (
      <form>
        <div>
        <div className="row">
          <div className="col-8">
            <input
              placeholder="Search by Order name"
              type="text"
              class="mr-sm-2 form-control stage-search" 
            ></input>
          </div>
          <div className="col-4">
            <div className="filter-stage">
              <span>Filter by </span>
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
        </div>
        <h1 style={{textAlign: 'center',color: '#a5a0a0'}}>Vendor</h1>
        <div class="form-row">
          <div class="col-4">
            <input type="text" class="form-control stage-form" placeholder="Vendor ID" style={{marginRight: '0%'}}/>
          </div>
          <div class="col-4">
          <Form.Item hasFeedback style={{width: '91%'}}>
            <Select placeholder="Carridge">
              <Option value="china">Shooting</Option>
              <Option value="usa">Gun storage</Option>
              <Option value="usa">Optics</Option>
            </Select>
          </Form.Item>
          </div>
          <div class="col-4">
            <input type="text" class="form-control stage-form" placeholder="Contact number" style={{marginLeft: '0%'}}/>
          </div>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-4">
            <input type="text" class="form-control stage-form" placeholder="Vendor Name" style={{marginRight: '0%'}}/>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="row">
        <div class="col-4">
        <Form.Item hasFeedback style={{marginLeft:'19%',width: '100%'}} >
            <Select placeholder="Type">
              <Option value="china">Loew</Option>
              <Option value="usa">Medium</Option>
              <Option value="usa">High</Option>
            </Select>
        </Form.Item>          
        </div>
          <div class="col-3" style={{marginLeft: '5%'}}>
            <input
              type="textarea"
              class="form-control form-style stage-form"
              placeholder="Address"
            />
          </div>
        </div >
        <div class="text-center">
            <button type="button" class="btn stage-button" style={{padding:'1%',borderRadius: '25px'}}>Create</button>
        </div>
        </div>
      </form>
    );
  }
}
export default AddVendor;
