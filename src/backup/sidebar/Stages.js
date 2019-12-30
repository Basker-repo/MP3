import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs, Radio } from "antd";
import { FiPhone } from "react-icons/fi";
import { TiAttachment } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { TiMail } from "react-icons/ti";

const { TabPane } = Tabs;

export default class Order extends Component {
  state = { size: "small" };

  onChange = e => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { size } = this.state;

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
        {/* <div style={{display:"flex",flexDirection:"row"}}>
                <div className="Order_Stage">
                Sales
                </div>
                <div className="Order_Stage_NotSelected">
                Sales
                </div>
                </div> */}
        <div class="grid-container">
          <div class="item1 item-color">Sale</div>
          <div class="item2">Finance</div>
          <div class="item3">Logistic</div>
          <div class="item4">Delivery</div>
        </div>
        {/* <div className="row">
          <div>
            <input type="text" class="user-data" id="usr" name="username" />
          </div>
        </div> */}
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
        {/* <div className="emailcontainer col-md-8">
          <div className="row valign-wrapper">
            <div className="col s6 offset-s3 valign">
              <div className="card blue-grey darken-1 cardcontainer1">
                <div className="card-content white-text cardcontainer">
                  <form onSubmit={this.handleSubmit}>
                    <Radio.Group
                      value={size}
                      onChange={this.onChange}
                      style={{ marginBottom: 16 }}
                    ></Radio.Group>
                    <Tabs defaultActiveKey="1" size={size}>
                      <TabPane tab="Calls" key="1">
                      </TabPane>
                      <TabPane tab="Meeting" key="2">
                        <p>gggg</p>
                      </TabPane>
                      <TabPane tab="Task" key="3">
                        <p>gggg</p>
                      </TabPane>
                      <TabPane tab="DeadLine" key="4">
                        <p>gggg</p>
                      </TabPane>
                      <TabPane tab="Email" key="5">
                        <p>gggg</p>
                      </TabPane>
                      <TabPane tab="Email" key="6">
                        <p>gggg</p>
                      </TabPane>
                    </Tabs>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-md-12" style={{ display: "flex" }}>
          <div className="emailcontainer col-md-8">
            <div className="row valign-wrapper">
              <div className="col s6 offset-s3 valign">
                <div className="card blue-grey darken-1 cardcontainer1">
                  <div className="card-content white-text cardcontainer">
                    <form onSubmit={this.handleSubmit}>
                      <Radio.Group
                        value={size}
                        onChange={this.onChange}
                        style={{ marginBottom: 16 }}
                      ></Radio.Group>
                      <Tabs defaultActiveKey="1" size={size}>
                        <TabPane tab="Calls" key="1">
                          <div>
                            <div className="form-group call-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Calls"
                              />
                            </div>
                          </div>
                          <div class="w3-row-padding">
                            <div class="w3-third input-w">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Date</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Time</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>
                                  Duration
                                </label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                            </div>
                          </div>
                          <textarea className="call-textarea">Notes</textarea>
                          <div style={{ marginLeft: "5%" }}>
                            <label for="country">Assigned</label>
                          </div>
                          <div style={{ marginLeft: "5%" }}>
                            <select
                              id="country"
                              class="call-select"
                              name="country"
                            >
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                          </div>
                          <div style={{ float: "right", marginRight: "10%" }}>
                            <div class="form-check-inline">
                              <label class="form-check-label" for="radio1">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio1"
                                  name="optradio"
                                  value="option1"
                                  checked
                                />
                                Mark as done
                              </label>
                            </div>
                            <input
                              type="text"
                              className="w3-border w3-bordercall w3-call-text"
                              id="your-input"
                              placeholder="Cancel"
                            />
                            <button type="submit" class="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </TabPane>
                        <TabPane tab="Meeting" key="2">
                          <div>
                            <div className="form-group call-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Meeting"
                              />
                            </div>
                          </div>
                          <div class="w3-row-padding">
                            <div class="w3-third input-w">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Date</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Time</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>
                                  Duration
                                </label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                            </div>
                          </div>
                          <textarea className="call-textarea">Notes</textarea>
                          <div style={{ marginLeft: "5%" }}>
                            <label for="country">Assigned</label>
                          </div>
                          <div style={{ marginLeft: "5%" }}>
                            <select
                              id="country"
                              class="call-select"
                              name="country"
                            >
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                          </div>
                          <div style={{ float: "right", marginRight: "10%" }}>
                            <div class="form-check-inline">
                              <label class="form-check-label" for="radio1">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio1"
                                  name="optradio"
                                  value="option1"
                                  checked
                                />
                                Mark as done
                              </label>
                            </div>
                            <input
                              type="text"
                              className="w3-border w3-bordercall w3-call-text"
                              id="your-input"
                              placeholder="Cancel"
                            />
                            <button type="submit" class="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </TabPane>
                        <TabPane tab="Task" key="3">
                          <div>
                            <div className="form-group call-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Task"
                              />
                            </div>
                          </div>
                          <div class="w3-row-padding">
                            <div class="w3-third input-w">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Date</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Time</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>
                                  Duration
                                </label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                            </div>
                          </div>
                          <textarea className="call-textarea">Notes</textarea>
                          <div style={{ marginLeft: "5%" }}>
                            <label for="country">Assigned</label>
                          </div>
                          <div style={{ marginLeft: "5%" }}>
                            <select
                              id="country"
                              class="call-select"
                              name="country"
                            >
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                          </div>
                          <div style={{ float: "right", marginRight: "10%" }}>
                            <div class="form-check-inline">
                              <label class="form-check-label" for="radio1">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio1"
                                  name="optradio"
                                  value="option1"
                                  checked
                                />
                                Mark as done
                              </label>
                            </div>
                            <input
                              type="text"
                              className="w3-border w3-bordercall w3-call-text"
                              id="your-input"
                              placeholder="Cancel"
                            />
                            <button type="submit" class="btn btn-success">
                              Submit
                            </button>
                          </div>{" "}
                        </TabPane>
                        <TabPane tab="DeadLine" key="4">
                          <div>
                            <div className="form-group call-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Deadline"
                              />
                            </div>
                          </div>
                          <div class="w3-row-padding">
                            <div class="w3-third input-w">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Date</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Time</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>
                                  Duration
                                </label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                            </div>
                          </div>
                          <textarea className="call-textarea">Notes</textarea>
                          <div style={{ marginLeft: "5%" }}>
                            <label for="country">Assigned</label>
                          </div>
                          <div style={{ marginLeft: "5%" }}>
                            <select
                              id="country"
                              class="call-select"
                              name="country"
                            >
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                          </div>
                          <div style={{ float: "right", marginRight: "10%" }}>
                            <div class="form-check-inline">
                              <label class="form-check-label" for="radio1">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio1"
                                  name="optradio"
                                  value="option1"
                                  checked
                                />
                                Mark as done
                              </label>
                            </div>
                            <input
                              type="text"
                              className="w3-border w3-bordercall w3-call-text"
                              id="your-input"
                              placeholder="Cancel"
                            />
                            <button type="submit" class="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </TabPane>
                        <TabPane tab="Email" key="5">
                          <div>
                            <div className="form-group call-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div class="w3-row-padding">
                            <div class="w3-third input-w">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Date</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>Time</label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                              {/* <label for="fname">First Name</label>
                        <input class="w3-input w3-border" type="text"/> */}
                            </div>
                            <div class="w3-third">
                              <div class="input-w">
                                <label style={{ margin: "13%" }}>
                                  Duration
                                </label>
                                <input
                                  type="text"
                                  class="w3-input w3-border call-date  w3-bordercall"
                                  id="your-input"
                                />
                              </div>
                            </div>
                          </div>
                          <textarea className="call-textarea">Notes</textarea>
                          <div style={{ marginLeft: "5%" }}>
                            <label for="country">Assigned</label>
                          </div>
                          <div style={{ marginLeft: "5%" }}>
                            <select
                              id="country"
                              class="call-select"
                              name="country"
                            >
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                            </select>
                          </div>
                          <div style={{ float: "right", marginRight: "10%" }}>
                            <div class="form-check-inline">
                              <label class="form-check-label" for="radio1">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  id="radio1"
                                  name="optradio"
                                  value="option1"
                                  checked
                                />
                                Mark as done
                              </label>
                            </div>
                            <input
                              type="text"
                              className="w3-border w3-bordercall w3-call-text"
                              id="your-input"
                              placeholder="Cancel"
                            />
                            <button type="submit" class="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </TabPane>
                      </Tabs>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
        <div></div>
      </div>
    );
  }
}
