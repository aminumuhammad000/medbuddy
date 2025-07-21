import style from "../Auth.module.css";
const DocInput = ({ label, type, placeholder }) => {
  return (
    <>
      <div className={style.nhis} id="flexColumn">
        <label htmlFor="nhis" id="mediumText">
          {label}
        </label>
        <div className={style.DocInput}>
          <label className={style.docLabel} id="flexCenter">
            <iconify-icon
              icon="material-symbols:upload"
              className={style.uploadIcon}
            ></iconify-icon>
            <span id="mediumText">{placeholder}</span>
            <input type={type} name="nhis" id="mediumText" hidden />
          </label>
        </div>
      </div>
    </>
  );
};

export default DocInput;
