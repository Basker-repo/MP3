import React from "react";
import styled from "styled-components";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Style = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: #4EDDFF;
  background: url(./assets/loginpage-background.png), linear-gradient(to right, #4EDDFF, #5A93FF 80%);;
  background-position: center;

  header {
    padding: 0 8%;
    padding-top: 3em;
    figure {
      color: white;
      font-weight: bold;
      font-size: 200%;
    }
  }
  .content {
    position: absolute;
    display: block;
    border-radius: 36px;
    padding-bottom: 2em;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%,-50%);
    margin: auto;
    @media all and (min-width: 0px) and (max-width: 480px) {
      width: 90%;
      padding: 0 2%;
      padding-bottom: 1em;
    }

    h3 {
      color: white;
      text-align: center;
      font-size: 4em;
      font-weight: 800;
      font-size: W8 60px/102px Hiragino Sans GB W3;
      @media all and (min-width: 0px) and (max-width: 480px) {
        font-size: 170%;
        padding-top: 1em;
      }
    }

    .btn-toolbar {
      margin-top: 4em;
      display: flex;
      justify-content: space-between;
      @media all and (min-width: 0px) and (max-width: 480px) {
        margin-top: 0;
        flex-flow: column;
      }
      a {
        /* display: block; */
        /* width: 65%; */
        margin: 2em 0 0 0;
        /* background: transparent linear-gradient(90deg, #04ACFA 0%, #1DCBF6 100%) 0% 0% no-repeat padding-box; */
        box-shadow: 0px 6px 15px #00000029;
        border-radius: 38px;
        border: 0;
        font-size: 150%;
        font-weight: 500;
        padding: 13px 10%;
        @media all and (min-width: 0px) and (max-width: 480px) {
          margin-top: 1em;
          font-size: 100%;
        }

        &:hover,
        &:focus {
          color: white;
          background: transparent linear-gradient(90deg, #03A5FB 0%, #14BBF7 53%, #24CFF4 100%) 0% 0% no-repeat padding-box;
          box-shadow: 4px 6px 15px #00000029;
          border-radius: 32px;
        }
      }
    }

  }

`;

function SelectService() {
  return (
    <Style>
      <header>
        <figure>
          <Link to="/">
            <img src="" alt="Logo"/>
          </Link>
        </figure>
      </header>
      <div>

        <div className="content">
          <h3>Select the service</h3>

          <ButtonToolbar>
            <Button as={Link} to="/admin/data-entry/customers" variant="light" size="lg">
              Customer
            </Button>

            <Button as={Link} to="/admin/data-entry/vendors" variant="light" size="lg">
              Vendor
            </Button>

            <Button as={Link} to="/admin/data-entry/products" variant="light" size="lg">
              Products
            </Button>
          </ButtonToolbar>

        </div>

      </div>

    </Style>
  );
}

export default SelectService;
