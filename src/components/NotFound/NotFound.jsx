import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './NotFound_styles.css';

const NotFound = () => {
  return (
    <div className='collectionContainer'>
      <Header />
      <div className='not_found'>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
}

export default NotFound;