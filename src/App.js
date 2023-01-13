import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import MAIN from "./pages/MAIN";

import MINTCONNECTWALLET from "./pages/MINTCONNECTWALLET";
import MINT2 from "./pages/MINT2";
import RESULTPAGE from "./pages/RESULTPAGE";

import GALLERYCONNECTWALLET from "./pages/GALLERYCONNECTWALLET";
import MYGALLERY from "./pages/MYGALLERY";

import ABOUT from "./pages/ABOUT";
import HOWTOUSE from "./pages/HOWTOUSE";
import ROADMAP from "./pages/ROADMAP";
import TEAM from "./pages/TEAM";
import PARTNERS from "./pages/PARTNERS";

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
      case "/result-page":
        title = "";
        metaDescription = "";
        break;

      case "/gallery":
        title = "";
        metaDescription = "";
        break;
      case "/my-gallery":
        title = "";
        metaDescription = "";
        break;

      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/howtouse":
        title = "";
        metaDescription = "";
        break;

      case "/roadmap":
        title = "";
        metaDescription = "";
        break;
      case "/team":
        title = "";
        metaDescription = "";
        break;
      case "/partners":
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
      <Route path="/result-page" element={<RESULTPAGE />} />

      <Route path="/gallery" element={<GALLERYCONNECTWALLET />} />
      <Route path="/my-gallery" element={<MYGALLERY />} />

      <Route path="/about" element={<ABOUT />} />
      <Route path="/howtouse" element={<HOWTOUSE />} />

      <Route path="/roadmap" element={<ROADMAP />} />
      <Route path="/team" element={<TEAM />} />
      <Route path="/partners" element={<PARTNERS />} />
    </Routes>
  );
}
export default App;
