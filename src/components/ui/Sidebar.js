import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faCoins, faTachometerAlt, faKeyboard, faCubes, faUsers, faUserTag, faCube, faShippingFast, faPlus, faTruck, faListUl } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";

//const isMobile = window.innerWidth <= 480;

const Style = styled.div`
  background: blue;
  display: inline-block;
  width: 18%;
  min-width: 270px;
  float: left;
  border-radius: 8px;
  background: transparent linear-gradient(23deg, #1053EA 0%, #00A7FF 100%) 0% 0% no-repeat padding-box;
  @media all and (min-width: 0px) and (max-width: 480px) {
    width: 100%;
  }
  .nav {
    padding: 4em 0;
    padding-left: .8em;
    > li {
      > a {
        padding: .8em 1.3em;
        margin-top: 2em;
        border-radius: 25px 0 0 25px;
        color: white;
        font-size: 130%;
        &.active {
          background: #F2F2F2;
          color: black;
        }

        svg {
          margin-right: .5em;
        }
      }

      > ul {
        display: none;
        margin: 5px 5px 0 25px;
        a {
          padding: .8em 1.3em;
          margin-bottom: 0em;
          color: white;
          font-size: 130%;
          color: #555;
          background: #3b87ff;
          &.active {
            background: #2196f3a3;
            color: black;
            border-left: 2px solid #F2F2F2;
          }

          svg {
            margin-right: .5em;
          }
        }
      }

      &.active {
        border-radius: 20px 0 0 20px;
        > a {

        }
        > ul {
          display: block;
          border-radius: 10px;
          overflow: hidden;
          > a {
            color: white;
            border-radius: 0;
            font-size: 110%;
          }
        }
      }

    }

  }

  @media all and (min-width: 0px) and (max-width: 480px) {

  }
`;

function Sidebar(props) {

  const getNavLinkClass = (path) => {
    return (props.location.pathname.match(path)) ? 'active' : '';
  }

  // sales manager

  function smLinks(option) {

    return (

      <>
        {(option === 'links') ? (
          <>

            <NavLink className="nav-link" to="/admin/sales/customer/orders" ><FontAwesomeIcon icon={faListUl} /> Customer Orders </NavLink>
            <NavLink className="nav-link" to="/admin/sales/customer/addorders" ><FontAwesomeIcon icon={faPlus} /> Add Customer Order </NavLink>
            <NavLink className="nav-link" to="/admin/sales/vendor/orders" ><FontAwesomeIcon icon={faListUl} /> Vendor Orders </NavLink>
            <NavLink className="nav-link" to="/admin/sales/customer/addorders" ><FontAwesomeIcon icon={faPlus} /> Add Vendor Order </NavLink>
            <NavLink className="nav-link" to="/admin/sales/products" ><FontAwesomeIcon icon={faCube} /> Products </NavLink>
            <NavLink className="nav-link" to="/admin/sales/add-product" ><FontAwesomeIcon icon={faPlus} /> Add Product </NavLink>
            <NavLink className="nav-link" to="/admin/sales/vendors" ><FontAwesomeIcon icon={faUserTag} /> Vendors </NavLink>
            <NavLink className="nav-link" to="/admin/sales/add-vendor" ><FontAwesomeIcon icon={faPlus} /> Add Vendor </NavLink>
            <NavLink className="nav-link" to="/admin/sales/customers" ><FontAwesomeIcon icon={faUsers} /> Customers </NavLink>
            <NavLink className="nav-link" to="/admin/sales/add-customer" ><FontAwesomeIcon icon={faPlus} /> Add Customer </NavLink>
            <NavLink className="nav-link" to="/admin/sales/rfqtemplate" ><FontAwesomeIcon icon={faPlus} /> RFQ </NavLink>
            <NavLink className="nav-link" to="/admin/sales/margincalculation" ><FontAwesomeIcon icon={faPlus} /> Margin Calculations </NavLink>

          </>
        ) : (
          <>
            {/* <li>
              <NavLink className="nav-link" to="/admin/sales/all" ><FontAwesomeIcon icon={faListUl} /> Sales </NavLink>
            </li> */}
            <li>
              <NavLink className="nav-link" to="/admin/sales/customer/orders" ><FontAwesomeIcon icon={faListUl} /> Customer Orders </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/customer/addorders" ><FontAwesomeIcon icon={faPlus} /> Add Customer Order </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/vendor/orders" ><FontAwesomeIcon icon={faListUl} /> Vendor Orders </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/vendor/addorders" ><FontAwesomeIcon icon={faPlus} /> Add Vendor Order </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/products" ><FontAwesomeIcon icon={faCube} /> Products </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/add-product" ><FontAwesomeIcon icon={faPlus} /> Add Product </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/vendors" ><FontAwesomeIcon icon={faUserTag} /> Vendors </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/add-vendor" ><FontAwesomeIcon icon={faPlus} /> Add Vendor </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/customers" ><FontAwesomeIcon icon={faUsers} /> Customers </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/add-customer" ><FontAwesomeIcon icon={faPlus} /> Add Customer </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/rfqtemplate" ><FontAwesomeIcon icon={faPlus} /> RFQ </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/sales/margincalculation" ><FontAwesomeIcon icon={faPlus} /> Margin Calculations </NavLink>
            </li>
          </>
        )}
      </>
    );
  }

  // data entry links

  function dmLinks(option) {
    return (
      <>
        {(option === 'links') ? (
          <>
            {/* <NavLink className="nav-link" to="/admin/data-entry/all" ><FontAwesomeIcon icon={faListUl} /> View All </NavLink> */}
            <NavLink className="nav-link" to="/admin/data-entry/products" ><FontAwesomeIcon icon={faCube} /> Products </NavLink>
            <NavLink className="nav-link" to="/admin/data-entry/add-product" ><FontAwesomeIcon icon={faPlus} /> Add Product </NavLink>
            <NavLink className="nav-link" to="/admin/data-entry/vendors" ><FontAwesomeIcon icon={faUserTag} /> Vendors </NavLink>
            <NavLink className="nav-link" to="/admin/data-entry/add-vendor" ><FontAwesomeIcon icon={faPlus} /> Add Vendor </NavLink>
            <NavLink className="nav-link" to="/admin/data-entry/customers" ><FontAwesomeIcon icon={faUsers} /> Customers </NavLink>
            <NavLink className="nav-link" to="/admin/data-entry/add-customer" ><FontAwesomeIcon icon={faPlus} /> Add Customer </NavLink>
          </>
        ) : (
          <>
            {/* <li>
              <NavLink className="nav-link" to="/admin/data-entry/all" ><FontAwesomeIcon icon={faListUl} /> Data Ent </NavLink>
            </li> */}
            <li>
              <NavLink className="nav-link" to="/admin/data-entry/products" ><FontAwesomeIcon icon={faCube} /> Products </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/data-entry/add-product" ><FontAwesomeIcon icon={faPlus} /> Add Product </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/data-entry/vendors" ><FontAwesomeIcon icon={faUserTag} /> Vendors </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/data-entry/add-vendor" ><FontAwesomeIcon icon={faPlus} /> Add Vendor </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/data-entry/customers" ><FontAwesomeIcon icon={faUsers} /> Customers </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/admin/data-entry/add-customer" ><FontAwesomeIcon icon={faPlus} /> Add Customer </NavLink>
            </li>
          </>
        )}
      </>
    );
  }

  // logistics links

  function lmLinks(option) {
    return (
      <>
        {
          (option === 'links') ? (
            <>
              {/* <NavLink className="nav-link" to="/admin/logistics/orders" ><FontAwesomeIcon icon={faListUl} /> Orders </NavLink> */}
              {/* <NavLink className="nav-link" to="/admin/logistics/shipment" ><FontAwesomeIcon icon={faShippingFast} /> Shipment </NavLink> */}
              {/* <NavLink className="nav-link" to="/admin/logistics/stages" ><FontAwesomeIcon icon={faCubes} /> Stages </NavLink> */}
              {/* <NavLink className="nav-link" to="/admin/logistics/request" ><FontAwesomeIcon icon={faCubes} /> Request </NavLink> */}
            </>

          ) :
          (
            <>
              <li>
                <NavLink className="nav-link" to="/admin/logistics/orders" ><FontAwesomeIcon icon={faListUl} /> Orders </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/admin/logistics/shipment" ><FontAwesomeIcon icon={faShippingFast} /> Shipment </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/admin/logistics/stages" ><FontAwesomeIcon icon={faCubes} /> Stages </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/admin/logistics/request" ><FontAwesomeIcon icon={faCubes} /> Request </NavLink>
              </li>
            </>
          )
        }
      </>
    );
  }

  // finance links

  function fmLinks(option) {
    return (
      <>
        {(option === 'links') ? (
          <>
          {/* <NavLink className="nav-link" to="/admin/finance/orders" ><FontAwesomeIcon icon={faListUl} /> Orders </NavLink> */}
          {/* <NavLink className="nav-link" to="/admin/finance/trackings" ><FontAwesomeIcon icon={faUserTag} /> Trackings </NavLink> */}
          </>
        ) : (
          <>
        <li>
          <NavLink className="nav-link" to="/admin/finance/orders" ><FontAwesomeIcon icon={faListUl} /> Orders </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/admin/finance/email" ><FontAwesomeIcon icon={faListUl} /> Email </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/admin/finance/templateattached" ><FontAwesomeIcon icon={faListUl} /> Template Attached </NavLink>
        </li>
        {/* <li>
          <NavLink className="nav-link" to="/admin/finance/trackings" ><FontAwesomeIcon icon={faUserTag} /> Trackings </NavLink>
        </li> */}
          </>
        )}
      </>
    );
  }

  // super admin links

  function saLinks() {
    return (
      <>

        <li className={getNavLinkClass('dashboard')}>
          <NavLink className="nav-link" to="/admin/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</NavLink>
        </li>

        <li className={getNavLinkClass('sales')}>
          <NavLink className="nav-link" to="/admin/sales" ><FontAwesomeIcon icon={faFileInvoiceDollar} /> Sales</NavLink>
          <ul>
            {smLinks('links')}
          </ul>
        </li>

        <li className={getNavLinkClass('finance')}>
          <NavLink className="nav-link" to="/admin/finance" ><FontAwesomeIcon icon={faCoins} /> Finance </NavLink>
          {fmLinks('links')}
        </li>

        <li className={getNavLinkClass('data-entry')}>
          <NavLink className="nav-link" to="/admin/data-entry" ><FontAwesomeIcon icon={faKeyboard} /> Data Entry </NavLink>
          <ul>
            {dmLinks('links')}
          </ul>
        </li>

        <li className={getNavLinkClass('logistics')}>
          <NavLink className="nav-link" to="/admin/logistics" ><FontAwesomeIcon icon={faTruck} /> Logistics </NavLink>
          <ul>
            {lmLinks('links')}
          </ul>
        </li>
        {/* <li className={getNavLinkClass('RFQ')}>
          <NavLink className="nav-link" to="/admin/logistics" ><FontAwesomeIcon icon={faTruck} /> RFQ </NavLink>
          <ul>
            {lmLinks('links')}
          </ul>
        </li>
        <li className={getNavLinkClass('Margin Calculations')}>
          <NavLink className="nav-link" to="/admin/logistics" ><FontAwesomeIcon icon={faTruck} /> Margin Calculations </NavLink>
          <ul>
            {lmLinks('links')}
          </ul>
        </li> */}

      </>
    );
  }

  return (
    <Style>
        <Nav className="flex-column">
          {eval((props.auth.role.code).toLowerCase() + "Links()")}
        </Nav>
    </Style>
  );
}

export default Sidebar;
