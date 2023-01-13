import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ABOUT.module.css";

const ABOUT = () => {
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

  const a = a;
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.about1}>
        <span className={styles.a}>A</span>
        <span className={styles.bout}>bout</span>
      </div>
      <img
        className={styles.nametagw5Icon}
        alt=""
        src="../nametagw-51@2x.png"
      />

      <div className={styles.kPopContainer}>
        <p className={styles.kPop}>
          선미야클럽은 글로벌 K-POP 아티스트인 선미를 모티브로 한 캐릭터 IP인
        </p>
        <p
          className={styles.kPop}
        >{`‘미야’를 중심으로 한 클레이튼 기반 PFP NFT 프로젝트입니다. `}</p>
        <p className={styles.kPop}>&nbsp;</p>
        <p
          className={styles.kPop}
        >{`탄탄한 기술력과 실행력, 기성 산업과의 폭넓은 네트워크, 단단한 커뮤니티를 기반으로 `}</p>
        <p className={styles.kPop}>
          오프라인에서 메타버스를 연결하는 가교 역할을 수행하고 있으며, 세
        </p>
        <p
          className={styles.kPop}
        >{`계관을 통한 IP 확장을 통해 다양한 기성산업, 메타버스 IP들과 콜라보를 통해 `}</p>
        <p className={styles.web30}>
          Web 3.0 시대를 대표하는 IP로 발돋움하고 있습니다.
        </p>
      </div>

      <button
        className={styles.nametagwt1Parent}
        autoFocus
        onClick={onNEXTClick}
      >
        <img
          className={styles.nametagwt1Icon}
          alt=""
          src="../nametagwt-12@2x.png"
        />
        <div className={styles.next}>NEXT</div>
      </button>

      <img className={styles.sku1Icon} alt="" src="../sku-1@2x.png" />
      <img
        className={styles.character1Icon}
        alt=""
        src="../character-1@2x.png"
      />

      <img className={styles.dipperx2Icon} alt="" src="../dipperx-21@2x.png" />

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

export default ABOUT;
