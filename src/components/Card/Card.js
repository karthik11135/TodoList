import classes from "./Card.module.css";
const Card = function (props) {
    const removeCard = () => {
        props.removeCardHandler();
    }
  return (
    <div className={`${classes.size}  card z-0 px-4 py-3 overflow-auto`}>
      <h2 className="mb-2">{props.name}</h2>
      <p className="mb-2 fs-6">{props.message}</p>
      <button onClick={removeCard} className="btn active btn-outline-white rounded text-dark">Remove</button>
    </div>
  );
};
export default Card;
