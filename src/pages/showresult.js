import MyNfts from "../components/templates/MyNfts";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MYGALLERY.module.css";
import useAuth from "../hooks/useAuth";

const SHOWRESULTS = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const onLOGOClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onMINTClick = useCallback(() => {
    navigate("/mintconnect-wallet");
  }, [navigate]);

  const onGALLERYClick = useCallback(() => {
    navigate("/gallery");
  }, []);

  const onROADMAPClick = useCallback(() => {
    navigate("/roadmap");
  }, []);

  const onTEAMClick = useCallback(() => {
    navigate("/team");
  }, []);

  const onIconTwitterClick = useCallback(() => {
    window.open("https://twitter.com/home?lang=ko");
  }, []);

  const onIconDiscordClick = useCallback(() => {
    window.open("https://discord.com/");
  }, []);

  return (
    <div className={styles.myGallery}>
      <MyNfts data={user} />

      <div className={styles.myGalleryChild} />
      <img
        className={styles.myGalleryItem}
        alt=""
        src="../rectangle-26@2x.png"
      />
      <div className={styles.rectangleParent}>
        <img
          className={styles.groupInner}
          alt=""
          src="../rectangle-13@2x.png"
        />
        <div className={styles.wallet}>WALLET</div>
        <div className={styles.x37c74541806447e}>{user.account}</div>
        <img className={styles.lineIcon} alt="" src="../line-1@2x.png" />
      </div>
      <div className={styles.rectangleGroup}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-131@2x.png"
        />
        <div className={styles.myNft}>MY NFT</div>
      </div>
      <img className={styles.icon} alt="" src="../1-1@2x.png" />
      <img className={styles.noBgIcon} alt="" src="../-2-no-bg@2x.png" />
      <div className={styles.rectangleContainer}>
        <img
          className={styles.groupChild1}
          alt=""
          src="../rectangle-14@2x.png"
        />
        <div className={styles.likelionBadge}>LIKELION BADGE</div>
      </div>
      <div className={styles.groupDiv}>
        <img
          className={styles.groupChild1}
          alt=""
          src="../rectangle-14@2x.png"
        />
        <div className={styles.dipper001}>{user.result[0].metadata.name}</div>
      </div>
      <img className={styles.icon1} alt="" src="../1-11@2x.png" />
      <img className={styles.dIcon} alt="" src="../d@2x.png" />
      <div className={styles.menu}>
        <div className={styles.gallery}>GALLERY</div>
        <div className={styles.about}>ABOUT</div>
        <div className={styles.roadmap}>ROADMAP</div>
        <button className={styles.team}>TEAM</button>
        <div className={styles.mint}>MINT</div>
        <img className={styles.icon2} alt="" src="../-1@2x.png" />
        <img className={styles.icon3} alt="" src="../-11@2x.png" />
      </div>

      <div className={styles.gallery1}>GALLERY</div>
      <div className={styles.rectangleParent2}>
        <img
          className={styles.groupChild4}
          alt=""
          src="../rectangle-27@2x.png"
        />
        <img
          className={styles.nametagwt1Icon}
          alt=""
          src="../nametagwt-1@2x.png"
        />
        <img
          className={styles.nametagwt1Icon}
          alt=""
          src="../nametagwt-2@2x.png"
        />
      </div>

      <div className={styles.profile}>PROFILE</div>
      <button className={styles.iconArrowIosBackIcon} autoFocus>
        <img className={styles.vectorIcon5} alt="" src="../vector5.svg" />
      </button>
      <button className={styles.iconArrowIosForwardIcon} autoFocus>
        <img className={styles.vectorIcon6} alt="" src="../vector6.svg" />
      </button>

      <div className={styles.rectangleDiv} />
      <img className={styles.noBgIcon1} alt="" src="../-2-no-bg1@2x.png" />

      <button className={styles.iconLogo} autoFocus onClick={onLOGOClick} />
      <div className={styles.navbar} id="navBar">
        <button className={styles.about} autoFocus onClick={onABOUTClick}>
          ABOUT
        </button>
        <button className={styles.mint} autoFocus onClick={onMINTClick}>
          MINT
        </button>
        <button className={styles.gallery} autoFocus onClick={onGALLERYClick}>
          GALLERY
        </button>
        <button className={styles.roadmap} autoFocus onClick={onROADMAPClick}>
          ROADMAP
        </button>
        <button className={styles.team} autoFocus onClick={onTEAMClick}>
          TEAM
        </button>

        <a className={styles.iconTwitter} onClick={onIconTwitterClick} />
        <a className={styles.iconDiscord} onClick={onIconDiscordClick} />
      </div>
    </div>
  );
};

export default SHOWRESULTS;
