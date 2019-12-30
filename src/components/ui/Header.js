import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faQuestion, faSignOutAlt, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import logo from "../../asset/logo.png";
import {
  faEllipsisH,
  faEye,
  faPenNib,
  faTrash,
  faSearch,
  faBorderAll,
  faListUl
} from "@fortawesome/free-solid-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const isMobile = window.innerWidth <= 480;

const HeaderSection = styled.header`
  -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
  position: relative;


.search-container{
  width: 530px;
  display: block;
  margin-bootom: -5% !important;
}

input#navsearch-bar{
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &::-moz-placeholder {
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &:-ms-placeholder {
     transition: opacity 0.45s ease; 
  	 opacity: 0;
     }    
   }
 }

.search-icon{
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -15px;
}




  @media all and (min-width: 0px) and (max-width: 480px) {
    padding: 0;
  }
  nav {

    background: white !important;

    .site-brand {
      font-size: 1.5rem;
      font-weight: 600;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    input[type="text"] {
      border-radius: 50px;
      width: 120%;
      min-height: 45px;
      padding-top: 8px;
      -webkit-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.2);
      box-shadow: 0 10px 8px -8px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 2px 2px 3px #888, -2px 2px 3px #888;
      -webkit-box-shadow: 2px 2px 3px #888, -2px 2px 3px #888;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),
        -2px 5px 5px rgba(0, 0, 0, 0.2);
      border-color: transparent;
      @media all and (min-width: 0px) and (max-width: 480px) {
        width: 90%;
        margin-top: 1em;
        display: inline;
      }

      &:focus {
        width: 150%;
        border-color: #007bff;
        padding-left: 20px;
        box-shadow: none;
        transition: border-color, width 0.5s, 0.2s ease-in-out;
        @media all and (min-width: 0px) and (max-width: 480px) {
          width: 100%;
        }
        &::placeholder {
          color: #999;
        }
      }

      &::placeholder {
        color: #555;
        padding-left: 30px;
      }
    }

    .top-search-results {
      position: absolute;
      top: 100%;
      min-width: 300px;
      background: white;
      padding: 10px;
      z-index: 1;
      border: 1px solid #3996fb;
      border-radius: 10px;

      .top-search-not-found {
        color: grey;
        padding-left: 20px;
        font-size: 120%
      }

      h4 {
        padding-left: 1em;
        font-size: 15px;
        text-transform: uppercase;
      }

      ul {
        list-style: none;
        li {
          a {
            padding: .2em 0 .2em 2em;
            display: block;
            color: #333;
            font-weight: 300;
            margin: .2em auto;

            &:hover {
              color: #007bff;
              background: #eeeeeebd;
            }

          }
        }
      }
      > a {
        display: block;
        text-align: center;
      }
    }

    @media all and (min-width: 0px) and (max-width: 480px) {
      .navbar-collapse   {
        border-top: 1px solid #eee;
        form {
          text-align: center;
        }
        .ml-auto {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
          font-size: 100%;
          margin-top: 1em;

          .nav-itm {
            margin-right: 0;
            font-size: 100%;
            justify-content: center;
            /* background: linear-gradient(transparent, #eee) */
          }

          .member-info {
            font-size: 80%;
            line-height: 1;

            img {
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }

    .nav-itm {
      display: flex;
      align-items: center;
      margin-right: 1em;

      svg {
        font-size: 1.8em;
      }

      sub {
        font-size: 100%;
        bottom: -0.7em;
        span {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      > a {
        background: #229BF4;
        padding-top: .2rem;
        padding-bottom: .2rem;
        color: white! important;
        border-radius: 50px;
      }

      .dropdown-menu.active {
        background: #229BF4;
      }

      .dropdown-menu.show {
        min-width: unset;
        background: #229BF4;
        padding: 0;

        a {
          color: white;
          :hover {
            background: #007bff;
          }
        }

        ::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          border-bottom: 10px solid #3e9bf4;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          position: absolute;
          bottom: 100%;
          right: 50%;
          transform: translateX(50%);
        }

        :hover::before {
          border-bottom-color: #007bff;
        }

      }
    }

    .member-info {
      font-weight: 500;
      font-size: 20px;
      color: #000 !important;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-left: 10px;
      }
    }

    .signin-link.nav-item {
      position: relative;
    }

  }

  .notifications-bar {
    position: absolute;
    right: 5%;
    top: 100px;
    background: transparent;
    min-width: 400px;
    height: 100vh;
    z-index: 2;
    bottom: 0;

    .notification-bg {
      /* min-height: 100%; */
      height: 600px;
      background: linear-gradient(150deg, white, #ddd, white);
      box-shadow: 0px 3px 20px #00000029;
      border-radius: 28px;
      opacity: 0.9;
      backdrop-filter: blur(5px);
    }

    .notification-content {
      position: absolute;
      top: 0;
      padding: 20px;
      width: 100%;
      overflow: hidden;

      header {
        margin: 2em auto;
        text-align: center;
      }

      .notifications {
        margin-top: 2em;
        list-style: none;
        height: 400px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: .5em;
        }

        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgb(66, 163, 254);
          outline: 1px solid slategrey;
          min-height: 10px;
          max-height: 10px;
          height: 10px;
        }

        .notification {
          margin-top: 1em;
          padding: 10px;
          color: #555;
          font-size: medium;
          position: relative;
          background: #fff;
          border-radius: 10px;
          margin-right: 10px;

          div {
            padding-right: 20px;
            .notification-user-info {
              margin-bottom: 0;
            }
            .notification-user-date {
              text-align: right;
              margin-bottom: 0;
              color: #999;
            }
            .notification-user-message {

            }
          }

          svg {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
            cursor: pointer;
            color: #777;
            display: none;
          }

          &:hover {
            background: #409cf4;
            color: #fff;

            div {
              .notification-user-date {
                color: #ddd;
              }
            }

            svg {
              color: white;
            }
          }

        }
      }

      > a {
        display: block;
        text-align: center
      }

    }
  }

`;

function Header(props) {

  let name = 'Not Logged In!';

  if(props.auth !== null) {
     name = props.auth.role.name.charAt(0).toUpperCase() + props.auth.role.name.slice(1);
  }

  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [vendors, setVendors] = useState([])
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const path = props.location.pathname.match('sales') ? "sales" : "data-entry";

  function topSearchForProducts(searchTerm) {
    if(searchTerm) {
      setProducts(props.getProducts(searchTerm));
    }
    if(products.length) {
      let newProducts = products;

      if(newProducts.length > 3)
        newProducts = newProducts.slice(0, 3);

      return <>
        <h4>Products</h4>
        <ul>
          {
            newProducts.map(product => <li key={product.id}><a href={`/admin/${path}/edit-product/${product._id}`}>{product.product_name}</a></li>)
          }
        </ul>
        {
          (products.length > 3)? <a href="#viewmore">View More..</a> : ''
        }
        <hr/>
      </>;
    }
    else
      return false;
  }

  function topSearchForCustomers(searchTerm) {

    if(searchTerm) {
      setCustomers(props.getCustomers(searchTerm));
    }

    if(customers.length) {
      let newCustomers = customers;

      if(customers.length > 3)
        newCustomers = customers.slice(0, 3);

      return <>
        <h4>Customers</h4>
        <ul>
          {
            newCustomers.map(customer => <li key={customer.id}><a href={customer.id}>{customer.first_name + ' ' + customer.last_name }</a></li>)
          }
        </ul>
        {
          (customers.length > 3)? <a href="#viewmore">View More..</a> : ''
        }
        <hr/>
      </>;
    }
    else
      return false;
  }

  function topSearchForVendors(searchTerm) {
    if(searchTerm) {
      setVendors(props.getVendors(searchTerm));
    }

    if(vendors.length) {

      // @sortedVendors is to store the limited vendors, like first 3 vendor for top searc bar search
      let sortedVendors = vendors;

      if(vendors.length > 3)
        sortedVendors = vendors.slice(0, 3);

      return <>

        <h4>Vendors</h4>

        <ul>
          {
              sortedVendors.map(vendor => <li key={vendor.id}><a href={vendor.id}>{vendor.vendor_name || vendor.company_name || vendor.first_name || vendor.last_name}</a></li>)
          }
        </ul>
        {
          (vendors.length > 3)? <a href="#viewmore">View More..</a> : ''
        }
      </>;
    }
    else
      return false
  }

  function topSearchResults(searchTerm) {

    if(searchTerm !== null && searchTerm !== undefined){
      setShow(true);
      if(searchTerm.length === 0){
        setShow(false);
      }
    }

    return (
      <>
        { topSearchForProducts(searchTerm) }
        { topSearchForCustomers(searchTerm) }
        { topSearchForVendors(searchTerm) }
      </>
    );

  }

  function signout(e) {
    e.preventDefault();
    window.localStorage.clear();
    props.history.push('/');
  }


  const showNoticationsModal = () => {
    let show = modal ? false : true;
    setModal(show);
  }
  // console.log(props.notificationsData);

  return (
    <HeaderSection>

      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand as={Link} className="site-brand" to="/">
          <img src={logo} style={{width: "50%"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       <form class="search-container" style={{marginBottom: "-5%"}} onSubmit={(e) => e.preventDefault()}>
          <input type="text" id="navsearch-bar" placeholder="Search"   onChange={(e) => topSearchResults(e.target.value)}/>
          <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
          {
            show?
            <div className={'top-search-results '}>
              { topSearchResults() }
            </div>
            : ''
          }
        </form> 
        {/* <Form onSubmit={(e) => e.preventDefault()}>
          <FormControl type="text" data-icon="search" placeholder="Search"  onChange={(e) => topSearchResults(e.target.value)} className="mr-sm-2" style={{width: "295%"}}/>
          {
            show?
            <div className={'top-search-results '}>
              { topSearchResults() }
            </div>
            : ''
          }

        </Form> */}
        <Nav className="ml-auto">
          <Nav.Link className="nav-itm" href="#notification" onClick={() => showNoticationsModal()}>
            <FontAwesomeIcon icon={faBell} />
            <sub>
              <Badge variant="danger">{ props.notificationsData.length || 0 }</Badge>
            </sub>
          </Nav.Link>
          <Nav.Link
            className="nav-itm member-info"
            href="#manager"
          >
            { name }
            <img
              src="https://developers.google.com/web/images/contributors/philipwalton.jpg"
              alt="Logistics manager"
            />
          </Nav.Link>
          <Nav.Link className="nav-itm" href="#support">
            {/* <FontAwesomeIcon icon={faQuestion} /> */}
          </Nav.Link>

          {
            isMobile ?

            <Nav.Link className="nav-itm" href="#signout">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Nav.Link>

            :

            <NavDropdown
              className="nav-itm signin-link"
              title="Signed in"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/" onClick={(e) => signout(e)}>Sign out</NavDropdown.Item>
            </NavDropdown>

          }


        </Nav>
        </Navbar.Collapse>
      </Navbar>
      {
        modal ?
          <div className="notifications-bar">
            <div className="notification-bg"></div>
            <div className="notification-content">
              <header>
                {
                  (props.notificationsData.length > 0)?
                      (<p> Hi, ({ props.notificationsData.length }) Unread Notifications </p>)
                      : ""
                }
              </header>

              <ul className="notifications">
                {
                  (props.notificationsData.length > 0) ?
                    props.notificationsData.map(item => (
                      <li className="notification" key={item._id}>
                        <div>
                          <p className="notification-user-info"><strong>@{ item.name }</strong> from <strong>Sales</strong></p>
                          <p className="notification-user-date"><small>5 mins ago.</small></p>
                          <p className="notification-user-message">{ item.content }.</p>
                        </div>
                        <FontAwesomeIcon title="Mark as unread" icon={faEyeSlash} />
                      </li>
                    ))
                  : (
                    <li className="notification">
                      <div>
                        <p className="notification-user-message" style={{textAlign: "center", margin: "1em"}}> No Notifications for you :)-</p>
                      </div>
                    </li>
                  )
                }
              </ul>
              {
                (props.notificationsData.length > 0)?
                    (<a href="#showll">Show all old Notifications.</a>)
                    : ""
              }
            </div>
          </div>
         : ""
      }


    </HeaderSection>
  );
}

export default Header;
