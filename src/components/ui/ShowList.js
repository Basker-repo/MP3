import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEye, faPenNib, faTrash, faSearch, faBorderAll, faListUl, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const Style = styled.div`
  padding: 5em 5% 0 5%;
  @media all and (min-width: 0px) and (max-width: 480px) {
    padding: 0;
  }


  table {
    border-collapse: separate !important;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden !important;

    thead {
      background: #EBEBEB 0% 0% no-repeat padding-box;

      th {
        border: 0;
        color: #000;
        font-weight: 400;
        font-size: 90%;
        text-align: center;

        &:first-child {
          border-radius: 10px 0 0 10px;
        }

        &:last-child {
          border-radius: 0 10px 10px 0;
        }
      }
    }

    tbody {
      tr {
        background: rgba(255, 255, 255, .5);
        &:hover {
          background: rgba(255, 255, 255, 0.3);
          .options {
            opacity: 1;
          }
        }
        td {
          border: 0;
          text-align: center;
          a {
            color: #229bf4;
          }
        }
        .options {
          opacity: 0;
          .dropdown-toggle {
            &:after,
            &:before {
              display: none;
            }
          }
          .dropdown-menu {
            min-width: unset;
          }
        }
      }
    }

  }

  .searchbar-holder {

    .input-group-holder {
      margin: auto;
      position: relative;
      border-radius: 22px;
      overflow: hidden;
      @media all and (min-width: 0px) and (max-width: 480px) {
        width: 95%;
      }
      .input-group {

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
            box-shadow: 0 0 0 0.2rem transparent! important;
            background: none;
            outline: 0;
            border: 0;
          }
          &:hover {
            color: #555;
          }
        }
      }

    }

    .view-trigger {
      span {
        margin: 0 1em;
        font-size: 1.4em;
        cursor: pointer;

        &:hover,
        &.active {
          color: #449AFF;
        }
      }
    }

  }

  .sorting-holder {
    margin: 3em 0 0 0;
    marign: 0;
    background: #449AFF;
    border-radius: 16px;

    .dropdown-button-custom {
      button {
        color: white;
        background: transparent;
        border: 0;
        box-shadow: none;
        font-size: 125%;
        font-weight: 500;
        padding: .5em 0;
        /* .btn-primary:not(:disabled):not(.disabled).active:focus,
        .btn-primary:not(:disabled):not(.disabled):active:focus,
        .show>.btn-primary.dropdown-toggle:focus */
        &:focus,
        &:active {
          box-shadow: none! important;
          background: transparent
        }

        :after {
          border-top: .4em solid;
          border-right: .4em solid transparent;
          border-bottom: 0;
          border-left: .4em solid transparent;
          margin-left: .5em;
        }

      }
    }
      .dropdown-menu {
        padding: 20px;
        box-shadow: 0px 6px 25px #00000029;
        border: 1px solid #707070;
        border-radius: 27px;
        .dropdown-item {
          padding-left: 0;
          padding-right: 0;
          color: #6F6E6E;
          span {
            position: relative;
            padding-left: 2.6em;

            :before,
            :after {
              content: '';
              display: inline-block;
              position: absolute;
              top: 0;
              left: 0;
              width: 17px;
              height: 16px;
              border-radius: 50%;
              border: 2px solid black;
            }
          }
          &:hover,
          &.active {
            color: #333;
            background: transparent;
            span {
              :after {
                width: 7px;
                height: 7px;
                background: #000;
                left: .3em;
                top: 50%;
                transform: translateY(-50%);
                border: 0;
              }
            }
          }
          &:focus {
            background: none;
          }
        }
      }
  }

    .dropdown-button-custom.dropdown {
      position: relative;
    }

  .lists {
    margin-top: 3em;
    position: relative;
    @media all and (min-width: 0px) and (max-width: 480px) {
      position: unset;
    }
    .card {
      margin-bottom: 2em;
      box-shadow: 0px 3px 10px #00000021;
      border-radius: 17px;
      background: #f5f5f5;
      position: relative;
      overflow: hidden;

      .card-text {
        margin-bottom: .5em;
        font-size: 90%;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .onhover-icons {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 17px;
        background: rgba(0,0,0,.6);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        span {
          margin-left: 5%;
          margin-right: 5%;
          width: 40px;
          height: 40px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;

          .bs-tooltip-auto[x-placement^=bottom] .arrow::before, .bs-tooltip-bottom .arrow::before {
            border-bottom-color: rgba(0,0,0,.3);
          }
          .tooltip-inner {
            background-color: rgba(0,0,0,.3);
          }

          svg {
            font-size: 1.4em;
            color: #3088E5
          }

          &:last-child {
            svg {
              color: #FF2700B2;
            }
          }
        }
      }
      &:hover {
        color: #999;
        .onhover-icons {
          transform: scale(1);
          transition: transform .2s;
        }
      }
    }
  }

  .filter-sidebar {
    > div {
      padding: 2em 0;
      padding-top: 10em;
      .title {
        text-align: center;
        font-size: 1.1em;
        margin-bottom: 1em;
      }
      ul {
        margin: 0;
        border-radius: 20px;
        padding: 0;
        list-style: none;
        padding: 2em .3em;
        background: #fff;
        li {
          display: block;
          padding-left: 2em;

          p {
            cursor: pointer;
            display: inline-block;

            span {
              position: relative;
              padding-left: 2em;
              :before,
              :after {
                content: '';
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 2px solid #989898;
              }
            }
          }

          &.active,
          &:hover {
            color: #449AFF;
            span{
              :before,
              :after {
                content: '';
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 2px solid #ADD6FF;
              }

              :after {
                width: 10px;
                height: 10px;
                background: #449AFF;
                left: .2em;
                top: 50%;
                transform: translateY(-50%);
                border: 0;
              }
            }
          }

        }
      }
    }
  }

`;

const ActionModal = styled.div`
  position: absolute;
  background: rgba(0,0,0,.58);
  border-radius: 66px;
  width: 100%;
  min-height: 60vh;
  display: flex;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;
  @media all and (min-width: 0px) and (max-width: 480px) {
    height: 100%;
    position: fixed;
    background: transparent;
    top: 0;
    border-radius: 0;
    padding: 10px;
  }
  > div {
    position: relative;
    width: 467px;
    background: #fff;
    border-radius: 35px;
    height: 264px;
    padding: 30px;

    .modal-closeicon {
      display: block;
      font-size: 20px;
      position: absolute;
      line-height: 1px;
      top: -5px;
      right: -5px;
      width: 31px;
      height: 30px;
      background: #000;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: normal;
      border-radius: 50%;
      cursor: pointer;
      padding-bottom: 4px;
    }

    .actionModal-content {
      height: 70%;

        > div  {
          width: 100%;
          height: 100%;
          display: inline-flex;
          float: left;
          align-items: center;
          justify-content: center;

          &.actionModal-icon {
            width: 25%;
            i {
              width: 53px;
              height: 53px;
              background: #50B7F8;
              color: white;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
            }
          }
          &.actionModal-text {
            width: 75%;
            color: black;
            font-size: 150%;
            justify-content: flex-start;
          }
        }
    }

    .actionModal-actions {
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      button {
        background: transparent linear-gradient(90deg, #0682FE 0%, #6CC6FF 100%) 0% 0% no-repeat padding-box;
        border-radius: 18px;
        padding: 10px 20px;
        min-width: 145px;
        min-height: 49px;
        color: #fff;
        font-size: 140%;
        outline: 0;
        border: 0;

        &:nth-of-type(2) {
          display: none;
        }
      }

    }
  }

`;

const ShowList = (props) => {

  let products = (props.filteredProducts !== undefined)? props.filteredProducts : props.products;

  function getListLayout () {

    if(props.listView === "grid") {

      return (
        <Row className="lists">
          {
            products.map((item, idx) => (
              <Col md={3} key={idx}>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      Product: { item.name }
                    </Card.Text>
                    <Card.Text>
                      Brand: { item.brand.name }
                    </Card.Text>
                    <Card.Text>
                      Vendor: {item.vendor.name}
                    </Card.Text>

                    <div className="onhover-icons">

                      <OverlayTrigger
                        key={'bottom1'}
                        placement={'bottom'}
                        overlay={
                          <Tooltip id={`tooltip-${'bottom'}`}>
                            View
                          </Tooltip>
                        }
                      >
                        <span>
                        <FontAwesomeIcon icon={faEye} />
                        </span>
                      </OverlayTrigger>

                      <OverlayTrigger
                        key={'bottom2'}
                        placement={'bottom'}
                        overlay={
                          <Tooltip id={`tooltip-${'bottom'}`}>
                            Edit
                          </Tooltip>
                        }
                      >
                        <span>
                          <FontAwesomeIcon icon={faPenNib} />
                        </span>
                      </OverlayTrigger>

                      <OverlayTrigger
                        key={'bottom3'}
                        placement={'bottom'}
                        overlay={
                          <Tooltip id={`tooltip-${'bottom'}`}>
                            Delete
                          </Tooltip>
                        }
                      >
                        <span>
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      </OverlayTrigger>

                    </div>

                  </Card.Body>
                </Card>
              </Col>
            ))
          }


          <ActionModal>
            <div>

              <i className="modal-closeicon">x</i>

              <div className="actionModal-content">
                <div className="actionModal-icon">
                  <i>
                    <FontAwesomeIcon icon={faCheckDouble}/>
                  </i>
                </div>
                <div className="actionModal-text">
                  <p>Vendor added Successfully</p>
                </div>
              </div>

              <div className="actionModal-actions">
                <button className="okay-button">Ok</button>
                <button className="cancel-button">Cancel</button>
              </div>

            </div>
          </ActionModal>

        </Row>
      )

    }

    else {
        return (
          <Table hover responsive className="mt-5">
          <thead>
          <tr>
          <th>Tender ID</th>
          <th>Customer Name</th>
          <th>Company Name</th>
          <th>No.of times</th>
          <th>Quantity</th>
          <th>Suborder</th>
          <th>Order </th>
          <th>Delivery</th>
          <th></th>
          </tr>
          </thead>
          <tbody>
          {products.map((item, idx) => (
            <tr key={idx}>
            <td>
            <Link to="/order/07000">#0700{idx}</Link>
            </td>
            <td>{item.name}</td>
            <td>{item.vendor.name}</td>
            <td>@temp</td>
            <td>@temp</td>
            <td>@temp</td>
            <td>@temp</td>
            <td>@temp</td>
            <td className="options">
            <Dropdown>
            <Dropdown.Toggle as="span" id="dropdown-basic">
            <FontAwesomeIcon icon={faEllipsisH} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item as="span">
            Assign to
            </Dropdown.Item>
            <Dropdown.Item as="span">Edit</Dropdown.Item>
            <Dropdown.Item as="span">Stages</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </td>
            </tr>
          ))}
          </tbody>
          </Table>
        )
    }

  }

  return (
    <Style>
      <Container fluid>

        <Row>
          <Col md={10}>
            <Row className="searchbar-holder">
              <Col md={8}>
                <div className="input-group-holder">
                  <InputGroup>
                    <FormControl
                      placeholder="Search by Order number"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>
                  <InputGroup.Append>
                    <Button variant="outline-secondary" >
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </InputGroup.Append>
                </div>
              </Col>
              <Col md={4} className="d-flex align-items-center justify-content-end view-trigger">
                <span className={ (props.listView === 'grid')? 'active' : null } onClick={() => props.onChangeListView('grid')}>
                  <FontAwesomeIcon title="Grid view" icon={faBorderAll} />
                </span>
                <span className={ (props.listView === 'table')? 'active' : null } onClick={() => props.onChangeListView('table')}>
                  <FontAwesomeIcon title="List View" icon={faListUl} />
                </span>
              </Col>
            </Row>

            <Row className="sorting-holder clearfix">
              <Col className="d-flex justify-content-center">
                <DropdownButton id="sortby"  title="Sort by" className="dropdown-button-custom">
                  <Dropdown.Item className="active" href="#/action-1"><span>Past Order</span></Dropdown.Item>
                  <Dropdown.Item href="#/action-2"><span>Priority</span></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><span>Reviews</span></Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col className="d-flex justify-content-center">
                <DropdownButton id="product-type" title="Product type" className="dropdown-button-custom">
                  <Dropdown.Item href="#/action-1"><span>Past Order</span></Dropdown.Item>
                  <Dropdown.Item className="active" href="#/action-2"><span>Priority</span></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><span>Reviews</span></Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col className="d-flex justify-content-center">
                <DropdownButton id="shooting-accessories" title="Shooting Accessories" className="dropdown-button-custom">
                  <Dropdown.Item href="#/action-1"><span>Past Order</span></Dropdown.Item>
                  <Dropdown.Item href="#/action-2"><span>Priority</span></Dropdown.Item>
                  <Dropdown.Item className="active" href="#/action-3"><span>Reviews</span></Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>

            {getListLayout()}

          </Col>
          <Col md={2}>
            <Row>
              <Col className="filter-sidebar">
                <div>
                  <h3 className="title">Brands</h3>
                  <ul>
                    {
                      props.brands.map((item,idx) => (
                        <li key={idx} className={(item.active) ? 'active' : null} onClick={() => props.filterByBrand(item)}>
                          <p>
                            <span> {item.name.split(' ')[0]}</span>
                          </p>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}

ShowList.propTypes = {
  listView: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      brand: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string
      }),
      vendor:
        PropTypes.shape({
          name: PropTypes.string,
        })
      ,
      created_at: PropTypes.instanceOf(Date).isRequired,
      updated_at: PropTypes.instanceOf(Date).isRequired,
    }),
  ),
  onChangeListView: PropTypes.func,
}

export default ShowList;
