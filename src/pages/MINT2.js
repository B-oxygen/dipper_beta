import { useCallback, useState, useRef } from "react";
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
  // const [backgroundColor, setBackgroundColor] = useState(
  //   "https://gist.githubusercontent.com/B-oxygen/7125b95688d9e52eb329b5b74e62c00b/raw/9b45af604757456978020c3ad243dfce3b939260/backgroundColor.svg"
  // );
  const [skinSort, setSkinSort] = useState("https://iili.io/HT56dbI.png");
  const [hairSort, setHairSort] = useState("https://iili.io/HT56Ksn.png");
  const [eyesSort, setEyesSort] = useState("https://iili.io/HT56oJ4.png");
  const [eyebrowSort, setEyebrowSort] = useState("https://iili.io/HT56AX9.png");
  const [clothesSort, setClothesSort] = useState("https://iili.io/HT56agj.png");

  const navigate = useNavigate();
  const hairSwiperRef = useRef(null);
  const eyeBrowsSwiperRef = useRef(null);
  const eyesSwiperRef = useRef(null);

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

  const onMintNowClick = useCallback(() => {
    navigate("/result-page");
  }, []); // 민트 함수랑 이어져서 실행 하도록 하기

  return (
    <div className={styles.mint2}>
      <div className={styles.hair} id="HAIR">
        <div className={styles.hairChild} />

        <div className={styles.hairText}>HAIR</div>
        <img
          className={styles.nametagw4Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />

        <div className={styles.hairItem}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              hairSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <img
                className={styles.hair1}
                alt=""
                src="../hair_1@1x.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56Ksn.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.hair2}
                alt=""
                src="../hair_1@1x.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56B0G.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.hair3}
                alt=""
                src="../hair_1@1x.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56Cgf.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.hair4}
                alt=""
                src="../hair_1@1x.png"
                onClick={() => {
                  setHairSort("https://iili.io/HT56x5l.png");
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <img
          className={styles.hairButtonPrev}
          alt=""
          src="../polygon-4.svg"
          onClick={() => hairSwiperRef.current?.slidePrev()}
        />
        <img
          className={styles.hairButtonNext}
          alt=""
          src="../polygon-3.svg"
          onClick={() => hairSwiperRef.current?.slideNext()}
        />
      </div>

      <div className={styles.clothes} id="Clothes">
        <div className={styles.clothesChild} />

        <div className={styles.clothesText}>CLOTHES</div>
        <img
          className={styles.nametagw6Icon}
          alt=""
          src="../nametagw-6@2x.png"
        />

        <div className={styles.clothesItem}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              eyesSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <img
                className={styles.clothes1}
                alt=""
                src="../clothes@2x.png"
                onClick={() => {
                  setClothesSort("https://iili.io/HT56agj.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.clothes1}
                alt=""
                src="../clothes@2x.png"
                onClick={() => {
                  setClothesSort("https://iili.io/HT56ldx.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.clothes1}
                alt=""
                src="../clothes@2x.png"
                onClick={() => {
                  setClothesSort("https://iili.io/HT5605Q.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.clothes1}
                alt=""
                src="../clothes@2x.png"
                onClick={() => {
                  setClothesSort("https://iili.io/HT561eV.png");
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={styles.eyebrows} id="Eyebrows">
        <div className={styles.eyesChild} />

        <div className={styles.brows}>BROWS</div>
        <img
          className={styles.nametagw4Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />

        <div className={styles.eyebrowsItem}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              eyeBrowsSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <img
                className={styles.eyebrows1}
                alt=""
                src="../Eyebrows_1@2x.png"
                onClick={() => {
                  setEyebrowSort("https://iili.io/HT56AX9.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.eyebrows2}
                alt=""
                src="../Eyebrows_1@2x.png"
                onClick={() => {
                  setEyebrowSort("https://iili.io/HT56Rse.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.eyebrows3}
                alt=""
                src="../Eyebrows_1@2x.png"
                onClick={() => {
                  setEyebrowSort("https://iili.io/HT56Y0b.png");
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <img
          className={styles.eyebrowsInner}
          alt=""
          src="../polygon-5.svg"
          onClick={() => eyeBrowsSwiperRef.current?.slideNext()}
        />
        <img
          className={styles.eyebrowsChild1}
          alt=""
          src="../polygon-6.svg"
          onClick={() => eyeBrowsSwiperRef.current?.slidePrev()}
        />
      </div>

      <div className={styles.eyes} id="Eyes">
        <div className={styles.eyesChild} />

        <div className={styles.eyesText}>EYES</div>
        <img
          className={styles.nametagw5Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />

        <div className={styles.eyesItem}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              eyesSwiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <img
                className={styles.eyes1}
                alt=""
                src="../eyes_1@2x.png"
                onClick={() => {
                  setEyesSort("https://iili.io/HT56oJ4.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.eyes1}
                alt=""
                src="../eyes_1@2x.png"
                onClick={() => {
                  setEyesSort("https://iili.io/HT56ze2.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.eyes1}
                alt=""
                src="../eyes_1@2x.png"
                onClick={() => {
                  setEyesSort("https://iili.io/HT56IbS.png");
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={styles.eyes1}
                alt=""
                src="../eyes_1@2x.png"
                onClick={() => {
                  setEyesSort("https://iili.io/HT56uz7.png");
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <img
          className={styles.eyesInner}
          alt=""
          src="../polygon-6.svg"
          onClick={() => eyesSwiperRef.current?.slidePrev()}
        />
        <img
          className={styles.polygonIcon}
          alt=""
          src="../polygon-5.svg"
          onClick={() => eyesSwiperRef.current?.slideNext()}
        />
      </div>

      <div className={styles.skin} id="Skin">
        <div className={styles.skinChild} />

        <div className={styles.skinText}>SKIN</div>
        <img
          className={styles.nametagw7Icon}
          alt=""
          src="../nametagw-7@1x.png"
        />

        <img
          className={styles.skin1}
          alt=""
          src="../ellipse-7.svg"
          onClick={() => {
            setSkinSort("https://iili.io/HT56dbI.png");
          }}
        />
        <img
          className={styles.skin2}
          alt=""
          src="../ellipse-8.svg"
          onClick={() => {
            setSkinSort("https://iili.io/HT563xt.png");
          }}
        />
        <img
          className={styles.skin3}
          alt=""
          src="../ellipse-9.svg"
          onClick={() => {
            setSkinSort("https://iili.io/HT56FWX.png");
          }}
        />
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

export default MINT2;
