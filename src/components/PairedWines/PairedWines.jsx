import React, { useEffect, useState } from 'react';
import { Typography, Box, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getPairedWines } from '../../api/ApiCalls.js';
import { render } from '@testing-library/react';
import Header from '../Header/Header.jsx';
import './PariedWines_styles.css';

const PairedWines = () => {

  const [food, setFood] = useState([]);
  const [pairedWines, setPairedWines] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setFood(searchText);
  };

  function handleSubmit(event) {
   event.preventDefault();
    getPairedWines(food).then
      (data => {
        setPairedWines(data);
        // console.log(data) 
      })
  };


  return (
    <div className='collectionContainer'>
      <Header />
      <div className='search_section'>
        <form onSubmit={handleSubmit}>
          <h1 className='search_title'>Find a wine that goes well with a food.</h1>
          <div className='serch_bar'>
            <input className='search_input' type="text" placeholder="Search…" name="searchText" onChange={handleChange} required value={food} />
            <button className='search_button' type="submit">
              Search
            </button>
          </div>
        </form>
        <div className='tags_section'>
          <div>Try these popular tags</div>
          <div className='tag_buttons'>
          <button className='tag_button' onClick={()=>setFood("Steak")}>Steak</button>
          <button className='tag_button' onClick={()=>setFood("Sushi")}>Sushi</button>
          <button className='tag_button' onClick={()=>setFood("Barbecue")}>Barbecue</button>
          </div>
        </div>
        {pairedWines.message ?
          (<div>
            {pairedWines.message}
          </div>)
          :
          null}
        {
          pairedWines.pairedWines ?
            (<p>Here's the paried Wines for you</p>):null
        }
        {pairedWines.pairedWines?.map(pairedWine => (
          <div>
            <p>{pairedWine}</p>
          </div>
        ))}
      </div>
      { pairedWines.productMatches ?
      (
            <div>
              <p>Here's a matched product for you. Bon Appetit!</p>
              <img src={`${pairedWines.productMatches[0].imageUrl}`} alt="matchedWine" onClick={() => window.open(`${pairedWines.productMatches[0].link}`)} />
              <p>{pairedWines.productMatches[0].title}</p>
              <p variant='body2' color="secondary" >{pairedWines.productMatches[0].description} </p>
              <p>{pairedWines.productMatches[0].price}</p>
            </div>
          )
          :
          null
      }
    </div>
  )

};

export default PairedWines;
