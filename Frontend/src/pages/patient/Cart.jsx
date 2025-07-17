import style from "./Cart.module.css";
import CartList from "./components/CartList";
import drug1 from "../../assets/images/backgrounds/drug1.png";
import drug2 from "../../assets/images/backgrounds/drug2.png";

const drugs = [
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
    amount: 1,
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
    amount: 1,
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
    amount: 1,
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
    amount: 1,
  },
];
const Cart = () => {
  return (
    <div className={style.Cart}>
      <div className={style.cartList}>
        <div className={style.cartTitle}>
          <h3>Product</h3>
          <h3>Total</h3>
        </div>

        <div className={style.drugList}>
          {drugs.map((drug, index) => (
            <CartList
              key={index}
              image={drug.image}
              title={drug.title}
              price={drug.price}
              amount={drug.amount}
            />
          ))}
        </div>
      </div>
      <div className={style.orderSummary}>
        <div>
          <h1 className={style.checkoutTitle}>Order Summary</h1>
          <div className={style.subtotal}>
            <h3>Subtotal</h3>
            <h3 className={style.bold}>{"₦ 100,000"}</h3>
          </div>
          <div className={style.delivery}>
            <h3>Delivery</h3>
            <h3 className={style.bold}>{"₦ 1000"}</h3>
          </div>
        </div>

        <div className={style.checkoutContainer}>
          <div className={style.total}>
            <h3>Total</h3>
            <h3 className={style.bold}>{"₦ 101,000"}</h3>
          </div>
          <button className={style.checkout}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
