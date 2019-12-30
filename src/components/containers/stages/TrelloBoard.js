import React, { PureComponent } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { setActiveBoard } from "../../../actions/boardActions";
import { sort } from "../../../actions/listsActions";
// import { Link } from "react-router-dom";
const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
// TODO: Fix performance issue
class TrelloBoard extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const boarddata = {boardID: "board-0"};
    const { boardID } = boarddata;
    this.props.dispatch(setActiveBoard(boardID));
  }
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  render() {
    const { lists, cards, boards } = this.props;

    const allboards = {
        id: "board-0",
        lists: ["list-0","list-1","list-2","list-3","list-4","list-5","list-6","list-7","list-8","list-9","list-10","list-11","list-12"],
        title: "myboard"
     } ;
     const boardlists = {
      "list-0": {
        id: "list-0",
        cards: ["card-0"],
        title: "Tendor ID",
        board: "board-0"
      },
      "list-1": {
        id: "list-1",
        cards: [],
        title: "LPO Reviced",
        board: "board-0"
      },
      "list-2": {
        id: "list-2",
        cards: [],
        title: "Finance Mode",
        board: "board-0"
      },
      "list-3": {
        id: "list-3",
        cards: [],
        title: "Payment Terms",
        board: "board-0"
      },
      "list-4": {
        id: "list-4",
        cards: [],
        title: "Delivery Terms",
        board: "board-0"
      },
      "list-5": {
        id: "list-5",
        cards: [],
        title: "Payment Guarantee",
        board: "board-0"
      },
      "list-6": {
        id: "list-6",
        cards: [],
        title: "Payment",
        board: "board-0"
      },
      "list-7": {
        id: "list-7",
        cards: [],
        title: "Logistics Invoice",
        board: "board-0"
      },
      "list-8": {
        id: "list-8",
        cards: [],
        title: "Delivery Data",
        board: "board-0"
      },
      "list-9": {
        id: "list-9",
        cards: [],
        title: "Invoice to Customer",
        board: "board-0"
      },
      "list-10": {
        id: "list-10",
        cards: [],
        title: "LG",
        board: "board-0"
      },
      "list-11": {
        id: "list-11",
        cards: [],
        title: "Release LG",
        board: "board-0"
      },
      "list-12": {
        id: "list-12",
        cards: [],
        title: "Final Report",
        board: "board-0"
      },
      "list-13": {
        id: "list-13",
        cards: [],
        title: "Project Report",
        board: "board-0"
      }
     }

      // const { lists, cards, match, boards } = this.props;
    const boarddata = {boardID: "board-0"};
    const { boardID } = boarddata;
    console.log("boarddata", boarddata);
    console.log("boards0946056", boards);
    console.log("boardID", boardID);
    const boardsData ={
      "board-0":{
      id: "board-0",
      lists: [ "list-0", "list-1", "list-2", "list-3", "list-4", "list-5" ,"list-6", "list-7", "list-8", "list-9", "list-10", "list-11","list-12","list-13"
      ],
      title: "Tracking"
      }};
    const board = boardsData[boardID];
    console.log("board", board);
    if (!board) {
      return <p>Board not found</p>;
    }

    const listOrder = allboards.lists;
    return (
      <div style={{overflowX: 'scroll'}}>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h2>{board.title}</h2>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >

              {listOrder.map((listID, index) => {
              console.log("listOrder", listOrder);
                const list = boardlists[listID];
                if (list) {
                  const listCards = list.cards.map(cardID => cards[cardID]);
                  return (
                    <TrelloList
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
                return true;
              })}

              {provided.placeholder}
              <TrelloCreate list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards
});
export default connect(mapStateToProps)(TrelloBoard);
