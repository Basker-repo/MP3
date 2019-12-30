import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ActionModal from "../ActionModal";
import $ from 'jquery'; 
import ReactExport from "react-data-export";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import {  Input, InputGroup, InputGroupAddon, FormGroup, Label, Fade, FormFeedback, Card } from 'reactstrap';
import SelectSearch from 'react-select-search'
import * as XLSX from "xlsx";
import swal from 'sweetalert';
import CountriesData from '../../ui/Country.json';



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
    // .import-input {
    //   position: relative;
    //   display: flex;
    //   flex-wrap: wrap;
    //   align-items: stretch;
    //   width: 30% !important;
    //   float: right !important;
    //   padding-right: 2% !important;  
    // }
    .add_button {
      width: 159px;
      height: 45px;
      background: transparent linear-gradient(90deg, #009dff 0%, #5cbbf7 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px 6px 10px #00000029;
      border-radius: 23px;
    }
  }
`;

class AddProduct extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      validated: false,
      VendorData: [],
      ProductData:[],
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null,


    };
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.openNewPage = this.openNewPage.bind(this);
    this.fileInput = React.createRef();
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
      this.props.history.push(`/admin/${this.path}/products`);
    }
  };
  async componentDidMount() {
      fetch(`http://3.92.201.85:8999/vendors`)
      .then(response => response.json())
      .then(data =>
        this.setState ({
          VendorData: data
        })
      );
      fetch(`http://3.92.201.85:8999/products`)
    .then(response => response.json())
    .then(data =>
      this.setState ({
        ProductData: data
      })
    );
  }

  renderFile = (fileObj) => {
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        this.setState({
          dataLoaded: true,
          cols: resp.cols,
          rows: resp.rows
        });
      }
    }); 
}

fileHandler = (event) => {    
  if(event.target.files.length){
    let fileObj = event.target.files[0];
    let fileName = fileObj.name;

    console.log("fileobj", fileObj)
    //check for file extension and pass only if it is .xlsx and display error message otherwise
    if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
      this.setState({
        uploadedFileName: fileName,
        isFormInvalid: false
      });
      this.renderFile(fileObj)
    }    
    else{
      this.setState({
        isFormInvalid: true,
        uploadedFileName: ""
      })
    }
  }               
}

toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

openFileBrowser = () => {
  this.fileInput.current.click();

}

openNewPage = (chosenItem) => {
  const url = chosenItem === "github" ? "https://github.com/ashishd751/react-excel-renderer" : "https://medium.com/@ashishd751/render-and-display-excel-sheets-on-webpage-using-react-js-af785a5db6a7";
  window.open(url, '_blank');
}


  handleSubmit = e => {
    e.preventDefault();
    let data = {};
    let elms = e.target.elements;
    let length = elms.length - 1;
    for (let i = 0; i < length; i++) {
    
      if (elms[i].value) { 
        data[elms[i].name] = elms[i].value;
      } else {
        this.setState({
          validated: true
        })
        //return false;

      }
    }

    data = JSON.stringify(data);
    console.log(data)

    fetch(`http://3.92.201.85:8999/product/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: data
    })
      .then(response => this.setModal(true))
      .catch(err => console.log(err));
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
                data = JSON.stringify(excelRows[0]);
                console.log(data)
                fetch('https://cors-anywhere.herokuapp.com/http://3.92.201.85:8999/product/create', {
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



  render() {

    let CountriesList = CountriesData.length > 0
		&& CountriesData.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)
	}, this);



    var vendordata = this.state.VendorData;
    var ProductData = this.state.ProductData;

    var vendor_data= [];
    console.log(vendordata);
    let optionTemplate = vendordata.map(v => (
     vendor_data.push({"name": v.vendor_name, "value":  "sv"})
  
    ));
 
  const Product_data = ProductData;
   console.log(Product_data)

console.log("dataSet1", vendor_data);

$('#fileUpload').bind('change', function () {
  var filename = $("#fileUpload").val();
  console.log(filename)
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


console.log("CountriesData",CountriesData)
    return (
      <Container as={FormStyles}>
        <Row>
   

                      <Col md={12}>
                      <h1 className="form-title">Add Products</h1>
                       </Col>

                       <Col md={4}>
                      <div class="file-upload">
                        <div class="file-select">
                           <div class="file-select-button" id="fileName">Choose File</div>
                             <div class="file-select-name" id="noFile">No file chosen...</div> 
                            <input style={{display:'inline'}} type="file" name="chooseFile" id="fileUpload"/>
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
                <ExcelSheet data={Product_data} name="Employees">
                    <ExcelColumn label="product_category" />
                    <ExcelColumn label="company_name" />
                    <ExcelColumn label="Country" />
                    <ExcelColumn label="website" />
                    <ExcelColumn label="specification" />
                    <ExcelColumn label="price" />
                    {/* <ExcelColumn label="vendor_name" /> */}
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
              <Form.Group>
                <Form.Control as="select" name="product_category" required>
                  <option>Product Category / Product Name</option>
                  <option value="MACHINE GUN">MACHINE GUN </option>
                  <option value="Pistol">Pistol</option>
                  <option value="MI6">MI6</option>
                  <option value="Ammunition">Ammunition</option>
                </Form.Control>
              </Form.Group>
            </Col>
        
            <Col md={4}>
              <Form.Group controlId="formBasicName">
                <Form.Control name="company_name" placeholder="Company name" required />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control as="select" name="Country" required>
                  {CountriesList}                
                </Form.Control>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control name="website" placeholder="Website" required />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control
                  name="specification"
                  placeholder="Specification"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Control name="price" placeholder="Enter price" required />
              </Form.Group>
            </Col>

            <Col md={4}>
       
            <SelectSearch options={vendor_data} value={vendor_data.value} name="Vendor_name" placeholder="Vendor Name" />

            </Col>

            
          </Row>

          <Row className="my-5">
            <Col style={{ textAlign: "center" }} className="addbutton">
              <Button variant="primary" type="submit" className="add_button">
                Add Product
              </Button>
            </Col>
          </Row>
        </Form>

        <ActionModal
          display={this.state.modal}
          itemAction={() => this.itemAction(this.id)}
          closeModel={() => this.setModal(false)}
          success={true}
          message="Product Added successfully!"
          redirectTo={`/admin/${this.path}/products`}
          type="success"
        />
      </Container>
    );
  }
}

export default AddProduct;
