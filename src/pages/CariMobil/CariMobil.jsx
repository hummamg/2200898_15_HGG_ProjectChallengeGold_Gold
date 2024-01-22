import HeadBar from '../../components/Header/HeadBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Footer from '../../components/Footer/Footer';

const CariMobil = () => {
    return (
        <>
            <HeadBar />
            <div style={{ position: 'absolute', top: '460px' }}>
                <SearchBar />
                <Footer />
            </div>
        </>
    );
};

export default CariMobil;
