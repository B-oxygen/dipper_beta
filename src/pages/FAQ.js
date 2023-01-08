import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const navigate = useNavigate();

  const onFAQ2Click = useCallback(() => {
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

  const onIconLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.faq} id="Wrapper">
      <div className={styles.contentsFaq} id="FAQ">
        <div className={styles.q4} id="Q4">
          <div className={styles.nft}>이미 발행된 NFT는 처분이 불가합니다.</div>
          <div className={styles.q4Child} />
          <div className={styles.qNft}>Q. 발급받은 NFT를 처분할 수 없나요?</div>
        </div>
        <div className={styles.q3} id="Q3">
          <div className={styles.nft}>솔라나 기반의 프로젝트입니다.</div>
          <div className={styles.q4Child} />
          <div className={styles.qNft}>Q. 어떤 블록체인을 기반으로 하나요?</div>
        </div>
        <div className={styles.q2} id="Q2">
          <div className={styles.div1}>모르겠습니다.</div>
          <div className={styles.q4Child} />
          <div className={styles.q1}>Q. 왜 배가고픈가요?</div>
        </div>
        <div className={styles.q11} id="Q1">
          <div className={styles.nft}>솔라나 기반의 프로젝트입니다.</div>
          <div className={styles.q4Child} />
          <div className={styles.qNft}>Q. 어떤 블록체인을 기반으로 하나요?</div>
        </div>
        <img
          className={styles.character1Icon}
          alt=""
          src="../character-1@1x.png"
        />
        <div className={styles.faq1}>FAQ</div>
      </div>
      <div className={styles.navbar} id="navBar">
        <button className={styles.faq2} autoFocus onClick={onFAQ2Click}>
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
        <button
          className={styles.iconLogo}
          autoFocus
          onClick={onIconLogoClick}
        />
      </div>
    </div>
  );
};

export default FAQ;
