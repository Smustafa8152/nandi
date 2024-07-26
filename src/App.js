import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import News from "./pages/news";
import OurFocus from "./pages/our-focus";
import Team from "./pages/team";
import NaandiVenturesLandingPageO from "./pages/naandi-ventures-landing-page-o";
import SignUp from "./pages/sign-up";

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
      case "/our-focus":
        title = "";
        metaDescription = "";
        break;
      case "/team":
        title = "";
        metaDescription = "";
        break;
      case "/02-naandi-ventures-landing-page-option-6":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
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
      <Route path="/"         element={<NaandiVenturesLandingPageO />}
      />
      <Route path="/our-focus" element={<OurFocus />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<News />} />

   
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
