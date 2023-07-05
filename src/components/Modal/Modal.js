import classes from "./Modal.module.css";
import { useState } from "react";
const Modal = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [dupName, setDupName] = useState(false);
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const dupNameHandler = () => {
    setDupName(true);
  }
  const closeDupNameHandler = () => {
    setDupName(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newObj = { name: name, message: message };
    const cards = props.displayCards;
    let possible = true;
    cards.forEach((card) => {
      if (card.name == newObj.name) {
        possible = false;
        dupNameHandler();
      }
    });
    if (possible){ 
        closeDupNameHandler();
        props.addCardHandler(newObj)
    };
    if(possible)  props.closeModalHandler();
  };

  return (
    <div
      className={`container py-3 px-4 position-absolute top-50 start-50 translate-middle ${classes.modal}`}
    >
      <form onSubmit={submitHandler}>
        <div className="d-flex mb-3 flex-column">
          <label className="fs-4">Your Name</label>
          <input
            value={name}
            onChange={nameHandler}
            className="p-2"
            type="text"
          />
        </div>
        <div className="d-flex mb-4 flex-column">
          <label className="fs-4">Your Message</label>
          <textarea
            value={message}
            onChange={messageHandler}
            rows={4}
            className="p-2"
            type="text"
          />
        </div>
        <button className="btn me-2 rounded bg-dark text-white" type="submit">
          Add
        </button>
        <button
          onClick={props.closeModalHandler}
          className="btn rounded bg-black text-white"
        >
          Close
        </button>
        {dupName && <p className="text-danger mt-3">Name already exists</p>}
      </form>
    </div>
  );
};

export default Modal;
