import React, { Component } from "react";
import ReactDOM from "react-dom";
import isEmpty from "lodash/isEmpty";
import axios from "axios";

import data from "../../../components/ui/data.json";
import "../../ui/App.css";

import Board from "react-trello";

const handleEditCard = e => {
   window.location.assign('/admin/finance/trackingedit');
  // dispatch(deleteCard(id, listID));
};

class FinanceTrello extends React.Component {

  constructor(props)
  {
      super(props)
      this.state={
        data: {}
      }
  }
 
  componentDidMount() {
    this.getTodos();
}
getTodos = () => {
  axios
    .get("http://3.92.201.85:8999/orders")
    .then(res => {
      console.log("res", res);
      const data = {
        lanes: [
          {
            "id": "stage0",
            "title": "Tendor ID",
            "label": "",
            "style": {
              "width": 280
            },
            cards:
             res.data.map(user => ({
              id: user._id,
              title: user.tendorid,
              description: user.tendorname
            }))
          },
          {
            "id": "stages1",
            "title": "RFQ",
            "label": "",
            "style": {
              "width": 280
            },
            "cards": [
            ]
          },
          {
            "id": "stages2",
            "title": "Review Quotation",
            "label": "",
            "style": {
              "width": 280
            },
            "cards": []
          },
          {
            "id": "stages3",
            "title": "Negotiation",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stages4",
            "title": "Quotation Exception",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stages5",
            "title": "Offset Agreement",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stages6",
            "title": "Payment Terms",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stages7",
            "title": "Bank Guarantee",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
              {
                "id": "Archived3",
                "title": "",
                "label": "300 yyyyyns",
                "description": "Completed 10km on cycle"
              }
            ]
          },
          {
            "id": "stages8",
            "title": "Contant Supplier",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stages9",
            "title": "LPO Signing",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "satge10",
            "title": "LPO Deadline",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage11",
            "title": "Insfection",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage12",
            "title": "Project Report",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage13",
            "title": "Shipping Method A/C",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage14",
            "title": "Shipping Approval",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage15",
            "title": "Export Permit",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage16",
            "title": "Shipping Document",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage17",
            "title": "Port Clarification ",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage18",
            "title": "Delivery",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage19",
            "title": "Notification ",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage20",
            "title": "End User Approval",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage21",
            "title": "Invoice Submission ",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage22",
            "title": " Later OF Guarantee",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage23",
            "title": "Payment",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage24",
            "title": "LG Release",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage25",
            "title": "Financial Report",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          },
          {
            "id": "stage26",
            "title": "Invoice Submission ",
            "style": {
              "width": 280
            },
            "label": "",
            "cards": [
            ]
          }
        ]
      };

      this.setState({ data });
    })
    .catch(error => {
      console.error(error);
    });
};
  render() {
    const { data } = this.state;
    console.log("this.state", this.state.data);

  return (
    
    <div className="App">
     <h1>Tracking</h1>
      {!isEmpty(data) ? <Board data={data} draggable  onDoubleClick={handleEditCard} /> : <p>Loading...</p>}
  </div>
  );
  }
};

export default FinanceTrello;

