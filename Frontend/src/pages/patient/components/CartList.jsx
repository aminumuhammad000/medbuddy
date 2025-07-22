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
          <iconify-icon icon="fa:trash" className={style.delete} />
        </button>
        <p className={style.price}>{price}</p>
      </div>
    </div>
  );
};

export default CartList;
