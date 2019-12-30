import React from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Password = styled.div`
  background: white;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow:hidden;

  &:before {
    position: absolute;
    content: '';
    top: -5vh;
    left: -10vw;
    height: 36vw;
    width: 36vw;
    border-radius: 50%;
    background: #3E55FD 0% 0% no-repeat padding-box;
    opacity: 0.27;
    z-index: 1;
  }

  &:after {
    position: absolute;
    content: '';
    bottom: -20vh;
    right: -10vw;
    height: 36vw;
    width: 36vw;
    z-index: 1;
    border-radius: 50%;
    background: #0090F8 0% 0% no-repeat padding-box;
    opacity: 0.27;
  }

  > div {

    &:before {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 45vh;
      left: -6vw;
      width: 20vw;
      height: 20vw;
      z-index: 2;
      background: #B32BE5 0% 0% no-repeat padding-box;
      opacity: 0.22;
    }

    &:after {
      content: '';
      position: absolute;
      border-radius: 50%;
      bottom: 35vh;
      right: 10vw;
      width: 15vw;
      height: 15vw;
      background: #5DC4FE 0% 0% no-repeat padding-box;
      opacity: 0.22;
    }
    form {
      position: absolute;
      bottom: 25%;
      left: 50%;
      transform: translateX(-50%);
      @media all and (min-width: 0px) and (max-width: 480px) {
        width: 90%;
      }
      label {
        font-size: 200%;
        @media all and (min-width: 0px) and (max-width: 480px) {
          font-size: 110%;
        }
      }
      input {
        padding: 1.5em;
        border: 3px solid #15C9FF;
        width: 60%;
        margin: auto
        border-radius: 30px;
        box-shadow: 0px 3px 6px #00000040;
        @media all and (min-width: 0px) and (max-width: 480px) {
          padding: 1.2em;
          width: 80%;
          font-size: 100%;
        }
        &::placeholder {
          color: #ccc;
          text-align: center;
          font-size: 150%;
          @media all and (min-width: 0px) and (max-width: 480px) {
            font-size: 120%;
          }
        }
        &:focus {
          width: 70%;
          @media all and (min-width: 0px) and (max-width: 480px) {
            width: 90%;
          }
          transition: .2s all ease-in-out;
        }
      }

      button {
        background: transparent linear-gradient(98deg, #81F5FF 0%, #5F71FF 100%) 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #64646440;
        border-radius: 30px;
        opacity: 1;
        min-width: 35%;
        display: block;
        letter-spacing: 0;
        color: #FFFFFF;
        margin: auto;
        font-size: 140%;
        font-weight: 600;
        @media all and (min-width: 0px) and (max-width: 480px) {
          font-weight: 400;
          font-size: 120%;
        }
      }

      input,
      button {
        margin-top: 5vh;
      }

    }

  }
`;

function ForgotPassword() {
  return (
    <Password>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Drop your mail ID to send your password</Form.Label>
            <Form.Control type="email" placeholder="Your mail ID" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Password>
  );
}

export default ForgotPassword;
