import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";

import { Form, Select } from "antd";
import { DatePicker } from "antd";
import moment from "moment";

const { Option } = Select;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

class AddOrder extends React.Component {
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
          </div>
          <h1 style={{ textAlign: "center", color: "#a5a0a0" }}>Customer</h1>
          <div class="form-row">
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Tendor ID"
              />
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Tendor Name"
              />
            </div>
            <div class="col-3">
              <div>
                <DatePicker
                  defaultValue={moment("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}
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
                placeholder="Customer Name"
              />
            </div>
            <div class="col-3">
              <input
                type="text"
                class="form-control stage-add"
                placeholder="Amount $$"
              />
            </div>
            <div class="col-3">
              <Form.Item hasFeedback style=
              {{width: '115%'}}>
                <Select placeholder="Remainder">
                  <Option value="1 Week">1 Week</Option>
                  <Option value="2 Week">2 Week</Option>
                  <Option value="3 Week">3 Week</Option>
                  <Option value="4 Week">4 Week</Option>
                </Select>
              </Form.Item>
            </div>
            <div class="col-3">
              <Form.Item hasFeedback  style={{width: '115%'}}>
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
                placeholder="Requirement"
              />
            </div>
            <div class="col-3">
              <input
                type="tel"
                class="form-control stage-adds"
                placeholder="Specification"
              />
            </div>
          </div>
          <div class="text-center">
            <button type="button" class="btn stg-btn" onClick={this.setRedirect}>
              ADD
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default AddOrder;

