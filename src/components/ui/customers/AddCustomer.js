import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ActionModal from "../ActionModal";
import SelectSearch from 'react-select-search';
import MultiSearchSelect from "react-search-multi-select";
import ReactExport from "react-data-export";
import * as XLSX from "xlsx";
import swal from 'sweetalert';
import $ from 'jquery'; 
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
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
      background: transparent linear-gradient(90deg, #009DFF 0%, #5CBBF7 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000029;
      border-radius: 23px;
    }
  }
`;
class AddCustomer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      ProductData: [],
      customersData:[],
    };
    this.path = this.props.location.pathname.match("sales")
      ? "sales"
      : "data-entry";
    this.validated = false;
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
  async componentDidMount() {
    fetch(`http://3.92.201.85:8999/products`)
  .then(response => response.json())
  .then(data =>
    this.setState ({
      ProductData: data
    })
  );
  fetch(`http://3.92.201.85:8999/customers`)
  .then(response => response.json())
  .then(data =>
    this.setState ({
      customersData: data
    })
  );
}
  handleSubmit = e => {
    let data = {};
    e.preventDefault();
    let elms = e.target.elements;
    let length = elms.length - 1;
    for (let i = 0; i < length; i++) {
      if (elms[i].value) data[elms[i].name] = elms[i].value;
    }
    data = JSON.stringify(data);
    fetch("http://3.92.201.85:8999/customer/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: data
    }).then(response => {
      this.setModal(true);
    });
  };
  Upload = () =>{
    console.log("Upload")
    //Reference the FileUpload element.
    var fileUpload = document.getElementById("fileUpload");
    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
              console.log(e.target.result);
                var data = e.target.result;
                let readedData = XLSX.read(data, {type: 'binary'});
                const wsname = readedData.SheetNames[0];
                const ws = readedData.Sheets[wsname];
                var excelRows = XLSX.utils.sheet_to_row_object_array(ws);
                data = JSON.stringify(excelRows[0]);
                console.log(data)
                fetch('https://cors-anywhere.herokuapp.com/http://3.92.201.85:8999/customer/create', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                  },
                  body: data
                })
                .then(response => {
                  console.log(response)
                  swal( "File Imported ", "success");
                });
                 console.log("dataparse", excelRows[0]);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } 
        } 
    }
  result(params) {
    console.log(params);
  }
  render() {
    var ProductData = this.state.ProductData;
    var product_data= [];
    let optionTemplate = ProductData.map(v => (
      product_data.push({"name": v.product_name, "value":   v.product_name})
  
    ));
    console.log(this.state.customersData)
    $('#fileUpload').bind('change', function () {
      var filename = $("#fileUpload").val();
      var fileUpload = document.getElementById("fileUpload");
      console.log(fileUpload)
      console.log(filename)
      if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen..."); 
      }
      else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
      }
    });
    
    return (
      <Container as={FormStyles}>
   
<Row>     
            <Col md={12}>
                  <h1 className="form-title">Add Customer</h1>
                       </Col>
                       <Col md={4}>
                      <div class="file-upload">
                        <div class="file-select">
                           <div class="file-select-button" id="fileName">Choose File</div>
                             <div class="file-select-name" id="noFile">No file chosen...</div> 
                            <input type="file" name="chooseFile" id="fileUpload"/>
                         </div>
                        </div>
                  </Col>
                  <Col md={2}>
                  <button style={{marginTop:'5px'}} type="button" id="upload" value="Import" className="btn btn-info"  onClick={this.Upload}>Import</button>
                  </Col>
                {/* <input type="file" id="fileUpload" class="inputfile"/>
                <button type="button" id="upload" value="Import" className="btn btn-success"  onClick={this.Upload}>Import</button> */}
                 <Col md={6}>
                 <ExcelFile element={<button type="button" className="btn btn-info" style={{float: "right"}}>Export</button>}>
                <ExcelSheet data={this.state.customersData} name="Employees">
                    <ExcelColumn label="first_name" />
                    <ExcelColumn label="last_name" />
                    <ExcelColumn label="phone_no" />
                    <ExcelColumn label="email_id"/>
                    <ExcelColumn label="street" />
                    <ExcelColumn label="state" />
                    <ExcelColumn label="country" />
                    <ExcelColumn label="zip_code" />
                    <ExcelColumn label="url" />
                    <ExcelColumn label="add_product" />
                    <ExcelColumn label="priority" />
                    <ExcelColumn label="type"/>
                    {/* <ExcelColumn label="EnterQuickNote" value="EnterQuickNote"/> */}
                </ExcelSheet>
            </ExcelFile>
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
              <Form.Group controlId="formBasicName">
                <Form.Control name="first_name" placeholder="First name" required />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group>
                <Form.Control name="last_name" placeholder="Last name" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Control name="phone_no" placeholder="Phone No" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Control
                  type="email"
                  name="email_id"
                  placeholder="Email"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Control name="street" placeholder="Street Address" required />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Control name="state" placeholder="State" required />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Control name="country" placeholder="Country" required />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group>
                <Form.Control name="zip_code" placeholder="Zip code" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Control name="url" placeholder="Website Link" required />
              </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group>
            <Form.Label>Interest At Product</Form.Label>
            <SelectSearch multiSelect={true} options={product_data} value={product_data.value} name="add_product" placeholder="Add Product" required />
            {/* <MultiSearchSelect name="add_product" searchable={true} showTags={true} multiSelect={true} value={product_data.value}  required /> */}
            </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Control as="select" name="priority" required>
                  <option value="small">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name="type" required>
                  <option value="small">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Control>
              </Form.Group>
            </Col>
            {/* <Col md={4}>
              <Form.Group>
                <Form.Control name="documents" type="file" />
              </Form.Group>
            </Col> */}
            <Col md={{ span: 8, offset: 2 }}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="6"
                  name="quick_note"
                  placeholder="Enter Quick note"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="my-5">
            <Col style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Add Customer
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
          redirectTo={`/admin/${this.path}/customers`}
          type="success"
        />
      </Container>
    );
  }
}
export default AddCustomer;