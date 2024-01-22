import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import HeadBar from '../../components/Header/HeadBar.jsx';
import Service from '../../components/Service/Service.jsx';
import WhyUs from '../../components/WhyUs/WhyUs.jsx';
import Testimoni from '../../components/Testimoni/Testimoni.jsx';
import SewaMobil from '../../components/SewaMobil/SewaMobil.jsx';
import FAQ from '../../components/FAQ/FAQ.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const LandingPage = () => {
  return (
    <>
    <HeadBar/>
    <Service/>
    <WhyUs/>
    <Testimoni/>
    <SewaMobil/>
    <FAQ/>
    <Footer/>
    </>
    );
};

export default LandingPage;
