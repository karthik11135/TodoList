import Card from "./Card";
import classes from "./Card.module.css"
const CardsList = function (props) {
  return (
    <div className={`container ${classes.overfl} overflow-auto mt-5`}>
      <ul className={`row g-5 overflow-auto`}>

        {props.displayCards.map((card) => {
          return ( <li key={Math.random()} className={`col-${4} list-group-item`}>
                 <Card removeCardHandler={() => props.removeCardHandler(card.name)} name={card.name} message={card.message} />
             </li>)
        })}


      </ul>
    </div>
  );
};
export default CardsList;
