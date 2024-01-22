import styles from './HeadBar.module.css';
import { Link, useNavigate } from "react-router-dom";
import Rectangle from "./../../images/img_blrect.png"
import Car from "./../../images/img_car.png"

const HeadBar = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <div className={styles.headNavbar}>
                <img src={Rectangle} width="100px" height="34px" />
                <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbarContainer}`}>
                    <div className={styles.headContainer}>
                        <button className={`navbar-toggler ${styles.navbarButtonToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" role="button"><Link to="/#ourservice">Our Service</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" role="button"><Link to="/#whyus">Why Us</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" role="button"><Link to="/#testimoni">Testimoni</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" role="button"><Link to="/#faq">FAQ</Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className={styles.headFrame}>
                <div>
                    <h1 className={styles.headTitle}>Sewa & Rental Mobil Terbaik di kawasan Soreang</h1>
                    <p className={styles.headDesc}>
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam.
                    </p>

                    <button className={styles.headButton} onClick={() => navigate('/carimobil')}>Mulai Sewa Mobil</button>
                </div>
                <img src={Car} className={styles.imgCar} />
            </div>
        </div >
    );
};

export default HeadBar;