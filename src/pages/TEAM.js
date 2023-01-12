import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TEAM.module.css";

const TEAM = () => {
  const navigate = useNavigate();

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

  const onNEXTClick = useCallback(() => {
    navigate("/howtouse");
  }, []);

  return (
    <div className={styles.teampartners2}>
      <div className={styles.teampartners2Child} />
      <img className={styles.icon} alt="" src="../-13@2x.png" />
      <img className={styles.icon1} alt="" src="../-14@2x.png" />
      <img className={styles.dipperx2Icon} alt="" src="../dipperx-2@2x.png" />
      <div className={styles.sejunParkParent}>
        <div className={styles.sejunPark}>
          <span className={styles.sejunPark1}>SEJUN PARK</span>
          <span className={styles.span}>{`                 `}</span>
        </div>
        <div className={styles.ctoCeo}>{`CTO & CEO`}</div>
        <div className={styles.artDirector}>ART DIRECTOR</div>
        <div className={styles.sodamHong}>SODAM HONG</div>
        <img className={styles.icon2} alt="" src="../2-11@2x.png" />
        <img className={styles.icon3} alt="" src="../2-12@2x.png" />
        <img
          className={styles.nametagw10Icon}
          alt=""
          src="../nametagw-10@2x.png"
        />
        <div className={styles.teamText}>{`TEAM                 `}</div>
      </div>
      {/* <img
        className={styles.d3Icon}
        alt=""
        src="../d-2@2x.png"
        onClick={onD3ImageClick}
      /> */}
      <div className={styles.d1617Parent}>
        <div className={styles.d1617}>
          <p className={styles.email}>
            서울특별시 종로구 종로3길 17 D타워, 16-17층
          </p>
        </div>
        <div className={styles.rhdtkqkrgmailcom}>{`rhdtkqkr@gmail.com `}</div>
        <div className={styles.emailPhoneLocationContainer}>
          <p className={styles.email}>EMAIL</p>
          <p className={styles.email}>PHONE</p>
          <p className={styles.location}>LOCATION</p>
        </div>
        <div className={styles.div}>010 2775 8883</div>
        <img
          className={styles.nametagw11Icon}
          alt=""
          src="../nametagw-10@2x.png"
        />
        <div className={styles.contact}>CONTACT</div>
      </div>
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

export default TEAM;
