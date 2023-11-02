import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/PostBook.css';
import Header from './Header';
import Footer from './Footer';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

const defaultCenter = {
  lat: 51.505,
  lng: -0.09,
};

function PostBook() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    ISBN: '',
    publication_year: '',
    condition: '',
    price_per_day: '',
    location: {
      lat: 51.505,
      lng: -0.09,
    },
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleLocationChange = (latlng) => {
    setBookData({ ...bookData, location: latlng });
  };

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat, lng)
    setBookData((prevData) => ({
      ...prevData,
      location: { lat, lng }
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found. Please log in.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/postbook', bookData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      alert('Book posted successfully');
    } catch (error) {
      console.error('Error posting book:', error.response.data);
      alert('Error posting book');
    }
  };

  return (
    <div>
     <Header />
    <div className="post-book-container">
      <form onSubmit={handleSubmit} className="post-book-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={bookData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" name="author" value={bookData.author} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input type="text" name="genre" value={bookData.genre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ISBN:</label>
          <input type="text" name="ISBN" value={bookData.ISBN} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Publication Year:</label>
          <input type="number" name="publication_year" value={bookData.publication_year} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Condition:</label>
          <input type="text" name="condition" value={bookData.condition} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price Per Day:</label>
          <input type="number" name="price_per_day" value={bookData.price_per_day} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={bookData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={defaultCenter}
              zoom={13}
              onClick={onMapClick}
            >
              <Marker key={`${bookData.location.lat}-${bookData.location.lng}`} position={bookData.location} />

            </GoogleMap>
          </LoadScript>
        </div>

        <button type="submit" className="submit-button">Post Book</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}

export default PostBook;