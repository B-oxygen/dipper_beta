import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MAIN from "./pages/MAIN";
import MINTCONNECTWALLET from "./pages/MINTCONNECTWALLET";
import MINT2 from "./pages/MINT2";
import ABOUT from "./pages/ABOUT";
import CUSTOMIZNG from "./pages/CUSTOMIZNG";
import FAQ from "./pages/FAQ";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mintconnect-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/mint2":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/customizng":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MAIN />} />

      <Route path="/mintconnect-wallet" element={<MINTCONNECTWALLET />} />

      <Route path="/mint2" element={<MINT2 />} />

      <Route path="/about" element={<ABOUT />} />

      <Route path="/customizng" element={<CUSTOMIZNG />} />

      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
export default App;
