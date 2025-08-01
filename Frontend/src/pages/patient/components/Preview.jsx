import style from "./Preview.module.css";
import profile from "../../../assets/images/profiles/profile.jpg";
import {useState} from "react"
const Preview = ({ drug, onAddToCart }) => {
  const [amount, setAmount] = useState(0)
  if (!drug) return null;
  const handleDecrement = () =>{
    if(!amount <= 0){
      setAmount(amount-1)
    }
  }
  return (
    <div className={style.Preview}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={drug.image} alt="drug image" />
        </div>
        <div className={style.details}>
          <h1 className={style.title}>{drug.title}</h1>
          <div className={style.priceContainer}>
            <h1 className={style.price}>
              {drug.price} <span id="mediumText">{drug.price}</span>
              <p className={style.discount}>Get 10% off</p>
            </h1>
            <div className={style.controlContainer}>
              <button className={style.dec} onClick={handleDecrement}>-</button>
              <h2>{amount}</h2>
              <button className={style.inc} onClick={() => setAmount(amount+1)}>+</button>
            </div>
          </div>
          <button className={style.addToCart} onClick={onAddToCart}>
            Add to Cart +
          </button>
        </div>
      </div>

      <h1 className={style.descriptionTitle}>Product Details</h1>
      <div className={style.descriptionContainer} id="flexColumn">
        <div className={style.mainDetails}>
          <h1 className={style.title2}>Description</h1>
          <p className={style.description} id="medimText">
            {drug.description ||
              "Lorem ipsum dolor sit amet consectetur. Condimentum pretium at facilisis velit. Ante feugiat proin in risus arcu. Volutpat lobortis integer et scelerisque id amet. Pellentesque metus cursus dolor nulla non. Velit aliquam suscipit hendrerit pulvinar. Sollicitudin nibh in felis turpis."}
          </p>
        </div>

        <div className={style.ratingContainer}>
          <h1 className={style.title2}>Ratings & Reviews</h1>
          <div className={style.reviewContainer} id="flexColumn">
            <div className={style.ratingHead} id="flexSpaceBetween">
              <div className={style.profileDetails} id="flexCenter">
                <img
                  src={profile}
                  alt="profile image"
                  className={style.profileImage}
                />
                <div>
                  <h4 className={style.name}>Mustapha Hussein</h4>
                  <p className={style.date} id="smallText">19th June, 2025</p>
                </div>
              </div>
              <div className={style.rating}>
                {[...Array(5)].map((_, index) => (
                  <iconify-icon
                    key={index}
                    icon={"material-symbols:star-rounded"}
                    className={style.star}
                  ></iconify-icon>
                ))}
              </div>
            </div>

            <p className={style.ratingText} id="mediumText">
              Lorem ipsum dolor sit amet consectetur. Condimentum pretium at
              facilisis velit. Ante feugiat proin in risus arcu. Volutpat
              lobortis integer et scelerisque id amet. Pellentesque metus cursus
              dolor nulla non. Velit aliquam suscipit hendrerit pulvinar.
              Sollicitudin nibh in felis turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
