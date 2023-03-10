import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HOWTOUSE.module.css";

const HOWTOUSE = () => {
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

  const onBACKClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.howtouse}>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="../ellipse-15.svg" />
        <img className={styles.groupItem} alt="" src="../ellipse-16.svg" />
        <img className={styles.vectorIcon} alt="" src="../vector20.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector21.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector22.svg" />
        <img className={styles.vectorIcon3} alt="" src="../vector23.svg" />
        <img className={styles.vectorIcon4} alt="" src="../vector24.svg" />
      </div>
      <img
        className={styles.howtouseChild}
        alt=""
        src="../rectangle-24@2x.png"
      />
      <img className={styles.icon} alt="" src="../1@2x.png" />
      <img className={styles.icon1} alt="" src="../2@2x.png" />
      <img className={styles.icon2} alt="" src="../4@2x.png" />
      <img className={styles.icon3} alt="" src="../3-1@2x.png" />
      <div className={styles.groupParent}>
        <button
          className={styles.nametagwt1Parent}
          autoFocus
          onClick={onBACKClick}
        >
          <img
            className={styles.nametagwt1Icon}
            alt=""
            src="../nametagwt-16@2x.png"
          />
          <div className={styles.back}>BACK</div>
        </button>
        <div className={styles.kPopContainer}>
          <p
            className={styles.kPop}
          >{`?????????????????? ????????? K-POP ??????????????? `}</p>
          <p
            className={styles.kPop}
          >{`????????? ???????????? ??? ????????? IP??? ??????????????? ???????????? ??? `}</p>
          <p
            className={styles.kPop}
          >{`???????????? ?????? PFP NFT ?????????????????????. `}</p>
          <p className={styles.kPop}>&nbsp;</p>
          <p
            className={styles.kPop}
          >{`????????? ???????????? ?????????, ?????? ???????????? ????????? ????????????, `}</p>
          <p className={styles.kPop}>{`????????? ??????????????? ???????????? `}</p>
          <p
            className={styles.kPop}
          >{`?????????????????? ??????????????? ???????????? ?????? ????????? ???????????? ?????????, `}</p>
          <p
            className={styles.kPop}
          >{`???????????? ?????? IP ????????? ?????? ????????? ????????????, `}</p>
          <p className={styles.kPop}>{`???????????? IP?????? ???????????? ?????? `}</p>
          <p className={styles.web30}>
            Web 3.0 ????????? ???????????? IP??? ??????????????? ????????????.
          </p>
        </div>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-52@2x.png"
        />
        <div className={styles.customizing}>
          <span>C</span>
          <span className={styles.ustomizing}>ustomizing</span>
        </div>
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

export default HOWTOUSE;
