import Navbar from '../../components/Header/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';
import DetailMobil from '../../components/DetailMobil/DetailMobil';

const DetailPaket = () => {
    return (
        <>
            <Navbar />
            <div style={{ position: 'absolute', top: '296px' }}>
                <SearchBar />
                <DetailMobil />
                <Footer />
            </div>
        </>
    );
};

export default DetailPaket;