import styles from './FAQ.module.css';

const FAQ = () => {
    return (
        <div className={styles.faqContainer} id="faq">
            <div>
                <h2 className={styles.faqTitle}>Frequently Asked Question</h2>
                <p className={styles.faqDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </div>

            <div className={`accordion ${styles.accordionTitle}`} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" fdprocessedid="vnpmr">
                            <b className={styles.accordionText}>
                                Apa saja syarat yang dibutuhkan?
                            </b>
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" fdprocessedid="vnpmr">
                            <b className={styles.accordionText}>
                                Berapa hari minimal sewa mobil lepas kunci?
                            </b>
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" fdprocessedid="vnpmr">
                            <b className={styles.accordionText}>
                                Berapa hari sebelumnya sebaiknya booking sewa mobil?
                            </b>
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" fdprocessedid="vnpmr">
                            <b className={styles.accordionText}>
                                Apakah ada biaya antar-jemput?
                            </b>
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" fdprocessedid="vnpmr">
                            <b className={styles.accordionText}>
                                Bagaimana jika terjadi kecelakaan?
                            </b>
                        </button>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default FAQ;