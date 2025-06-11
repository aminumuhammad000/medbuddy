import style from '../../components/common/FeaturesCard.module.css';

const FeaturesCard = ({icon, title, text}) => {
  return (
    <div className={style.FeaturesCard}>
      <div className={style.icon}>
        { icon }
        </div>
      <div>

      </div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
    </div>
  )
}

export default FeaturesCard
