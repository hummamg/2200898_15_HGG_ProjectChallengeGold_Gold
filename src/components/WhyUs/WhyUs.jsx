import styles from './WhyUs.module.css'
import Icon_thumb from "./../../images/icon_thumb.png"
import Icon_price from "./../../images/icon_price.png"
import Icon_hours from "./../../images/icon_hours.png"
import Icon_proff from "./../../images/icon_proff.png"

const WhyUs = () => {
    return (
        <div className={styles.whyContainer} id="whyus">
            <h2 className={styles.whyTitle}>Why Us?</h2>
            <div className={styles.whyDesc}>Mengapa harus pilih Binar Car Rental?</div>

            <div className={styles.whyList}>
                <div className={styles.whyFrame}>
                    <img src={Icon_thumb} className={styles.listIcon} />
                        <h5 className={styles.listTitle}>Mobil Lengkap</h5>
                        <p className={styles.listDesc}>
                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                </div>

                <div className={styles.whyFrame}>
                    <img src={Icon_price} className={styles.listIcon} />
                        <h5 className={styles.listTitle}>Harga Murah</h5>
                        <p className={styles.listDesc}>
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                            mobil lain
                        </p>
                </div>

                <div className={styles.whyFrame}>
                    <img src={Icon_hours} className={styles.listIcon} />
                        <h5 className={styles.listTitle}>Layanan 24 Jam</h5>
                        <p className={styles.listDesc}>
                            Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga
                            tersedia di akhir minggu
                        </p>
                </div>

                <div className={styles.whyFrame}>
                    <img src={Icon_proff} className={styles.listIcon} />
                        <h5 className={styles.listTitle}>Sopir Profesional</h5>
                        <p className={styles.listDesc}>
                            Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu
                            tepat waktu
                        </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;