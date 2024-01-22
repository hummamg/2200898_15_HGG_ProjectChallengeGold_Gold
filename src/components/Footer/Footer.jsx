import styles from './Footer.module.css';
import Rectangle from './../../images/img_blrect.png';
import List from './../../images/img_listitem.png';

const Footer = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.footerAddress}>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>

                <div className={styles.footerNav}>
                    <p>Our Services</p>
                    <p>Why Us?</p>
                    <p>Testimonial</p>
                    <p>FAQ</p>
                </div>

                <div className={styles.footerSosmed}>
                    <p>Connect With Us!</p>
                    <img src={List} />
                </div>

                <div className={styles.footerCopy}>
                    <p>Copyright Binar 2022</p>
                    <img src={Rectangle} />
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
                integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
                crossorigin="anonymous"></script>
        </div>
    );
};

export default Footer;