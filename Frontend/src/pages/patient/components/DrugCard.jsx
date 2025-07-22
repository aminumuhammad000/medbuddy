import style from "./DrugCard.module.css";
const DrugCard = ({ image, title, price, onClick }) => {
  return (
    <div className={style.DrugCard}>
      <img
        src={image}
        alt={title}
        className={style.img}
        onClick={onClick}
        loading="lazy"
      />
      <p className={style.title}>{title}</p>
      <div>
        <h1 className={style.price}>
          {price} <span>{price}</span>
        </h1>
        <p className={style.discount}>Get 10% off</p>
        <button className={style.addCart}>Add to Cart +</button>
      </div>
    </div>
  );
};

export default DrugCard;
