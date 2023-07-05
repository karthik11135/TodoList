import "./App.css";
import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CardsList from "./components/Card/CardsList";
import Modal from "./components/Modal/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const [displayCards, setDisplayCards] = useState([]);
  const addCardHandler = (newCard) => {
    setDisplayCards((prevCards) => [newCard, ...prevCards]);
  };

  const removeCardHandler = (name) => {
    setDisplayCards((prevCards) =>
      prevCards.filter((card) => card.name !== name)
    );
  };

  return (
    <div className="pagebg app vh-100 vw-100">
      <Navbar showModalHandler={showModalHandler} />
      {showModal && (
        <Modal
          addCardHandler={addCardHandler}
          closeModalHandler={closeModalHandler}
          displayCards={displayCards}
        />
      )}
      {!displayCards[0] && (
        <div className="text-center">
          <h2 className="text-center px-3 py-1 bg-light rounded d-inline-block ">
            No Messages
          </h2>
        </div>
      )}
      {displayCards && (
        <CardsList
          removeCardHandler={removeCardHandler}
          displayCards={displayCards}
        />
      )}
    </div>
  );
}

export default App;
