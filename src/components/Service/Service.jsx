import styles from './Service.module.css';
import Img_service from "./../../images/img_service.png";
import Icon_check from "./../../images/icon_check.png";

const Service = () => {
    return (
        <div className={styles.serviceContainer} id="ourservice">
            <div className={styles.imgFrame}>
                <img src={Img_service} className={styles.imgService} />
                <div>
                    <h2 className={styles.serviceTitle}>
                        Best Car Rental for any kind of trip in Soreang!
                    </h2>
                    <p className={styles.serviceDesc}>
                        Sewa mobil di Soreang bersama Binar Car Rental jaminan harga lebih
                        murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                        pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                        dll.
                    </p>

                    <div className={styles.serviceFrame}>
                        <span>
                            <img src={Icon_check} className={styles.serviceCheck} />
                            <b className={styles.serviceList}>Sewa Mobil Dengan Supir di Bali 12 Jam</b>
                        </span>
                        <span>
                            <img src={Icon_check} className={styles.serviceCheck} />
                            <b className={styles.serviceList}>Sewa Mobil Lepas Kunci di Bali 24 Jam</b>
                        </span>
                        <span>
                            <img src={Icon_check} className={styles.serviceCheck} />
                            <b className={styles.serviceList}>Sewa Mobil Jangka Panjang Bulanan</b>
                        </span>
                        <span>
                            <img src={Icon_check} className={styles.serviceCheck} />
                            <b className={styles.serviceList}>Gratis Antar - Jemput Mobil di Bandara</b>
                        </span>
                        <span>
                            <img src={Icon_check} className="serviceCheck" />
                            <b className="serviceList">Layanan Airport Transfer / Drop In Out</b>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;