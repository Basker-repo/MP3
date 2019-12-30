import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import {  Select, DatePicker } from "antd";
import moment from "moment";
import ActionModal from './ActionModal';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Upload, message, Icon } from 'antd';

const { Option } = Select;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
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
    .ant-input {
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 14px;
      min-height: 46px;
  }
`;


class AddOrder extends React.Component {
  constructor(props)
  {
      super(props)
      this.dropContainerEle = null;
      this.dropContainerRef = element => {
          this.dropContainerEle = element;
      };
      this.state={
        modal: false,
        
      }
      this.asyncSettings = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
    };
  }
 
  onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  itemAction = id => {
    this.handleSubmit()
  };

  setModal = modal => {
    if(modal) {
      this.setState({ modal: modal });
    } else {
      this.setState({ modal: modal });
      this.props.history.push('/admin/sales/all');
    }
  };
  handleSubmit = (e) => {
		let datas = {}
		e.preventDefault();
		let elms = e.target.elements;
		let length = elms.length - 1;
		for(let i = 0; i < length; i++) {
			if(elms[i].value)
				datas[elms[i].name] = elms[i].value;
    }
    datas = datas;
    var custdata = JSON.stringify({
      tendorid:datas.tendorid,
      tendorname:datas.tendorid,
      refno:datas.tendorid,
      subject:datas.tendorid,
      closingdate:datas.closingdate,
      validityperoid:datas.validityperoid,
      email:datas.email,
      listofdocument:datas.listofdocument,
      comments:datas.comments,
      quantity:datas.quantity,
      items:datas.items,
      terms:datas.terms
    });
    	fetch('http://3.92.201.85:8999/order/create', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			},
			body: custdata
		})
		.then(response => {
			this.setModal(true)
		});
  }


  rendereComplete() {
    this.uploadObj.dropArea = this.dropContainerEle;
    this.uploadObj.element.setAttribute('name', 'UploadFiles');
    this.uploadObj.dataBind();
}
onChange(args) {
    this.uploadObj.autoUpload = args.checked;
    this.uploadObj.clearAll();
}
// onChanged(args) {
//     this.uploadObj.sequentialUpload = args.checked;
//     this.uploadObj.clearAll();
// }
onRemoveFile(args) {
    args.postRawFile = false;
}


 
 
  render() {


    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <Container as={FormStyles}>

      <Row>
          <Col><h1 className="form-title">Add Customer</h1></Col>
      </Row>
     <div class="g-signin2" data-onsuccess={this.onSignIn}></div> 

      <Form onSubmit={e => this.handleSubmit(e)}>
        <Row>
        
          <Col md={4}>
            <Form.Group controlId="formBasicName">
              <Form.Control name="tendorid"  placeholder="Tendor ID" />
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
        <DatePicker defaultValue={moment()}/>
          {/* <DatePicker
                  defaultValue={moment("01/01/2015", dateFormatList[0])} name="closingdate"
                  format={dateFormatList}  onChange={this.handleDateChange}
                /> */}
          </Form.Group>        
          </Col>
          <Col md={3}>
          <Form.Group>
              <Form.Control as="select" name="validityperoid">
                <option>BID VALIDITY PERIOD</option>
                <option value="30days">15days</option>
                <option value="5days">30days</option>
                <option value="30days">45days</option>
                <option value="5days">60days</option>
                <option value="30days">90days</option>
                <option value="5days">120days</option>
                  
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
              {/* <Form.Control name="listofdocument" placeholder="List of Documents" /> */}
              <Upload style={{width:'100%'}} name="listofdocument" {...props}>
                     <Button style={{background:'white',width:'100%',outline:'none',color:'#495057',borderRadius:'12px',border: '1px solid #ced4da'}} class="btn">
                     List Of Documents <i style={{float:'right',paddingRight:'1em'}} class="fa fa-link" aria-hidden="true"></i>
                        </Button>
                    </Upload>           
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

export default AddOrder;

