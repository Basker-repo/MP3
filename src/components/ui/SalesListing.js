import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch, faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import swal from 'sweetalert';
import axios from 'axios';

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300}, {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#CF84FF', '#FFB74B', '#FC7F3A', '#409CF4'];
// const RADIAN = Math.PI / 180;

function SimplePieChart () {

  	return (
      <div style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer>
        	<PieChart>
            <Pie
              data={data}
              cx="50%"
              cy={160}
              innerRadius={40}
              outerRadius={90 }
              fill="#8884d8"
              paddingAngle={0}
            >
            	{
              	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );

}

const Style = styled.div`
  margin: 0 5%;
  @media all and (min-width: 0px) and (max-width: 480px) {
    margin: 0;
  }
  .search-and-filter {
    margin: 3em auto;
    font-size: 130%;
    @media all and (min-width: 0px) and (max-width: 480px) {
      margin: 1em auto;
    }
    .searchbar-holder {
      width: 80%;
      margin: auto;
      position: relative;
      border-radius: 22px;
      overflow: hidden;
      @media all and (min-width: 0px) and (max-width: 480px) {
        width: 95%;
      }
      input {
        padding: 23px 30px;
        border-radius: 22px;
        font-weight: 500;
        padding-left: 50px;
        color: #000;
        font-weight: normal;
        @media all and (min-width: 0px) and (max-width: 480px) {
          padding: 23px 20px;
        }
      }
      .input-group-append {
        position: absolute;
        top: 0;
        right: 3px;
        z-index: 3;
        button {
          border: 0;
          background: none;
          padding: 12px 10px;
          outline: 0;
          color: #000;
          svg {

            font-size: 1.2em;
          }
          &:focus {
            box-shadow: none;
          }
          &:hover {
            color: #555;
          }
        }
      }
    }
    .filter-holder {
      display: block;
      display: none;
      width: 100%;
      text-align: center;
      @media all and (min-width: 0px) and (max-width: 480px) {
        text-align: center;
        width: 95%;
        margin: auto;
        margin-top: 1em;
        padding: 8px 0;
        border-radius:22px;
        border: 1px solid #ccc;
      }
      > div {
        display: inline-block;
        cursor: pointer;

        svg {
          margin-left: 1em;
          color: #449AFF;
        }
      }
      @media all and (min-width: 0px) and (max-width: 480px) {
        font-size: .8em;
      }
    }
  }

  .lists-container {
    position: relative;
    .title {
      display: block;
      text-align: center;
      font-weight: normal;
    }

    .card {
      margin: 3em 0;
      border-radius: 20px;
      overflow: hidden;
      &.delivered {
        background: #CF84FF;
      }
      &.finance {
        background: #FFB74B;
      }
      &.logistics{
        background: #FC7F3A;
      }
      &.sales{
        background: #409CF4;
      }
      .card-text {
        margin-bottom: .2em;
        color: white;
      }
      .modal-open-link {
        text-align: right;
        span {
          cursor: pointer;
        }
      }
    }

    .delivered {
      background: #CF84FF;
      border-color: #AB00EA;
    }

    .finance {
      background: #FFB74B;
      border-color: #E6DB00;
    }

    .logistics{
      background: #FC7F3A;
      border-color: #FC7F3A;
    }

    .sales{
      background: #409CF4;
      border-color: #0071DD;
    }

    .chart-details {
      ul {
        width: 80%;
        margin: auto;
        li {
          margin: 1em 0;
          font-size: 1.2em;
          color: #555;
          list-style-type: none;
          span:nth-of-type(1) {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border-width: 2px;
            border-style: solid;
            margin-right: 2em;
            display: inline-block;
          }
        }
      }
    }

    .details-modal {
      position: absolute;
      top: 0;
      left: -2%;
      width: 90%;
      min-height: 80vh;

      .details-modal-bg {
        min-height: 80vh;
        background: linear-gradient(150deg, white, #ddd, white);
        box-shadow: 0px 3px 20px #00000029;
        border-radius: 28px;
        opacity: 0.9;
        backdrop-filter: blur(5px);
      }

      .detailsModal-content {
        position: absolute;
        top: 0;
        left: 0;
        padding: 2%;
        padding-right: 5%;
        width: 100%;
        .order-info {
          overflow: auto;
          .title,
          .profit-buttons {
            display: inline-block;
            width: 50%;
            float: left;
          }
          .title{
            text-align: left;
            font-size: 150%;
            color: #000;
            strong {
              font-weight: normal;
            }
          }
          .profit-buttons {
            div {
              float: right;
              button {

                background: #16C300A5;
                border-radius: 21px;
                border: 0;
                color: white;
                font-size: 100%;
                padding: 7px 20px;

                &.lost-btn {
                  background: #FC4A4A;
                  margin-left: 1em;
                }
              }
            }

          }
        }
        .order-meta {
          color: #000;
          list-style: none;
          margin: 1em auto;
          li {
            display: inline-block;
            margin-right: 5em;
          }
        }

        .order-progress-bar {
          list-style: none;
          border-radius: 50px;
          position: relative;

          li {
            display: inline-block;
            height: 10px;
            width: 25%;
          }
          li:nth-of-type(1) {
            background: #409CF4;
            border-radius:10px 0 0 10px;
          }
          li:nth-of-type(2) {
            background: #FFB74B;
          }
          li:nth-of-type(3) {
            background: #FC7F3A;
          }
          li:nth-of-type(4) {
            background: #CF84FF;
            border-radius: 0 10px 10px 0;
          }

          p {
            position: absolute;
            top: -15px;
            right: 0;
            display: inline-block;
            color: #AB00EA;
          }
        }

        .order-more-details {
          width: 75%;
          background: #fff;
          padding: 2em;
          border-radius: 10px;
          .nav-tabs {
            border-bottom: 0;
            margin-bottom: 2em;
            .nav-link {
              border: 0;
              color: #333;
            }

            .nav-link.disabled {
              color: #6c757d;
            }

            .nav-item.show .nav-link,
            .nav-link.active {
              border: 0;
              color: #0075FF;
              font-weight: bold;
            }

            #controlled-tab-example-tab-comment {
              padding-left: 0;
            }
          }

          .tab-content {
            .tab-pane {
              .comments-list {
                list-style: none;
                padding-left: 3px;
                color: #222;
                li {
                  p {
                    span {
                      margin-right: 1em;
                    }
                  }
                }
              }
              textarea[name="add_comment"]{

              }
              .add_comment-btn {
                color: white;
                background: transparent linear-gradient(90deg,#04ACFA 0%,#1DCBF6 100%) 0% 0% no-repeat padding-box;
                padding: 5px 20px;
                border: 0;
                border-radius: 15px;
                outline: 0;
              }
            }
          }

        }
      }
    }
  }

`;


export default function SalesListing(props) {
  const openEdit = (item) => {
    props.history.push({
      pathname: '/admin/sales/customer/ordersedit',
      state: {item: item}
    });
  }

  const handleSearch = e => {
    props.searchedProducts(e.target.value)
  }

  function showListCard() {
    // const colorData = ["delivered", "finance", "logistics", "sales"];
    // const tempData = [];
    let ordersData =
    (props.filteredProducts !== undefined)
      ? props.filteredProducts
      : props.products;
    // ordersData.map((item, idx) => {

    //   //let random = Math.floor(Math.random() * colorData.length);

    //   let data = item;

    //  // data.status = colorData[random];

    //   //tempData.push(data)

    //   return true;

    // })

    return ordersData;

  }
  const openDetails = (item) => {
    axios.delete('http://3.92.201.85:8999/order/'+item)
    .then(  swal("Customer Deleted Successfully")

    )
    .catch(err => console.log(err))


  }



  return (
    <Style>
      <Container fluid>
        <div className="search-and-filter">
            <Row>
                <Col md={9}>
                  <div className="searchbar-holder">
                    <InputGroup>
                      <FormControl
                        placeholder="Search by Order number"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => handleSearch(e)}

                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary" >
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="filter-holder">
                    <div>
                      <span>Filter by </span>
                      <FontAwesomeIcon icon={faFilter} />
                    </div>
                  </div>
                </Col>

            </Row>
          </div>

          <div className="lists-container">
            <Row>
              <Col md={9}>
                <Row>
                   { 
                      showListCard().map(item => (
                        <Col key={item.id} md={3}>
                          <Card className="sales">
                            <Card.Body>
                              <Card.Text>
                                { item.tendorname || item.subject }<br/>
                              </Card.Text>
                              <Card.Text>
                              Tendor Id: {item.tendorid}<br/>
                              </Card.Text>
                              <Card.Text>
                              Validity Period: {item.validityperoid}
                              </Card.Text>
                              <Card.Text className="modal-open-link">
                                <span>
                                  <FontAwesomeIcon icon={faEye} onClick={() => props.history.push('/admin/finance/trackings')}  style={{marginRight: '5%'}} />
                                  {/* <FontAwesomeIcon icon={faEdit} onClick={()=>{openEdit(item)}} style={{marginRight: '5%'}} />
                                  <FontAwesomeIcon icon={faTrash}  onClick={()=>openDetails(item._id)}/> */}
                                 </span>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))
                    }
                </Row>
              </Col>
              <Col md={3}>
                <div className="chart-container">
                  <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                      <SimplePieChart />
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="chart-details">
                  <ul>
                    <li>
                      <span className="delivered"></span>
                      <span>Delivered</span>
                    </li>
                    <li>
                      <span className="finance"></span>
                      <span>Finance</span>
                    </li>
                    <li>
                      <span className="logistics"></span>
                      <span>Logistics</span>
                    </li>
                    <li>
                      <span className="sales"></span>
                      <span>Sales</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            {
              (props.isViewModal) ?
              <div className="details-modal">

              <div className="details-modal-bg"></div>

              <div className="detailsModal-content">
              <a href="#back" onClick={props.openDetails}>&larr; back</a>
              <div className="order-info">
              <div className="title">
              <strong>Order No: 10010001</strong>
              </div>
              <div className="profit-buttons">
              <div>
              <button className="won-btn">Won</button>
              <button className="lost-btn">Lost</button>
              </div>
              </div>
              </div>

              <ul className="order-meta">
              <li className="price">
              $ 400
              </li>
              <li className="vendor-name">
              Anatomy
              </li>
              <li className="vendor-url">
              super.com
              </li>
              </ul>

              <ul className="order-progress-bar">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <p>2 Days left</p>
              </ul>

              <div className="order-more-details clearfix">
              <Tabs id="controlled-tab-example">
              {/*
                <Tab eventKey="activity" title="Activity">
                <p>Activity</p>
                </Tab>
                */}
                <Tab eventKey="comment" title="Add Comment">
                <ul className="comments-list">
                <li>
                @Salesman - This order sale report to the respected team soon, I am  dummy data
                <p>
                <span><a href="#edit">Edit</a></span>
                <span><a href="#archive">Archive</a></span>
                </p>
                </li>
                <li>
                @Salesman - This order sale report to the respected team soon, I am  dummy data
                <p>
                <span><a href="#edit">Edit</a></span>
                <span><a href="#archive">Archive</a></span>
                </p>
                </li>
                </ul>
                <textarea className="form-control" name="add_comment" rows="4" placeholder="@usernmae Add your comment here">

                </textarea>
                <button className="add_comment-btn float-right my-2" >Comment</button>
                </Tab>
                <Tab eventKey="reminder" title="Set Reminder">
                <p>Set reminder under construction</p>
                </Tab>
                <Tab eventKey="email" title="Email">
                <p>Email section under construction</p>
                </Tab>

                <Tab eventKey="contact" title="Upload files">
                <p>Files section under construction</p>
                </Tab>
                </Tabs>
                </div>

                </div>
                </div>
                : ""
            }

          </div>
      </Container>
    </Style>
  );
}
