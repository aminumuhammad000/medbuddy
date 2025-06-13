import style from './Footer.module.css';
import logo from '../../assets/images/logos/logo1.png';
import SocialMedia from '../common/SocialMedia'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className={style.Footer}>
        <div className={style.logoContainer}>
            <img src={logo} alt="logo" />
        </div>
        
            <ul className={style.navList}>
                <li><Link to="/">Home</Link></li>
                <li><HashLink smooth to="/#HowItWorks">How it Works</HashLink></li>
                <li> <HashLink smooth to="/#Features">Features</HashLink></li>
                <li><HashLink smooth to="/#FAQs">FAQs</HashLink></li>
                <li><HashLink smooth to="/#Contact">Contact</HashLink></li>
            </ul>

    <div className={style.socialMediaContainer}>
        <div className={style.twitter}></div>
        <div className={style.instagram}></div>
        <div className={style.facebook}></div>
    </div>

    <SocialMedia />
     <p className={style.text}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
    
    
    <div className={style.copyConatiner}>
        <p>Copyright © 2023. All rights reserved.</p>

        <div className={style.copy}>
            <p>Privacy</p>
            <p>Terms and condition</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
