import styles from './SewaMobil.module.css';
import { useNavigate } from "react-router-dom";

const SewaMobil = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.sewaContainer}>
            <h2 className={styles.sewaTitle}>Sewa Mobil di Soreang Sekarang!</h2>
            <p className={styles.sewaDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className={styles.sewaButton} onClick={() => navigate('/carimobil')}>Mulai Sewa Mobil</button>
        </div>
    );
};

export default SewaMobil;