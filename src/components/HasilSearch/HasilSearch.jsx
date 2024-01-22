import { Card, Row } from 'react-bootstrap';
import { useState } from 'react';
import styles from './HasilSearch.module.css';

const HasilSearch = () => {
    const [cars, setCars] = useState([]);

    return (
        <div>
            <Card className={styles.cardContainer}>
                <Card.Body className={styles.cardFrame}>
                    <Row md={3}>
                        {cars.map(car =>
                            <div key={car.id} className={styles.cardList}>
                                <Card.Img className={styles.cardImage} src={car.image} />
                                <Card.Title className={styles.cardTitle}>{car.name}</Card.Title>
                                <Card.Subtitle className={styles.cardPrice}>Rp {car.price} / hari</Card.Subtitle>
                                <Card.Text className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                                <Link key={car.name} to={`/detailpaket/${car.name}`} style={{ cursor: "pointer" }}><button className={styles.cardButton}>Pilih Mobil</button></Link>
                            </div>
                        )}
                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
};

export default HasilSearch;