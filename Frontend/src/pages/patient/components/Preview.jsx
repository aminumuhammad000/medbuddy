import style from "./Preview.module.css";
import profile from "../../../assets/images/profiles/profile.jpg";

const Preview = ({ drug, onAddToCart }) => {
  if (!drug) return null;

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
              {drug.price} <span>{drug.price}</span>
              <p className={style.discount}>Get 10% off</p>
            </h1>
            <div className={style.controlContainer}>
              <button className={style.dec}>-</button>
              <h2>1</h2>
              <button className={style.inc}>+</button>
            </div>
          </div>
          <button className={style.addToCart} onClick={onAddToCart}>
            Add to Cart +
          </button>
        </div>
      </div>

      <h1 className={style.descriptionTitle}>Product Details</h1>
      <div className={style.descriptionContainer}>
        <div className={style.mainDetails}>
          <h1 className={style.title2}>Description</h1>
          <p className={style.description}>
            {drug.description ||
              "Lorem ipsum dolor sit amet consectetur. Condimentum pretium at facilisis velit. Ante feugiat proin in risus arcu. Volutpat lobortis integer et scelerisque id amet. Pellentesque metus cursus dolor nulla non. Velit aliquam suscipit hendrerit pulvinar. Sollicitudin nibh in felis turpis."}
          </p>
        </div>

        <div className={style.ratingContainer}>
          <h1 className={style.title2}>Ratings & Reviews</h1>
          <div className={style.reviewContainer}>
            <div className={style.ratingHead}>
              <div className={style.profileDetails}>
                <img
                  src={profile}
                  alt="profile image"
                  className={style.profileImage}
                />
                <div>
                  <h4 className={style.name}>Mustapha Hussein</h4>
                  <p className={style.date}>19th June, 2025</p>
                </div>
              </div>
              <div className={style.rating}>
                {[...Array(5)].map((_, index) => (
                  <iconify-icon
                    key={index}
                    icon={faStar}
                    className={style.star}
                    color={index < 4 ? "#FFD700" : "#ccc"} // 4 stars filled, 1 empty
                  ></iconify-icon>
                ))}
              </div>
            </div>
            <p className={style.ratingText}>
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
