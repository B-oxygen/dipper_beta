import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PARTNERS.module.css";

const PARTNERS = () => {
  const navigate = useNavigate();

  const onD3ImageClick = useCallback(() => {
    navigate("/mainpage");
  }, [navigate]);

  const onGALLERYClick = useCallback(() => {
    navigate("/my-gallery");
  }, [navigate]);

  const onABOUTClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onROADMAPClick = useCallback(() => {
    // Please sync "ROADMAP" to the project
  }, []);

  const onTEAMClick = useCallback(() => {
    // Please sync "ROADMAP" to the project
  }, []);

  const onIconClick = useCallback(() => {
    window.open("https://discord.com/");
  }, []);

  const onIcon1Click = useCallback(() => {
    window.open("https://twitter.com/home?lang=ko");
  }, []);

  return (
    <div className={styles.teampartners}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.dipperx2Icon} alt="" src="../dipperx-2@2x.png" />
        <div className={styles.likelionTechit}>
          <p className={styles.likelion}>LIKELION</p>
          <p className={styles.techit}>TECHIT</p>
        </div>
        <div className={styles.ttot}>TTOT</div>
        <div className={styles.cfn}>CFN</div>
        <div className={styles.toco}>TOCO</div>
        <div className={styles.ministryOfForeignContainer}>
          <p className={styles.likelion}>MINISTRY</p>
          <p className={styles.techit}>OF FOREIGN AFFIARS</p>
        </div>
        <div className={styles.bloodDonation}>
          <p className={styles.likelion}>BLOOD</p>
          <p className={styles.techit}>DONATION</p>
        </div>
        <div className={styles.w3pp}>W3PP</div>
        <div className={styles.footprint}>FOOTPRINT</div>
        <div className={styles.devwiki}>DEVWIKI</div>
        <div className={styles.rankingTree}>RANKING TREE</div>
        <div className={styles.fastDive}>FAST DIVE</div>
        <div className={styles.metaMusic}>META MUSIC</div>
        <div className={styles.aslanAcademy}>ASLAN ACADEMY</div>
        <img className={styles.icon} alt="" src="../1-1@2x.png" />
        <img className={styles.icon1} alt="" src="../3-1@2x.png" />
        <img className={styles.icon2} alt="" src="../4-1@2x.png" />
        <img className={styles.icon3} alt="" src="../2-1@2x.png" />
        <img className={styles.noBgIcon} alt="" src="../-1-no-bg@2x.png" />
        <img
          className={styles.d3Icon}
          alt=""
          src="../d-2@2x.png"
          onClick={onD3ImageClick}
        />
        <img className={styles.icon4} alt="" src="../-1@2x.png" />
        <img
          className={styles.team1Ttot1Icon}
          alt=""
          src="../team1-ttot-1@2x.png"
        />
        <img
          className={styles.team11Cfn1Icon}
          alt=""
          src="../team11-cfn-1@2x.png"
        />
        <img
          className={styles.team12Aslanacademy1Icon}
          alt=""
          src="../team12-aslanacademy-1@2x.png"
        />
        <img
          className={styles.team13Fastdive1Icon}
          alt=""
          src="../team13-fastdive-1@2x.png"
        />
        <img
          className={styles.team14Devwiki1Icon}
          alt=""
          src="../team14-devwiki-1@2x.png"
        />
        <img
          className={styles.team15Metamusic1Icon}
          alt=""
          src="../team15-metamusic-1@2x.png"
        />
        <img
          className={styles.team17Rankingtree1Icon}
          alt=""
          src="../team17-rankingtree-1@2x.png"
        />
        <img
          className={styles.nametagw11Icon}
          alt=""
          src="../nametagw-11@2x.png"
        />
        <div className={styles.partners}>PARTNERS</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.gallery} onClick={onGALLERYClick}>
          GALLERY
        </div>
        <div className={styles.about} onClick={onABOUTClick}>
          ABOUT
        </div>
        <div className={styles.roadmap} onClick={onROADMAPClick}>
          ROADMAP
        </div>
        <div className={styles.team} onClick={onTEAMClick}>
          TEAM
        </div>
        <div className={styles.mint}>MINT</div>
        <img
          className={styles.icon5}
          alt=""
          src="../-11@2x.png"
          onClick={onIconClick}
        />
        <img
          className={styles.icon6}
          alt=""
          src="../-12@2x.png"
          onClick={onIcon1Click}
        />
      </div>
    </div>
  );
};

export default PARTNERS;
