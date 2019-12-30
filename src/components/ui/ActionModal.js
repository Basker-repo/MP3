import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheckDouble } from "@fortawesome/free-solid-svg-icons";


export default function ActionModal(props){
  let show = props.display;
  show = show ? 'flex' : 'none';

  const Styles = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.58);
    border-radius: 66px;
    min-height: 100%;
    width: 100%;
    display: ${show};
    top: 0;
    justify-content: center;
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
      position: fixed;
      width: 467px;
      background: #fff;
      border-radius: 35px;
      height: 264px;
      padding: 30px;
      top: 50%;
      transform: translateY(-50%);

      .modal-closeicon {
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

        > div {
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
              background: #50b7f8;
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

        a, button {
          background: transparent linear-gradient(90deg, #0682fe 0%, #6cc6ff 100%)
            0% 0% no-repeat padding-box;
          border-radius: 18px;
          padding: 10px 20px;
          min-width: 145px;
          min-height: 49px;
          color: #fff;
          font-size: 140%;
          outline: 0;
          border: 0;
          text-align: center;

        }
      }
    }
  `;

  return (
    <Styles>
    <div>
      <i className="modal-closeicon" onClick={() => props.closeModel()}>x</i>

      <div className="actionModal-content">
        <div className="actionModal-icon">
          <i>
            { (props.success)? <FontAwesomeIcon icon={faCheckDouble} /> : "" }
          </i>
        </div>
        <div className="actionModal-text">
          <p>{ props.message }</p>
        </div>
      </div>

      <div className="actionModal-actions">
        {
          (props.type === 'confirm') ?
          (<>
            <button onClick={() => props.itemAction()} className="okay-button">Delete it</button>
            <button onClick={() => props.closeModel()} className="cancel-button">Cancel</button>
          </>) :
          (<button onClick={() => props.closeModel()} className="okay-button"> Okay ! </button>)
        }
      </div>

    </div>
    </Styles>
  );
}
