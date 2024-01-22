import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { Form, Card, Row } from 'react-bootstrap';
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [cars, setCars] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [rent, setRent] = useState('');

  const ChangeCat = (event) => {
    const value = event.target.value;
    setCategory(value);
  };

  const ChangePrice = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const ChangeRent = (event) => {
    const value = event.target.value;
    setRent(value);
  };

  const handleClick = async () => {
    try {
      const response = await axios.get("https://api-car-rental.binaracademy.org/admin/v2/car", {
        headers: {
          access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
        },
        params: {
          name,
          category,
          minPrice: price,
          isRented: rent,
        },
      }
      );
      setCars(response.data.cars);
    } catch (e) {
      console.error("Proses fetch gagal");
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <div className={styles.searchLayout}>
          <div id="inputMobil">
            <div className={styles.searchTitle} style={{ width: "208px" }}>Nama Mobil</div>
            <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "208px" }} type="text" className={styles.searchText} placeholder="Ketik Nama/Tipe Mobil" />
          </div>

          <div>
            <div className={styles.searchTitle} style={{ width: "208px" }}>Kategori</div>
            <Form.Select onChange={ChangeCat} className={styles.searchText}>
              <select value={category} onChange={(e) => setCat(e.target.value)} style={{ width: "208px" }} />
              <option value="">Masukan Kapasitas Mobil</option>
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </Form.Select>
          </div>

          <div>
            <div className={styles.searchTitle} style={{ width: "219px" }}>Harga</div>
            <Form.Select onChange={ChangePrice} className={styles.searchText}>
              <select value={price} onChange={(e) => setPrice(e.target.value)} style={{ width: "220px" }} />
              <option value="">Masukan Harga Sewa Per Hari</option>
              <option value="100">&lt; Rp. 400.000</option>
              <option value="&gt; 400">Rp. 400.000 - 600.000</option>
              <option value="600">&gt; Rp. 600.000</option>
            </Form.Select>
          </div>

          <div>
            <div className={styles.searchTitle} style={{ width: "208px" }}>Status</div>
            <Form.Select onChange={ChangeRent} className={styles.searchText}>
              <select value={rent} onChange={(e) => setRent(e.target.value)} />
              <option value="true">Disewa</option>
              <option value="false">Tidak Disewa</option>
            </Form.Select>
          </div>

          <div>
            <br></br>
            <button onClick={handleClick} className={styles.searchButton}>Cari Mobil</button>
          </div>
        </div>
      </div>

      <div>
        <Card className={styles.cardContainer}>
          <Card.Body className={styles.cardFrame}>
            <Row md={3}>
              {cars.map(car =>
                <div key={car.id}  className={styles.cardList}>
                    <Card.Img className={styles.cardImage} src={car.image} />
                    <Card.Title className={styles.cardTitle}>{car.name}</Card.Title>
                    <Card.Subtitle className={styles.cardPrice}>Rp {car.price} / hari</Card.Subtitle>
                    <Card.Text className={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                    <Link key={car.name} to={`/detailpaket/${car.name}/${car.category}/${car.price}`} style={{ cursor: "pointer" }}><button className={styles.cardButton}>Pilih Mobil</button></Link>
                </div>
              )}
            </Row>
          </Card.Body>
        </Card>
      </div >
    </>
  );
};

export default SearchBar;
