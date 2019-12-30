import React from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faCalendarAlt, faFilter } from "@fortawesome/free-solid-svg-icons";

const Style = styled.div`
  min-height: 85vh;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    right: -10vw;
    bottom: -25vh;
    background: transparent linear-gradient(128deg, #007bff 0%, #009DFF 100%) 0% 0% no-repeat padding-box;
    opacity: 0.1;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -20vh;
    z-index: -1;
    right: 20vw;
    background: transparent linear-gradient(128deg, #007bff 0%, #009DFF 100%) 0% 0% no-repeat padding-box;
    opacity: 0.1;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
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

  .filters {

    min-width: 550px;
    width: 30%;
    background: rgba(255, 255, 255, .5);
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 21px;
    height: 60px;
    display: flex;
    align-items: center;
    .input-group {
      align-items: center;
      span {
        padding: 0 1em;
        svg {
          font-size: 1.3em;
          path {

            fill: #5F5F5F;
          }
        }
        &:last-child {
          padding-left: 0;
        }
      }

      input {
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        border-radius: 10px;
      }
      input[type="date"]::-webkit-inner-spin-button{
          display: none;
      }

    }
  }
`;

// temp ---
function handleShow() {
  return true;
}

function handleClose() {
  return false;
}

const show = false
// temp ---

const OrderList = () => {
  // temp ---
  var demoArr = [...Array(12).keys()];

  const setRedirect = () => {
    alert("gggggg");
    console.log("gggg");
    this.props.history.push(``)
    }

  // temp ---
  return (
    <Style>
      <Table hover>
        <thead>
          <tr>
            <th>Tender ID</th>
            <th>Customer Name</th>
            <th>Company Name</th>
            <th>No. of times</th>
            <th>Quantity</th>
            <th>Suborder</th>
            <th>Order value</th>
            <th>Shipment mode</th>
            <th>Current Locations</th>
            <th>Dispatch Date</th>
            <th>Delivery Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {demoArr.map((item, idx) => (
            <tr key={idx}>
              <td>
                <Link to="/admin/logistics/ordersedit">#0700{idx}</Link>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
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

      <div className="filters">
        <InputGroup>
          <span>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </span>
          <FormControl type="date" name="from" />
          <span> to </span>
          <FormControl type="date" name="to" />
          <span>
            <FontAwesomeIcon icon={faFilter} />
          </span>
          <span onClick={handleShow}>Filter

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

          </span>
        </InputGroup>
      </div>
    </Style>
  );
}

export default OrderList;
