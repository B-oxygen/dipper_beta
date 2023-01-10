import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MINTCONNECTWALLET.module.css";
import { v4 } from "uuid";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const MINTCONNECTWALLET2 = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const onFAQClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onGALLERYClick = useCallback(() => {
    navigate("/gallery"); // Please sync "MINT4" to the project
  }, [navigate]);

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

  async function loginWithMetamask() {
    var isConnected = await connectWithMetamask();

    //connect완료 될 경우 sign진행
    if (isConnected) {
      await signWithMetamask();
    } else {
      return false;
    }
  }

  async function connectWithMetamask() {
    if (typeof window.ethereum !== "undefined") {
    } else {
      return false;
    }
    try {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      return true;
    } catch (e) {
      return false;
    }
  }

  async function signWithMetamask() {
    const contractAddress = "0x8fd2387871ACA7fA628643296Fd4f5Aae4c5c313"; // 테스트용 NFT 1001
    const chainId = "1001"; //klaytn Mainnet
    const message = "contract address : " + contractAddress;
    const apiKey = "88a23596-fa71-47a1-9294-03b97b0ce696";

    // 지갑 네트워크와 조회하려는 NFT의 네트워크가 같은지 체크
    // if (String(window.ethereum.networkVersion) !== chainId) {
    //   // toast.warn(
    //   //   네트워크를 바오밥 테스트넷 (1001) 으로 변경해주세요. 현재 network : ${window.ethereum.networkVersion},
    //   //   { position: toast.POSITION.BOTTOM_CENTER }
    //   // );
    //   return;
    //   }
    let signObj;
    try {
      signObj = await window.ethereum.request({
        method: "personal_sign",
        params: [message, window.ethereum.selectedAddress, v4()],
      });

      // 홀더인증 API (fastdive)
      verifyHolder(
        apiKey,
        signObj,
        message,
        window.ethereum.selectedAddress,
        contractAddress,
        window.ethereum.networkVersion,
        "metamask",
        false
      );
    } catch (e) {
      return;
    }
  }

  async function verifyHolder(
    _apiKey, //apkKey
    _signObj, // 서명값
    _message, // 서명메세지
    _ownerAddress, // 지갑주소 (msg.sender)
    _contractAddress, // 조회할 NFT컨트랙트 주소
    _chainId, // 체인아이디 ( klaytn : 8217, ethereum : 1 )
    _walletType, // 지갑종류 ( "kaikas" or "metamask")
    _onlyBalance //true면 밸런스만 조회
  ) {
    const url = "https://api.fast-dive.com/api/v1/nft/verifyHolder";

    const params = {
      sign: _signObj,
      signMessage: _message,
      contractAddress: _contractAddress,
      chainId: _chainId,
      walletType: _walletType,
      onlyBalance: _onlyBalance,
    };

    const header = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": _apiKey,
      },
    };

    await axios
      .post(url, params, header)
      .then(function (response) {
        const data = response.data.data;

        if (data.balance > 0) {
          // 로그인성공
          console.log(data, "success");

          // 결과값을 저장 시키고 myPage 에 넘겨주기
          // setUser(data);
          setUser(data.ownerAddress);

          // navigate 함수 가져오고
          const success = () => {
            navigate("/my-gallery");
          };
          success();
        } else {
          // 로그인실패
          console.log(data, "fail");
        }
      })
      .catch(function (e) {
        // error
      });
  }

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

      <button
        className={styles.metamask}
        autoFocus
        onClick={() => {
          loginWithMetamask();
        }}
      >
        <div className={styles.coinbasewalletChild} id="METAMASK" />
        <div className={styles.metaMask}> META MASK2</div>
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

export default MINTCONNECTWALLET2;
