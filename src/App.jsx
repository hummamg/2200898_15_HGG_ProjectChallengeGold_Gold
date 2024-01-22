import { useLocation, Routes, Route } from 'react-router-dom'
import { useEffect, } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import CariMobil from './pages/CariMobil/CariMobil.jsx'
import DetailPaket from './pages/DetailPaket/DetailPaket.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  
  return (
    <>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/carimobil" element={<CariMobil />} />
          <Route exact path="/detailpaket" element={<DetailPaket />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
