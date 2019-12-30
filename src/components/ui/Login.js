import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../../asset/logo.png"

// import { Route, Link, Redirect } from 'react-router-dom';

const Style = styled.div`
  height: 100vh;
  width: 100vw;
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

  div {
    display: flex;
    height: 80%;
    justify-content: center
    align-items: center;

    form {
      width: 45%;
      padding: 0 10%;
      display: block;
      background: rgba(30, 148, 250, .8);
      border-radius: 36px;
      padding-bottom: 2em;
      @media all and (min-width: 0px) and (max-width: 480px) {
        width: 90%;
        padding: 0 2%;
        padding-bottom: 1em;
      }

      h3 {
        color: white;
        text-align: center;
        font-size: 3em;
        font-weight: 600;
        padding-top: 2em;
        @media all and (min-width: 0px) and (max-width: 480px) {
          font-size: 1.5em;
          padding-top: 1em;
        }
      }

      .form-group {
        margin-top: 2.5em;
        @media all and (min-width: 0px) and (max-width: 480px) {
          margin-top: 1em;
        }
        input {
          background: #FFFFFF 0% 0% no-repeat padding-box;
          border-radius: 30px;
          height: 65px;
          font-size: 140%;
          padding-left: 10%;

          @media all and (min-width: 0px) and (max-width: 480px) {
            height: 50px;
          }
          &::placeholder {
            color: #666;
          }
          &:focus {
            &::placeholder {
              opacity: .2;
              transition: all .4s ease-in-out;
            }
          }
        }

        &:nth-of-type(2) {
          input {
            letter-spacing: 10px;
            &::placeholder {
              color: #222;
            }
          }
        }
      }

      button {
        display: block;
        width: 65%;
        margin: auto;
        margin-top: 2em;
        background: transparent linear-gradient(90deg, #04ACFA 0%, #1DCBF6 100%) 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 15px #00000029;
        border-radius: 38px;
        border: 0;
        font-size: 150%;
        font-weight: 500;
        padding: 13px 30px;
        @media all and (min-width: 0px) and (max-width: 480px) {
          margin-top: 1em;
          padding: 5px 15px;
          font-size: 130%;
        }
      }
    }

  }

`;

function Login(props) {
  const handleSubmit = e => {
    e.preventDefault();

    fetch("http://3.92.201.85:8999/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        email: e.target.elements[0].value,
        password: e.target.elements[1].value
      })
    })
      .then(res => res.json())
      .then(res => {

        if (res.data === undefined) {          
          return false;
        }

        if (res.data.isSigned) {
          let roleName, path;

          switch (res.data.role) {
            case "SA":
              roleName = "Super Admin";
              path = "/admin/dashboard";
              break;
            case "SM":
              roleName = "Sales Manager";
              path = "/admin/sales";
              break;
            case "FM":
              roleName = "Finance Manager";
              path = "/admin/finance";
              break;
            case "DM":
              roleName = "Data Entry Manager";
              path = "/admin/data-entry";
              break;
            case "LM":
              roleName = "Logistics Manager";
              path = "/admin/logistics";
              break;
            default:
              break;
          }

          const authData = {
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            role: {
              name: roleName,
              code: res.data.role
            },
            isSuperAdmin: true
          };

          props.auth.authenticate(authData);

          props.history.push(path);
        }
      });
  };

  return (
    <Style>
      <header>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
      </header>

      <div>
        <Form onSubmit={e => handleSubmit(e)}>
          <h3>Login</h3>
          <Form.Group controlId="adminMail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Mail"
              required
              autoComplete="off"
            />
          </Form.Group>
          
          <Form.Group controlId="adminPassword">
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Log In
          </Button>
        </Form>
      </div>
    </Style>
  );
}

export default Login;
