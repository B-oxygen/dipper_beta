import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MINT2.module.css";
import { Colorful } from "@uiw/react-color";
import { ReactComponent as BackgroundColor } from "../assets/backgroundColor.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const MINT2 = () => {
  const [hex, setHex] = useState("#fff");
  const [backgroundColor, setBackgroundColor] = useState(
    "https://gist.githubusercontent.com/B-oxygen/7125b95688d9e52eb329b5b74e62c00b/raw/9b45af604757456978020c3ad243dfce3b939260/backgroundColor.svg"
  );
  const [skinSort, setSkinSort] = useState("https://iili.io/HT56dbI.png");
  const [hairSort, setHairSort] = useState("https://iili.io/HT56Ksn.png");
  const [eyesSort, setEyesSort] = useState("https://iili.io/HT56oJ4.png");
  const [eyebrowSort, setEyebrowSort] = useState("https://iili.io/HT56AX9.png");
  const [clothesSort, setClothesSort] = useState("https://iili.io/HT56agj.png");

  const navigate = useNavigate();

  const onFAQClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onGALLERYClick = useCallback(() => {
    navigate("/gallery"); // Please sync "MINT4" to the project
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

  const onMintNowClick = () => {}; // 민트 함수랑 이어져서 실행 하도록 하기

  return (
    <div className={styles.mint2}>
      <div className={styles.hair} id="HAIR">
        <div className={styles.hairChild} />
        <div className={styles.hairItem}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                className={styles.hair1}
                alt=""
                src="https://iili.io/HT56Ksn.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56Ksn.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.hair2}
                alt=""
                src="https://iili.io/HT56B0G.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56B0G.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.hair3}
                alt=""
                src="https://iili.io/HT56Cgf.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56Cgf.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.hair4}
                alt=""
                src="https://iili.io/HT56x5l.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56x5l.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.hair5} alt="추가 될 예정" src="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <img
          className={styles.nametagw4Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />
        <div className={styles.hairText}>HAIR</div>
        <img className={styles.hairInner} alt="" src="../polygon-3.svg" />
        <img className={styles.hairChild1} alt="" src="../polygon-4.svg" />
        <img className={styles.hairChild2} alt="" src="../ellipse-4.svg" />
        <img className={styles.hairChild3} alt="" src="../ellipse-5.svg" />
        <img className={styles.hairChild4} alt="" src="../ellipse-6.svg" />
      </div>
      <div className={styles.clothes} id="Clothes">
        <div className={styles.clothesChild} />
        <div className={styles.clothesItem} />
        <div className={styles.clothes1}>CLOTHES</div>
        <img className={styles.icon2} alt="" src="../clothes@2x.png" />
        <img
          className={styles.nametagw6Icon}
          alt=""
          src="../nametagw-6@2x.png"
        />
        <img className={styles.clothesInner} alt="" src="../ellipse-4.svg" />
        <img className={styles.clothesChild1} alt="" src="../ellipse-5.svg" />
        <img className={styles.clothesChild2} alt="" src="../ellipse-6.svg" />
      </div>
      <div className={styles.eyebrows} id="Eyebrows">
        <div className={styles.eyesChild} />
        <img
          className={styles.nametagw4Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />
        <div className={styles.brows}>BROWS</div>
        <img
          className={styles.eyebrowsItem}
          alt=""
          src="../rectangle-2@1x.png"
        />
        <img className={styles.eyebrowsInner} alt="" src="../polygon-5.svg" />
        <img className={styles.eyebrowsChild1} alt="" src="../polygon-6.svg" />
        <img className={styles.icon1} alt="" src="../Eyebrows_1@2x.png" />
      </div>
      <div className={styles.eyes} id="Eyes">
        <div className={styles.eyesChild} />
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />
        <div className={styles.eyes1}>EYES</div>
        <div className={styles.eyesItem} />
        <img className={styles.eyesInner} alt="" src="../polygon-6.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-5.svg" />
        <img className={styles.icon} alt="" src="../eyes_1@2x.png" />
      </div>

      <div className={styles.skin} id="Skin">
        <div className={styles.skinChild} />
        <img
          className={styles.nametagw7Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />
        <div className={styles.skin1}>SKIN</div>
        <img className={styles.skinItem} alt="" src="../ellipse-7.svg" />
        <img className={styles.skinInner} alt="" src="../ellipse-8.svg" />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-9.svg" />
      </div>
      <div className={styles.backgroundcolor} id="BackgroundColor">
        <div className={styles.backgroundcolorChild} />
        <img
          className={styles.nametagw7Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />
        <div className={styles.background}>BACKGROUND</div>
        <Colorful
          className={styles.reactColor}
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
      </div>
      <div>
        <BackgroundColor
          className={styles.backgroundColorSort}
          data-animate-on-scroll
          fill={hex}
        />
        <img
          className={styles.skinSort}
          data-animate-on-scroll
          src={skinSort}
          alt="skin"
        />
        <img
          className={styles.outline}
          data-animate-on-scroll
          src="https://iili.io/HT569JR.png"
          alt="outline"
        />
        <img
          className={styles.hairSort}
          data-animate-on-scroll
          src={hairSort}
          alt="hair"
        />
        <img
          className={styles.eyesSort}
          data-animate-on-scroll
          src={eyesSort}
          alt="eyes"
        />{" "}
        <img
          className={styles.eyebrowsSort}
          data-animate-on-scroll
          src={eyebrowSort}
          alt="eyebrow"
        />
        <img
          className={styles.clothesSort}
          data-animate-on-scroll
          src={clothesSort}
          alt="clothes"
        />
      </div>

      <div className={styles.preview} id="preview">
        <img
          className={styles.nametagwt1Icon}
          alt=""
          src="../nametagwt-1@1x.png"
        />
        <div className={styles.preview1}>PREVIEW</div>
      </div>
      <button className={styles.buttonMint} autoFocus>
        <div className={styles.buttonMintChild} id="MintButton" />
        <div className={styles.mintNow} onClick={onMintNowClick}>
          MINT NOW
        </div>
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

export default MINT2;
