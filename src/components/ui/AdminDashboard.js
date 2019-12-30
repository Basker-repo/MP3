import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretUp,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

// const data = [
//       {month: 'May', amt: 100},
//       {month: 'Jun', amt: 200},
//       {month: 'Jul', amt: 50},
//       {month: 'Aug', amt: 300},
//       {month: 'Sep', amt: 350},
//       {month: 'Oct', amt: 300},
//       {month: 'Nov', amt: 500},
// ];

// function SimpleAreaChart() {
//   return (
//     <ResponsiveContainer width="100%" height={400}>
//     	<AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
//         <CartesianGrid strokeDasharray="3 3"/>
//         <XAxis dataKey="month"/>
//         <YAxis />
//         <Tooltip/>
//         <Area type='monotone' dataKey='amt' stroke='#F886F4' fill='rgba(165, 0, 252, .16)' />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// }

const Style = styled.div`

    .col {
      padding-right: 30px;
      padding-left: 30px;
      @media all and (min-width: 0px) and (max-width: 480px) {
        padding-right: 15px;
        padding-left: 15px;
        min-width: 100%;
      }
    }

    .admin-toggle {
      font-size: 1.3em;
      svg {
        margin-right: 1em;
      }
    }

    .card {
      background: #f8f8ffb3 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 15px #00000029;
      border-radius: 10px;
      border: 0;
      overflow: hidden;
      margin-bottom: 3em;
      .card-body {
        background: transparent;
        .card-title {
          font-weight: normal;
          font-size: 120%;
          color: #000;
        }
        .card-text {
          font-size: 200%;
          color: #555;
        }
      }

      &.deal {

        .deals-cost {
          display: flex;
          justify-content: space-between;
          position: relative;

          > div {
            &:last-child {
              position: absolute;
              bottom: 0;
              right: 0;
              span {
                display: block;
                text-align: right;
                &:first-child {
                  margin-bottom: 0.3em;
                }
              }
            }
          }
        }

        &.start {
          .card-body {
            .card-text {
              color: #179bfc;
            }
          }
        }

        &.lost {
          .card-body {
            .card-text {
              color: #fc3c3c;
            }
          }
        }

        &.won {
          .card-body {
            .card-text {
              color: #00a232;
            }
          }
        }
      }

    }

    .deal-progress {

      .card-body{
        padding-bottom: 10em;
        .card-text {
          font-size: 90%;
          margin-left: 10px;

          span {
            float: right;
            svg {
              margin-left: 10px;
              font-size: 1.4em
            }
          }

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 5px;
            background: #FFBD00;
            border-radius: 20px;
          }
          &:nth-of-type(1) {
            margin-top: 1.3em;
          }
        }

      }
    }

    .email-sent,
    .email-received {
      .card-body {
        .card-text {
          font-size: 100%;
        }
        .mail-count {
          margin: 1.2em 0;
        }
        .card-link {
          display: inline-block;
          text-align: center;
        }
        .card-link-container {
          text-align:center;
          position: relative;
          z-index: 1;
          margin-bottom: 1em;
          a {
            position: static;
            background: #f8f8ffb3;
          }
          &:before,
          &:after {
            display: block;
            position: absolute;
            content: '';
            top: 50%;
            left: 0;
            width: 35%;
            z-index: 0;
            height: 2px;
            background: #59A8FF;
            @media all and (min-width: 0px) and (max-width: 480px) {
              width: 30%;
            }
          }
          &:after {
            right: 0;
            left: unset;
          }
        }
        .linked {
          margin: 0;
          margin: 0 0 .3em 0;
        }
      }
    }

    .revenue-chart {
      @media all and (min-width: 0px) and (max-width: 480px) {
        /* display: none; */
      }
      .card-text {
        display: flex;
        justify-content: space-between;
        padding: 0 1em;
        @media all and (min-width: 0px) and (max-width: 480px) {
          padding: 0;
        }
        > span {
          font-size: 57%;
          color: #333;
          @media all and (min-width: 0px) and (max-width: 480px) {
            font-size: 40%;
          }
          span {
            display: block;
          }
        }
      }
    }

`;

export default function AdminDashboard(props) {

  const setRedirect = () => {
    props.history.push(`/admin/finance/trackings`)
  }

  return (
    <Style>
      <Container fluid>
        <Row>
          <Col>
            <div className="admin-toggle my-4">
              <FontAwesomeIcon icon={faBars} />
              <span style={{textTransform: 'capitalize'}}> Admin Dashboard</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="deal start" onClick={(e) => setRedirect(e)}>
            <Card.Body>
            <Card.Title>Deals Started</Card.Title>
            <Card.Text>5</Card.Text>
            <div className="deals-cost">
            <div>
            <strong>$ 10,000</strong>
            </div>
            <div>
            <span>
            2 <FontAwesomeIcon icon={faCaretUp} color="#16BF00" />
            </span>
            <span>
            $ 4000
            <FontAwesomeIcon icon={faCaretDown} color="#FF3B3B" />
            </span>
            </div>
            </div>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="deal won" onClick={(e) => setRedirect(e)}>
            <Card.Body>
            <Card.Title>Won Deals</Card.Title>
            <Card.Text>2</Card.Text>
            <div className="deals-cost">
            <div>
            <strong>$ 4000</strong>
            </div>
            <div>
            <span>
            2 <FontAwesomeIcon icon={faCaretDown} color="#FF3B3B" />
            </span>
            <span>
            $ 4000
            <FontAwesomeIcon icon={faCaretDown} color="#FF3B3B" />
            </span>
            </div>
            </div>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="deal lost" onClick={(e) => setRedirect(e)}>
            <Card.Body>
            <Card.Title>Lost Deals</Card.Title>
            <Card.Text>5</Card.Text>
            <div className="deals-cost">
            <div>
            <strong>$ 4000</strong>
            </div>
            <div>
            <span>
            2 <FontAwesomeIcon icon={faCaretUp} color="#16BF00" />
            </span>
            <span>
            $ 4000
            <FontAwesomeIcon icon={faCaretDown} color="#FF3B3B" />
            </span>
            </div>
            </div>
            </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="deal-progress">
              <Card.Body>
                <Card.Title>Today Deals Progress by count</Card.Title>
                <Card.Text>Total lead In <span> 1  <FontAwesomeIcon icon={faCaretUp} color="#16BF00" /></span></Card.Text>
                <Card.Text>Total Contact made <span> 1  <FontAwesomeIcon icon={faCaretUp} color="#16BF00" /></span></Card.Text>
                <Card.Text>Total Proposal made <span> 1  <FontAwesomeIcon icon={faCaretUp} color="#16BF00" /></span></Card.Text>
              </Card.Body>
            </Card>
            <Card className="deal-progress">
              <Card.Body>
                <Card.Title>Today Deals Progress by count</Card.Title>
                <Card.Text>Total lead In <span> 1  <FontAwesomeIcon icon={faCaretUp} color="#16BF00" /></span></Card.Text>
                <Card.Text>Total Contact made <span> 1  <FontAwesomeIcon icon={faCaretUp} color="#16BF00" /></span></Card.Text>
                <Card.Text>Total Proposal made <span> 1  <FontAwesomeIcon icon={faCaretUp} color="#16BF00" /></span></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="email-sent">
              <Card.Body>
                <Card.Title>Email Sent</Card.Title>
                <Card.Text className="mail-count">5 mails</Card.Text>
                <div className="card-link-container">
                  <Card.Link href="/">Show More</Card.Link>
                </div>
                <Card.Text className="linked">3 linked to contact</Card.Text>
                <Card.Text className="linked">3 linked to deals</Card.Text>
                <Card.Text className="linked">0 linked to deals</Card.Text>
              </Card.Body>
            </Card>
            <Card className="email-received">
              <Card.Body>
                <Card.Title>Email Sent</Card.Title>
                <Card.Text className="mail-count">5 mails</Card.Text>
                <div className="card-link-container">
                  <Card.Link href="/">Show More</Card.Link>
                </div>
                <Card.Text className="linked">3 linked to contact</Card.Text>
                <Card.Text className="linked">3 linked to deals</Card.Text>
                <Card.Text className="linked">0 linked to deals</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </Style>
  );
}
