import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs, Radio } from "antd";
import { FiPhone } from "react-icons/fi";
import { TiAttachment } from "react-icons/ti";
import { MdEventAvailable } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { TiMail } from "react-icons/ti";
import "./App.css";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TodoApp from "./Todo";
import Swal from "sweetalert";

// import TodoApp from "./Todo"
const { TabPane } = Tabs;
export default class TrelloEdit extends Component {
  state = {
    size: "small",
    Activities: "",
    editorState: EditorState.createEmpty(),
    threads: [
      //  {
      //   date: "201820823",
      //   name: "steve",
      //   title: "im an ex agent",
      // },
      // {
      //   data: "202898029",
      //   name: "jack",
      //   title: "im potato",
      // }
    ],
    datacame: false,
    CommentData: []
  };
  onChange = e => {
    this.setState({ size: e.target.value });
  };
  //-----------COMMENTING COMPONENTS-------------------//
  addThread = threadAdded => {
    var addedData = [];
    addedData.push(threadAdded);
    this.setState({
      threads: this.state.threads.concat(threadAdded),
      datacame: true
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const title = e.target.elements.title.value;
    const threads = {
      date: Number(new Date()),
      name: name,
      title: title
    };
    var data = JSON.stringify(threads);

    console.log("threads", threads);
    fetch(
      `https://cors-anywhere.herokuapp.com/http://3.92.201.85:8999/comment/create`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: data
      }
    )
      .then(response => {
        Swal({
          title: "Done!",
          text: "Comments is added to database",
          icon: "success",
          timer: 2000,
          button: false
        });
      })
      .catch(err => console.log(err));
    if (name && title) {
      this.addThread(threads);
    }
    e.target.elements.name.value = "";
    e.target.elements.title.value = "";
  };

  async componentDidMount() {
    fetch(`http://3.92.201.85:8999/comments`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          CommentData: data
        })
      );
  }
  handleActivityPage = value => {
    this.setState({ Activities: value }, () => {
      console.log(this.state.Activities);
    });
  };
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  //-----------COMMENTING COMPONENTS-------------------//
  render() {
    const { size } = this.state;
    const editorState = this.state.editorState;
    console.log("gggg", this.state.CommentData);
    return (
      <div>
        <div className="Order_Header">
          <div style={{ width: "80%" }}>
            <div className="Order_Header_Left">
              <div className="Order_Header_Text">
                Sale &#160;&#160;&#160;&#160;&#160;
                <span className="Order_Header_OrderText">4253</span>
              </div>
              <div className="Order_Header_Left_Bottom">
                <div className="Order_Header_Left_Bottom_Text">Laptop</div>
                <div className="Order_Header_Left_Bottom_Text">
                  <MdEventAvailable
                    style={{ float: "left", fontSize: "153%" }}
                  />
                  5457373
                </div>
                <div className="Order_Header_Left_Bottom_Text">
                  <MdLocalMovies style={{ float: "left", fontSize: "153%" }} />
                  Tendor
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
          <div
            className="col-md-12 container"
            style={{ display: "flex", padding: "0" }}
          >
            <div
              className="col-md-3 "
              style={{ display: "flex", padding: "5px", alignItems: "center" }}
              onClick={() => this.handleActivityPage("Activities")}
            >
              <div
                className="col-md-6 "
                style={{
                  display: "flex",
                  padding: "0",
                  justifyContent: "flex-end"
                }}
              >
                <MdPeople
                  style={{ float: "right", fontSize: "190%" }}
                  id="home-fixed"
                />
              </div>
              <div
                className="col-md-6 "
                style={{ display: "flex", padding: "0" }}
              >
                <p style={{ width: "100%", margin: "0" }}>Comments</p>
              </div>
            </div>
            <div
              className="col-md-3 "
              style={{ display: "flex", padding: "5px", alignItems: "center" }}
              onClick={() => this.handleActivityPage("Notes")}
            >
              <div
                className="col-md-6 "
                style={{
                  display: "flex",
                  padding: "0",
                  justifyContent: "flex-end"
                }}
              >
                <MdEventAvailable
                  style={{ float: "right", fontSize: "190%" }}
                  id="home-fixed"
                />
              </div>
              <div
                className="col-md-6 "
                style={{ display: "flex", padding: "0" }}
              >
                <p style={{ width: "100%", margin: "0" }}>Activity</p>
              </div>
            </div>
            <div
              className="col-md-3 "
              style={{ display: "flex", padding: "5px", alignItems: "center" }}
              onClick={() => this.handleActivityPage("Attachements")}
            >
              <div
                className="col-md-6 "
                style={{
                  display: "flex",
                  padding: "0",
                  justifyContent: "flex-end"
                }}
              >
                <TiAttachment
                  style={{ float: "right", fontSize: "190%" }}
                  id="home-fixed"
                />
              </div>
              <div
                className="col-md-3 "
                style={{ display: "flex", padding: "0" }}
              >
                <p style={{ width: "100%", margin: "0" }}>Attachements</p>
              </div>
            </div>
            <div
              className="col-md-2 "
              style={{ display: "flex", padding: "5px", alignItems: "center" }}
              onClick={() => this.handleActivityPage("Mail")}
            >
              <div
                className="col-md-6 "
                style={{
                  display: "flex",
                  padding: "0",
                  justifyContent: "flex-end"
                }}
              >
                <TiMail
                  style={{ float: "right", fontSize: "190%" }}
                  id="home-fixed"
                />
              </div>
              <div
                className="col-md-6 "
                style={{ display: "flex", padding: "0" }}
              >
                <p style={{ width: "100%", margin: "0" }}>Mail</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ display: "flex" }}>
          <div className="emailcontainer col-md-8">
            <div className="row valign-wrapper">
              <div className="col s6 offset-s3 valign">
                <div className="card blue-grey darken-1 cardcontainer1">
                  <div className="card-content white-text cardcontainer">
                    {this.state.Activities === "Activities" ? (
                      <div>
                        <Editor
                          editorState={editorState}
                          editorClassName="editorClassName"
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          onEditorStateChange={this.onEditorStateChange}
                        />
                        <div className="col-md-12">
                          <div class="card-body">
                            <form
                              className="container"
                              onSubmit={this.handleSubmit}
                            >
                              <div class="form-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="name"
                                  required
                                  placeholder="Name"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  style={{ color: "black" }}
                                />
                              </div>
                              <div class="form-group">
                                <input
                                  type="text"
                                  placeholder="Comment"
                                  name="title"
                                  required
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  style={{ color: "black" }}
                                />
                              </div>
                              <button type="submit" class="btn btn-danger">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                        <div
                          className="col-md-12"
                          style={{ border: "2px solid", padding: "20px" }}
                        >
                          {this.state.CommentData ? (
                            <span>
                              {this.state.CommentData.map(data => (
                                <div
                                  className="container"
                                  style={{
                                    border: "2px solid gray",
                                    margin: "auto",
                                    marginBottom: "5%",
                                    borderRadius: "4px"
                                  }}
                                >
                                  <h3>{data.name}</h3>
                                  <p>{data.title}</p>
                                  <p>{data.comments}</p>
                                </div>
                              ))}
                            </span>
                          ) : (
                            <h2>show comments</h2>
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.Activities === "Notes" ? (
                      <div>
                        <TodoApp />
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.Activities === "Attachements" ? (
                      <div>
                        <h1>Attachements</h1>
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.Activities === "Mail" ? (
                      <div>
                        <h1>Mail</h1>
                      </div>
                    ) : (
                      ""
                    )}
                    <div style={{ float: "right", marginRight: "10%" }}></div>
                    <form onSubmit={this.handleSubmit}></form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Todoactivity /> */}
          <div className="col-md-4" style={{ marginTop: "-4%" }}>
            <div className="col-md-12">
              <div
                class="card text-white bg-info mb-3"
                style={{ maxwidth: "18rem" }}
              >
                <div class="card-header">A2 Weapons</div>
                <div class="card-body">
                  <h5 class="card-title">Address : Canada</h5>
                  {/* <p class="card-text">
                    Chennai
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                class="card text-white bg-info mb-3"
                style={{ maxwidth: "18rem" }}
              >
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                  <h5 class="card-title">User name: Joneny</h5>
                  <h5 class="card-title">Email:random@gmail.com</h5>
                  <h5 class="card-title">Mobile No:+123</h5>
                  {/* <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
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
