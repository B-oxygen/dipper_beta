import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RESULTPAGE.module.css";
import useAuth from "../hooks/useAuth";
import MyNfts from "../components/templates/MyNfts";

const RESULTPAGE = () => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const onNEXTClick = useCallback(() => {
    navigate("/my-gallery");
  }, []);

  const [imgUrl, setImgUrl] = useState("");
  const [php, setPhp] = useState("");
  //   const imageURL = metadata.image;

  /**
   * image 선택
   * @param {*} item
   */

  //   useEffect(() => {
  //     if (imageURL.indexOf("ipfs://") > -1) {
  //       const convertedIpfsUrl =
  //         "https://ipfs.io/ipfs/" + imageURL.split("ipfs://")[1];
  //       return setPhp(convertedIpfsUrl), setImgUrl(convertedIpfsUrl);
  //     }
  //     return setImgUrl(imageURL), setPhp(imageURL);
  //   }, []);

  function selectImage(metadata) {
    if (!window.confirm("프로필 사진을 변경 하시겠습니까?")) {
    } else {
      console.log(metadata);
      setUser({ ...user, imageUrl: metadata.image });
      setPhp(imgUrl);
    }
  }
  return (
    <div className={styles.mintCustomizingResult}>
      <div>
        <MyNfts data={user} />
      </div>
      <img
        className={styles.mintCustomizingResultChild}
        alt=""
        src="../rectangle-41@2x.png"
      />
      <div className={styles.mintCustomizingResultItem} />
      <img className={styles.nametagw7Icon} alt="" src="../nametagw-7@2x.png" />
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="../ellipse-15.svg" />
        <img className={styles.groupItem} alt="" src="../ellipse-16.svg" />
        <img className={styles.vectorIcon} alt="" src="../vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="../vector3.svg" />
        <img className={styles.vectorIcon4} alt="" src="../vector4.svg" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.wallet}>WALLET</div>
        <div className={styles.x37c747ae2e7e1a541806447e}>
          0x37c747AE2e7e1A...541806447E
        </div>
        <img className={styles.lineIcon} alt="" src="../line-11@2x.png" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.nft}>NFT</div>
        <div className={styles.nftName}>user.result.</div>
        <img className={styles.groupChild1} alt="" src="../line-2@2x.png" />
      </div>
      <img className={styles.icon} alt="" src="../1-12@2x.png" />
      <img className={styles.dIcon} alt="" src="../d@2x.png" />
      <div className={styles.menu}>
        <div className={styles.gallery}>GALLERY</div>
        <div className={styles.about}>ABOUT</div>
        <div className={styles.roadmap}>ROADMAP</div>
        <div className={styles.team}>TEAM</div>
        <div className={styles.mint}>MINT</div>
        <img className={styles.icon1} alt="" src="../-1@2x.png" />
        <img className={styles.icon2} alt="" src="../-11@2x.png" />
      </div>
      <img className={styles.dipperx2Icon} alt="" src="../dipperx-2@2x.png" />

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
    </div>
  );
};

export default RESULTPAGE;
