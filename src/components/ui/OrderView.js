import React, { Component } from "react";
import "antd/dist/antd.css";
// import { Tabs } from "antd";
// import { Tabs, Radio } from "antd";
import { FiPhone } from "react-icons/fi";
import { TiAttachment } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { TiMail } from "react-icons/ti";
// import { Steps, Divider } from "antd";
import { Steps } from "antd";
// import { Input } from "antd";
// import { FaEllipsisH } from "react-icons/fa";
import { Menu, Dropdown, Icon } from 'antd';
// import EditStages from "./EditStages"
// import { Container} from "semantic-ui-react";
// import { Container, Header, List, Tab } from "semantic-ui-react";


//
// const App = ({ children }) => (
//   <Container style={{ margin: 20 }}>
//     {children}
//   </Container>
// );


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


// const { TabPane } = Tabs;
const { Step } = Steps;

export default class OrderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "small"
        };
        this.handleActivityPage = this.handleActivityPage.bind(this);
        // this.openNav =this.openNav.bind(this);
      }


  callChange = current => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  onChange = e => {
    this.setState({ size: e.target.value });
  };
  handleActivityPage(value) {
    this.setState({ tapacitivity: value });

  }

  render() {
    // const { size } = this.state;

    const { current } = this.state;
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Edit
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank"  rel="noopener noreferrer" href="http://www.taobao.com/">Delete
            </a>
          </Menu.Item>
        </Menu>
      );
      // const view =this.state.tapacitivity == "Activities";
    //   const view =this.state.tapacitivity == "Notes";
    //   const view =this.state.tapacitivity == "Attachements";
    //   const view =this.state.tapacitivity == "Call";
    //   const view =this.state.tapacitivity == "Mail";
    //   const view =this.state.tapacitivity == "Invoice";

       const editComponent =  <div className="col-md-12 note-text" style={{ display: "flex" }}>
        <div className="col-md-8">
          <Steps
            current={current}
            onChange={this.callChange}
            direction="vertical"
          >
            <Step
              description={
                <div className="col-md-12">
                  <div
                    class="card text-white  mb-3 note-card"  data-toggle="popover"
                    style={{ maxwidth: "18rem" }}
                  >
                    <div class="card-body"  data-toggle="popover">
                      <p class="notes-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Dropdown overlay={menu}>
                          <a className="ant-dropdown-link" href="/" style={{float: "right", marginTop: "-5%"}}>
                          <Icon type="ellipsis" />
                          </a>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              }
            />

            <Step
              description={
                <div className="col-md-12">
                  <div
                    class="card text-white  mb-3 note-card"
                    style={{ maxwidth: "18rem" }}
                  >
                    <div class="card-body">
                      <p class="notes-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Dropdown overlay={menu}>
                          <a className="ant-dropdown-link" href="/"  style={{float: "right", marginTop: "-5%"}}>
                          <Icon type="ellipsis"/>
                          </a>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              }
            />
            <Step
              description={
                <div className="col-md-12">
                  <div
                    class="card text-white  mb-3 note-card"
                    style={{ maxwidth: "18rem" }}
                  >
                    <div class="card-body">
                      <p class="notes-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Dropdown overlay={menu}>
                          <a className="ant-dropdown-link" href="/" style={{float: "right", marginTop: "-5%"}}>
                          <Icon type="ellipsis" />
                          </a>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              }
            />
          </Steps>
        </div>
        <div className="col-md-4" style={{ marginTop: "-4%" }}>
          <div className="col-md-12">
            <div
              class="card text-white bg-info mb-3"
              style={{ maxwidth: "18rem" }}
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12" style={{ marginTop: "20%" }}>
            <div
              class="card text-white bg-info mb-3"
              style={{ maxwidth: "18rem" }}
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div
              class="card text-white bg-info mb-3"
              style={{ maxwidth: "18rem" }}
            >
              <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    return (
      <div>
        <div className="Order_Header">
          <div style={{ width: "80%" }}>
            <div className="Order_Header_Left">
              <div className="Order_Header_Text">
                A2 Weapons Ltd &#160;&#160;&#160;&#160;&#160;
                <span className="Order_Header_OrderText">0000175</span>
              </div>
              <div className="Order_Header_Left_Bottom">
                <div className="Order_Header_Left_Bottom_Text">AED 10,0000</div>
                <div className="Order_Header_Left_Bottom_Text">
                  <MdEventAvailable
                    style={{ float: "left", fontSize: "153%" }}
                  />
                  Joneny
                </div>
                <div className="Order_Header_Left_Bottom_Text">
                  <MdLocalMovies style={{ float: "left", fontSize: "153%" }} />
                  A2 Weapons
                </div>
              </div>
            </div>
          </div>
          <div className="Order_Header_Right">
            <div>
              <TiMail
                style={{ float: "left", fontSize: "153%", marginLeft: "-40px" }}
              />
              random@outlook.com
            </div>
            <div style={{ padding: "5%", marginLeft: "-35%" }}>
              <FiPhone style={{ float: "left", fontSize: "153%" }} /> +91
              9600452314
            </div>
          </div>
        </div>

        <div class="grid-container">
          <div class="item1 item-color">Sale</div>
          <div class="item2">Finance</div>
          <div class="item3">Logistic</div>
          <div class="item4">Delivery</div>
        </div>
        <div class="callcontainer">
            <div className="col-md-12 container" style={{display:"flex",padding:"0"}}>

            <div className="col-md-2 " style={{display:"flex",padding:"5px",alignItems:"center"}}  onClick={() => this.handleActivityPage("Activities")}>
            <div className="col-md-6 " style={{display:"flex",padding:"0",justifyContent:"flex-end"}}>
            <MdPeople
                style={{ float: "right", fontSize: "190%" }}
                id="home-fixed"
              />
                </div>
                <div className="col-md-6 " style={{display:"flex",padding:"0"}}>
                <p style={{width:"100%",margin:"0"}}>Activities</p>
                </div>
            </div>

            <div className="col-md-2 " style={{display:"flex",padding:"5px",alignItems:"center"}} onClick={() => this.handleActivityPage("Notes")}>

            <div className="col-md-6 " style={{display:"flex",padding:"0",justifyContent:"flex-end"}}>
            <MdEventAvailable
                style={{ float: "right", fontSize: "190%" }}
                id="home-fixed"
              />
                </div>
                <div className="col-md-6 " style={{display:"flex",padding:"0"}}>
                <p style={{width:"100%",margin:"0"}}>Notes</p>
                </div>
            </div>

            <div className="col-md-2 " style={{display:"flex",padding:"5px",alignItems:"center"}} onClick={() => this.handleActivityPage("Attachements")}>

            <div className="col-md-6 " style={{display:"flex",padding:"0",justifyContent:"flex-end"}}>
            <TiAttachment
                style={{ float: "right", fontSize: "190%" }}
                id="home-fixed"
              />
                </div>
                <div className="col-md-6 " style={{display:"flex",padding:"0"}}>
                <p style={{width:"100%",margin:"0"}}>Attachements</p>
                </div>
            </div>

            <div className="col-md-2 " style={{display:"flex",padding:"5px",alignItems:"center"}} onClick={() => this.handleActivityPage("Call")}>

            <div className="col-md-6 " style={{display:"flex",padding:"0",justifyContent:"flex-end"}}>
            <FiPhone
                style={{ float: "right", fontSize: "190%" }}
                id="home-fixed"
              />
                </div>
                <div className="col-md-6 " style={{display:"flex",padding:"0"}}>
                <p style={{width:"100%",margin:"0"}}>Call</p>
                </div>
            </div>

            <div className="col-md-2 " style={{display:"flex",padding:"5px",alignItems:"center"}} onClick={() => this.handleActivityPage("Mail")}>

            <div className="col-md-6 " style={{display:"flex",padding:"0",justifyContent:"flex-end"}}>
            <TiMail
                style={{ float: "right", fontSize: "190%" }}
                id="home-fixed"
              />
                </div>
                <div className="col-md-6 " style={{display:"flex",padding:"0"}}>
                <p style={{width:"100%",margin:"0"}}>Mail</p>
                </div>
            </div>

            <div className="col-md-2 " style={{display:"flex",padding:"5px",alignItems:"center"}} onClick={() => this.handleActivityPage("Invoice")}>

            <div className="col-md-6 " style={{display:"flex",padding:"0",justifyContent:"flex-end"}}>
            <TiMail
                style={{ float: "right", fontSize: "190%" }}
                id="home-fixed"
              />
                </div>
                <div className="col-md-6 " style={{display:"flex",padding:"0"}}>
                <p style={{width:"100%",margin:"0"}}>Invoice</p>
                </div>
            </div>


            </div>
        </div>
        {editComponent }
       </div>
    );
  }
}
