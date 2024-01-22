import { useParams } from 'react-router-dom';
import WhiteCar from './../../images/img_whitecar.png'
import ChevronUp from './../../images/icon_chevronup.png';
import Users from './../../images/icon_users.png';
import styles from './DetailMobil.module.css';

const DetailMobil = () => {
    const params = useParams();
    const { name, category, price } = params;

    return (
        <div className={styles.detailContainer}>
            <div className={styles.paketContainer}>
                <div className={styles.paketTitle}>Tentang Paket</div>
                <div className={styles.paketTitle}>Include</div>
                <div className={styles.paketText}>
                    <ul>
                        <li><div>Apa saja yang termasuk dalam paket misal durasi max 12 jam</div></li>
                        <li><div>Sudah termasuk bensin selama 12 jam</div></li>
                        <li><div>Sudah termasuk Tiket Wisata</div></li>
                        <li><div>Sudah termasuk pajak</div></li>
                    </ul>
                </div>
                <div className={styles.paketTitle}>Exclude</div>
                <div className={styles.paketText}>
                    <ul>
                        <li><div>Jika termasuk biaya makan sopir Rp 75.000/hari</div></li>
                        <li><div>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</div></li>
                        <li><div>Tidak termasuk akomodasi penginapan</div></li>
                    </ul>
                </div>
                <div className={styles.paketTitle}>Refund, Reschedule, Overtime <img src={ChevronUp} /></div>
                <div className={styles.paketText}>
                    <ul>
                        <li><div>Jika termasuk biaya makan sopir Rp 75.000/hari</div></li>
                        <li><div>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</div></li>
                        <li><div>Tidak termasuk akomodasi penginapan</div></li>
                        <li><div>Jika termasuk biaya makan sopir Rp 75.000/hari</div></li>
                        <li><div>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</div></li>
                        <li><div>Tidak termasuk akomodasi penginapan</div></li>
                        <li><div>Jika termasuk biaya makan sopir Rp 75.000/hari</div></li>
                        <li><div>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</div></li>
                        <li><div>Tidak termasuk akomodasi penginapan</div></li>
                    </ul>
                </div>

            </div>

            <div className={styles.carContainer}>
                <img src={WhiteCar} className={styles.carImage} />
                <div className={styles.carTitle}>{name}</div>
                <div className={styles.categoryText}>
                    <img src={Users} style={{ paddingRight: "4px" }} />{category}</div>
                <div className={styles.totalPrice}>
                    <div>Total</div>
                    <div>Rp {price}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailMobil;