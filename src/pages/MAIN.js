import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MAIN.module.css";

const MAIN = () => {
  const navigate = useNavigate();

  const onFAQClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onGALLERYClick = useCallback(() => {
    // Please sync "MINT4" to the project
  }, []);

  const onMINTClick = useCallback(() => {
    navigate("/mintconnect-wallet");
  }, [navigate]);

  const onABOUTClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);



  const onIconTwitterClick = useCallback(() => {
    window.open("https://twitter.com/home?lang=ko");
  }, []);

  const onIconDiscordClick = useCallback(() => {
    window.open("https://discord.com/");
  }, []);

  return (
    <div className={styles.main} id="Wrapper">
      <img
        className={styles.universeMainIcon}
        alt="universe_main"
        src="../universe_main@1x.png"
      />
      <img className={styles.logoMainIcon} alt="" src="../logo-main@1x.png" />
      <img
        className={styles.character1Icon}
        alt=""
        src="../character_main@1x.png"
      />
      <div className={styles.navbar} id="navBar">
        <button className={styles.faq} autoFocus onClick={onFAQClick}>
          FAQ
        </button>
        <button className={styles.roadmap}>ROADMAP</button>
        <button className={styles.gallery} autoFocus onClick={onGALLERYClick}>
          GALLERY
        </button>
        <button className={styles.mint} autoFocus onClick={onMINTClick}>
          MINT
        </button>
        <button className={styles.about} autoFocus onClick={onABOUTClick}>
          ABOUT
        </button>
        <a className={styles.iconTwitter} onClick={onIconTwitterClick} />
        <a className={styles.iconDiscord} onClick={onIconDiscordClick} />
        <button className={styles.iconLogo} autoFocus />
      </div>
    </div>
  );
};

export default MAIN;
