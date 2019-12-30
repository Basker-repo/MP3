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
        <div class="container register-form">
            <div class="form">
            <div className="row">
            <div className="col-8">
              <input
                placeholder="Search by Order name"
                type="text"
                class="mr-sm-2 form-control stage-search" style={{backgroundColor: "white"}}
              ></input>
            </div>
          </div>
        </div> 

                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control data-add" placeholder="First Name" value=""/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control data-add" placeholder="Last Name" value=""/>
                        </div>
                    </div>
                    <div class="row" style={{marginTop: '5%'}}>
                        <div class="col-md-4">
                            <input type="text" class="form-control data-add" placeholder="Phone Number" value=""/>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control data-add" placeholder="Email ID" value=""/>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control data-add" placeholder="Website Link" value=""/>
                        </div>
                    </div>
                    <div class="row" style={{marginTop: '5%'}}>
                        <div class="col-md-4">
                            <input type="text" class="form-control data-add" placeholder="Company Name" value=""/>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control data-add" placeholder="Company Address" value=""/>
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control data-add" placeholder="Add Product" value=""/>
                        </div>
                    </div>
                    <div class="row" style={{marginTop: '5%'}}>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Company Name" value=""/>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Company Address" value=""/>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Add Product" value=""/>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" placeholder="Add Product" value=""/>
                        </div>
                    </div>
                    {/* <button type="button" class="btnSubmit">Submit</button> */}
                </div>
            </div>
      </form>
    );
  }
}
export default AddOrder;

