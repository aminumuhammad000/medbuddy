import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import style from "./CartList.module.css";

const CartList = ({ image, title, price, amount }) => {
  return (
    <div className={style.CartList}>
      <div className={style.imgContainer}>
        <img src={image} alt={image} />
      </div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.controlAmount}>
        <button className={style.button}>-</button>
        <p className={style.amount}>{amount}</p>
        <button className={style.button}>+</button>
      </div>

      <div className={style.priceContainer}>
        <button>
          <FontAwesomeIcon icon={faTrash} className={style.delete} />
        </button>
        <p className={style.price}>{price}</p>
      </div>
    </div>
  );
};

export default CartList;
