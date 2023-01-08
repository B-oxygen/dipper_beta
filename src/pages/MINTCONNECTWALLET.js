import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MINTCONNECTWALLET.module.css";

const MINTCONNECTWALLET = () => {
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

  const onButtonNEXTClick = useCallback(() => {
    navigate("/mint2");
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
    <div className={styles.mintConnectWallet} id="Wrapper">
      <img
        className={styles.universeMintIcon}
        alt=""
        src="../universe-mint@1x.png"
      />
      <button className={styles.coinbasewallet} autoFocus>
        <div className={styles.coinbasewalletChild} id="COINBASEWALLET" />
        <div className={styles.coinbaseWallet}>COINBASE WALLET</div>
        <img
          className={styles.coinbase1Icon}
          alt=""
          src="../coinbase_logo@1x.png"
        />
      </button>
      <button className={styles.kaikas} autoFocus>
        <div className={styles.coinbasewalletChild} id="KAIKAS" />
        <div className={styles.kaiKas}>KAI KAS</div>
        <img
          className={styles.walletconnectLogoIcon}
          alt=""
          src="../Kaikas-logo@1x.png"
        />
      </button>
      <button className={styles.metamask} autoFocus>
        <div className={styles.coinbasewalletChild} id="METAMASK" />
        <div className={styles.metaMask}> META MASK</div>
        <img
          className={styles.metamask1Icon}
          alt=""
          src="../metamask_logo@1x.png"
        />
      </button>
      <div className={styles.connectWallet} id="Connect_Wallet">
        <div className={styles.connectWalletChild} />
        <div className={styles.connectWallet1}>CONNECT WALLET</div>
      </div>
      <button
        className={styles.buttonNext}
        autoFocus
        onClick={onButtonNEXTClick}
      >
        <img
          className={styles.nametagwt1Icon}
          alt=""
          src="../nametagwt-11@1x.png"
        />
        <div className={styles.next}>NEXT</div>
      </button>

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
        <button
          className={styles.iconLogo}
          autoFocus
          onClick={onIconLogoClick}
        />
      </div>
    </div>
  );
};

export default MINTCONNECTWALLET;
