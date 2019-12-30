import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ActionModal from "../ActionModal";
import SelectSearch from 'react-select-search'
import ReactExport from "react-data-export";
import { Dropdown } from 'semantic-ui-react'
import Select from 'react-select';
import * as XLSX from "xlsx";
import swal from 'sweetalert';
import $ from 'jquery'; 
import CountriesData from '../../../components/ui/Country.json';


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
      background: transparent linear-gradient(90deg, #009dff 0%, #5cbbf7 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000029;
      border-radius: 23px;
    }
  }
`;

class AddVendor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      validated: false,
      ProductData: [],
      vendorsData:[],
    };
    this.path = this.props.location.pathname.match("sales")
      ? "sales"
      : "data-entry";
  }

  itemAction = id => {
    this.handleSubmit();
  };

  setModal = modal => {
    if (modal) {
      this.setState({ modal: modal });
    } else {
      this.setState({ modal: modal });
      this.props.history.push(`/admin/${this.path}/vendors`);
    }
  };
  async componentDidMount() {
    fetch(`http://3.92.201.85:8999/products`)
  .then(response => response.json())
  .then(data =>
    this.setState ({
      ProductData: data
    },()=>{
      console.log(this.state.ProductData)
    })
  );

  fetch(`http://3.92.201.85:8999/vendors`)
  .then(response => response.json())
  .then(data =>
    this.setState ({
      vendorsData: data
    },()=>{
      console.log(this.state.vendorsData)
    })
  );
}

  handleSubmit = e => {
    console.log(e.target.elements)
    let data = {};
    e.preventDefault();
    let elms = e.target.elements;
    let length = elms.length - 1;
    for (let i = 0; i < length; i++) {
      if (elms[i].value) data[elms[i].name] = elms[i].value;
    }
    data = JSON.stringify(data);
    console.log(data)
    fetch("http://3.92.201.85:8999/vendor/create", {
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
    console.log(fileUpload)
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
                console.log(excelRows)
                data = JSON.stringify(excelRows[0]);
                console.log(data)
                fetch('https://cors-anywhere.herokuapp.com/http://3.92.201.85:8999/vendor/create', {
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
                 console.log("dataparse", excelRows);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } 
        } 
    }


  render() {
    var ProductData = this.state.ProductData;
    console.log(ProductData)
    var product_data= [];


    
    let CountriesList = CountriesData.length > 0
		&& CountriesData.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)
	}, this);


  

    const options = ProductData.map((guest, index) => {

      return {
         label: guest.product_name,
         value: guest.product_name,
        //  key: index
      }
 })

    

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
                      <h1 className="form-title">Add Vendor</h1>
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
                <ExcelSheet data={this.state.vendorsData}  name="Employees">
                    <ExcelColumn label="VendorName" />
                    <ExcelColumn label="PhoneNumber" />
                    <ExcelColumn label="Email" />
                    <ExcelColumn label="StreetAddress" />
                    <ExcelColumn label="State" />
                    <ExcelColumn label="Country" />
                    <ExcelColumn label="ZipCode" />
                    <ExcelColumn label="CompanyName" />
                    <ExcelColumn label="CompanyUrl" />
                    <ExcelColumn label="AddProduct" />
                    <ExcelColumn label="Priority" />
                    <ExcelColumn label="Type"/>
                    <ExcelColumn label="EnterQuickNote"/>

                </ExcelSheet>
            </ExcelFile>

          </Col>
        </Row>


         

        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Row>
            <Col md={4}>
              <Form.Group controlId="formBasicName">
                <Form.Control name="vendor_name" placeholder="Vendor name" required />
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
                <Form.Control as="select" name="country" required>
                  {CountriesList}                
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group>
                <Form.Control name="zip_code" placeholder="Zip code" required />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control name="company_name" placeholder="Company Name" required />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control name="site_url" placeholder="Company url" required />
              </Form.Group>
            </Col>

            <Col md={4}>
            <Select
            styles={{  borderRadius: '14px'}}
            isMulti
            name="add_product"
            className="select-search-box__search1"
            options={options}
            // value={optionTemplate.value}
            placeholder="Add Product"
            required
            />
              {/* <SelectSearch options={product_data} value={product_data.value} name="add_product" placeholder="Add Product" required /> */}
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Control as="select" name="priority" required >
                  <option value="small">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" name="type" required >
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
                Add Vendor
              </Button>
            </Col>
          </Row>
        </Form>

        <ActionModal
          display={this.state.modal}
          itemAction={() => this.itemAction(this.id)}
          closeModel={() => this.setModal(false)}
          success={true}
          message="Vendor Added successfully!"
          redirectTo={`/admin/${this.path}/vendors`}
          type="success"
        />
      </Container>
    );
  }
}

export default AddVendor;
