import { Icon } from "@iconify/react";
import twitterIcon from "@iconify/icons-mdi/twitter";
import instagramIcon from "@iconify/icons-mdi/instagram";
import facebookIcon from "@iconify/icons-mdi/facebook";
import style from "./SocialCard.module.css";

const SocialMedia = () => {
  return (
    <div className={style.socialCard}>
      <div className={style.twitter}>
        <Icon icon={twitterIcon} id="smallText" className={style.icon} />
      </div>
      <div className={style.instagram}>
        <Icon icon={instagramIcon} id="smallText" />
      </div>
      <div className={style.facebook}>
        <Icon icon={facebookIcon} id="smallText" />
      </div>
    </div>
  );
};

export default SocialMedia;
