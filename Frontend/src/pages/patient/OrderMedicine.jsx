import style from "./OrderMedicine.module.css";
import img1 from "../../assets/images/backgrounds/medicine-banner.png";
import DrugCard from "./components/DrugCard";
import drug1 from "../../assets/images/backgrounds/drug1.png";
import drug2 from "../../assets/images/backgrounds/drug2.png";
import { useState } from "react";
import Preview from "./components/Preview";
import Cart from "./Cart";
import Search from "./components/Search";

const drugs = [
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
  },
];

const OrderMedicine = () => {
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [view, setView] = useState("list"); // "list", "preview", "cart"
  const [viewAll, setViewAll] = useState(false);

  // const dispatch = useDispatch();
  // const drugs = useSelector((state) => state.drugs.list);
  // const loading = useSelector((state) => state.drugs.loading);
  // const error = useSelector((state) => state.drugs.error);

  // useEffect(() => {
  //   dispatch(fetchDrugs());
  // }, [dispatch]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  // Show preview when a card is clicked

  const handleDrugClick = (drug) => {
    setSelectedDrug(drug);
    setView("preview");
  };

  // Show cart when "Add to Cart" is clicked inside Preview
  const handleAddToCart = () => {
    setView("cart");
  };

  // Go back to list from cart or preview
  // const handleBack = () => {
  //   setSelectedDrug(null);
  //   setView("list");
  // };

  return (
    <div className={style.OrderMedicine}>
      {view === "cart" ? (
        <Cart />
      ) : view === "preview" ? (
        <Preview drug={selectedDrug} onAddToCart={handleAddToCart} />
      ) : (
        <>
          <Search />
          {!viewAll && (
            <>
              <div className={style.Banner} id="flexSpaceBetween">
                <div className={style.detailsContainer}>
                  <h1 className={style.title}>Order with Prescription</h1>
                  <p className={style.description} id="mediumText">
                    Upload a prescription and a pharmacist will arrange your
                    medicine for you.
                  </p>
                  <button className={style.btn}>Order Now</button>
                </div>
                <img
                  src={img1}
                  alt="bannerImg"
                  className={style.medicineBanner}
                  loading="lazy"
                />
              </div>

              <div className={style.titleContainer} id="flexSpaceBetween">
                <h3 className={style.pageTitle}>Hot Seller</h3>
                <button
                  className={style.viewAll}
                  onClick={() => setViewAll(true)}
                  id="text30"
                >
                  View all
                </button>
              </div>
              <div className={style.DrugList} id="flexCenter">
                {drugs.slice(0, 3).map((drug, idx) => (
                  <DrugCard
                    key={idx}
                    image={drug.image}
                    title={drug.title}
                    price={drug.price}
                    onClick={() => handleDrugClick(drug)}
                  />
                ))}
              </div>
            </>
          )}

          {viewAll && (
            <div className={style.AllDrugsContainer} id="flexCenter">
              {drugs.map((drug, idx) => (
                <DrugCard
                  key={idx}
                  image={drug.image}
                  title={drug.title}
                  price={drug.price}
                  onClick={() => handleDrugClick(drug)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default OrderMedicine;
