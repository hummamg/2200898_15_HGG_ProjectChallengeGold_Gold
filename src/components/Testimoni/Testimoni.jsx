import styles from './Testimoni.module.css';
import Img_photo from "./../../images/img_photo.png"
import Img_photo1 from "./../../images/img_photo1.png"
import Icon_rate from "./../../images/icon_rate.png"
import Icon_left from "./../../images/icon_left.png"
import Icon_right from "./../../images/icon_right.png"

const Testimoni = () => {
    return (
        <div className={styles.testiContainer} id="testimoni">
            <h2 className={styles.testiTitle}>Testimonial</h2>
            <p className={styles.testiDesc}>Berbagai review positif dari para pelanggan kami</p>

            <div className={styles.testiFrame}>
                <div id="carousel" className="carousel slide">
                    <div>
                        <div className="carousel-item">
                            <div className={styles.testiReview}>
                                <img src={Img_photo} className={styles.testiIcon} />
                                <div>
                                    <img src={Icon_rate} className={styles.testiRate} />
                                    <p className={styles.testiText}>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod”
                                    </p>
                                    <p className={styles.testiDate}>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item active">
                            <div className={styles.testiReview}>
                                <img src={Img_photo} className={styles.testiIcon} />
                                <div>
                                    <img src={Icon_rate} className={styles.testiRate} />
                                    <p className={styles.testiText}>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod”
                                    </p>
                                    <p className={styles.testiDate}>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className={styles.testiReview}>
                                <img src={Img_photo1} className={styles.testiIcon} />
                                <div>
                                    <img src={Icon_rate} className={styles.testiRate} />
                                    <p className={styles.testiText}>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod”
                                    </p>
                                    <p className={styles.testiDate}>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className={`carousel-control-prev ${styles.carouselPrev}`} type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <img src={Icon_left} />
                    </button>
                    <button className={`carousel-control-next ${styles.carouselNext}`} type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <img src={Icon_right} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimoni;