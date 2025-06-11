import style from '../layout/HowItWorks.module.css'
import team from '../../assets/images/backgrounds/team.jpg'

const HowItWorks = () => {
  const Tick = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.29 14.29L3.7 10.7C3.31 10.31 3.31 9.68 3.7 9.29C4.09 8.9 4.72 8.9 5.11 9.29L8 12.17L14.88 5.29C15.27 4.9 15.9 4.9 16.29 5.29C16.68 5.68 16.68 6.31 16.29 6.7L8.7 14.29C8.32 14.68 7.68 14.68 7.29 14.29Z" fill="#1771B7"/>
  </svg>
  );
  return (
    <div className={style.HowItWorks} id='HowItWorks'>
          <div className={style.imgContainer}>
            <img src={team} alt="our team" width={500}/>
          </div>

          <div className={style.infoContainer}>
              <h1 className={style.heading}>Achieve Optimal Health <span>
              with Our Dedicated Doctors  </span></h1>
              {/* <hr className={style.hr}/> */}
              <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.</p>
          
          <table className={style.table}>
            <tr>
              <td><li><Tick></Tick>24/7 Support</li></td>
              <td><li><Tick></Tick>Trusted Specialist Doctor</li></td>
            </tr>

             <tr>
              <td><li><Tick></Tick>Best Vaccination</li></td>
              <td><li><Tick></Tick>High Quality Care</li></td>
            </tr>
          </table>

          <button className={style.makeAppiontment}>Make an Appiontment</button>
          </div>
    </div>
  )
}

export default HowItWorks
