import style from "./CartList.module.css";

const CartList = ({ image, title, price, amount }) => {
  return (
    <div className={style.CartList} id="flexSpaceBetween">
      <div className={style.imgContainer} id="flexCenter">
        <img src={image} alt={image} loading="lazy" />
      </div>
      <h4 className={style.title}>{title}</h4>
      <div className={style.controlAmount} id="flexCenter">
        <button className={style.button} id="flexCenter">-</button>
        <p className={style.amount}>{amount}</p>
        <button className={style.button} id="flexCenter">+</button>
      </div>

      <div className={style.priceContainer} id="flexCenter">
        <button>
          <iconify-icon icon="fa:trash" className={style.delete} />
        </button>
        <p className={style.price} id="text30">{price}</p>
      </div>
    </div>
  );
};

export default CartList;
