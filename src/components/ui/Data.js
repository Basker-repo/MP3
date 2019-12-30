import React from "react";
import ReactDOM from "react-dom";

import data from "../../../components/ui/data.json";
// import datas from "../../../components/ui/data";

import Board from "react-trello"
constructor(props)
{
    super(props)
    this.state={
      modal: false
    }
}
let ordersUrl = 'http://3.92.201.85:8999/orders';
fetch(ordersUrl)
  .then(response => response.json())
  .then(result => {
    console.log("data", result);
    localStorage.setItem('name', JSON.stringify(result));
  })
  .catch(e => {
      this.setState({...this.state });
  });
  class FinanceTrello extends React.Component {
  }
  export default FinanceTrello;
