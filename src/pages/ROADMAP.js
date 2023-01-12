import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ROADMAP.module.css";

const ROADMAP = () => {
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
    <div className={styles.roadmapWrapper}>
      <img
        className={styles.nametagwt1Icon}
        alt=""
        src="../nametagwt-12@2x.png"
      />
      <img className={styles.sku1Icon} alt="" src="../sku-11@2x.png" />
      <img
        className={styles.roadmapChild}
        alt=""
        src="../rectangle-33@2x.png"
      />
      <div className={styles.kPopContainer}>
        <p
          className={styles.kPop}
        >{`선미야클럽은 글로벌 K-POP 아티스트인 선미를 모티브로 한 캐릭터 IP인 미야’를 중심으로 한 클레이튼 기반 PFP NFT 프로젝트입니다. `}</p>
        <p className={styles.kPop}>&nbsp;</p>
        <p
          className={styles.kPop}
        >{`탄탄한 기술력과 실행력, 기성 산업과의 폭넓은 네트워크, 단단한 커뮤니티를 기반으로 오프라인에서 메타버스를 연결하는 가교 역할을 수행하고 있으며, `}</p>
        <p className={styles.ip}>
          세계관을 통한 IP 확장을 통해 다양한 기성산업, 메타버스 IP들과 콜라보를
          통해 Web 3.0 시대를 대표하는 IP로 발돋움하고 있습니다.
        </p>
      </div>
      <img className={styles.dipperx2Icon} alt="" src="../dipperx-22@2x.png" />
      <div className={styles.roadMap}>ROAD MAP</div>
      <div className={styles.nametagw5Parent}>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-53@2x.png"
        />
        <img
          className={styles.groupChild}
          alt=""
          src="../rectangle-38@2x.png"
        />
      </div>
      <div className={styles.nametagw6Parent}>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-53@2x.png"
        />
        <img className={styles.groupItem} alt="" src="../rectangle-38@2x.png" />
      </div>
      <div className={styles.nametagw7Parent}>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-53@2x.png"
        />
        <img
          className={styles.groupChild}
          alt=""
          src="../rectangle-38@2x.png"
        />
      </div>
      <div className={styles.nametagw9Parent}>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-53@2x.png"
        />

        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-38@2x.png"
        ></img>
      </div>
      <div className={styles.nametagw8Parent}>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-53@2x.png"
        />
        <img
          className={styles.groupChild1}
          alt=""
          src="../rectangle-38@2x.png"
        />
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

export default ROADMAP;
