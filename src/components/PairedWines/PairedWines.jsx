import React, { useState } from 'react';
import { getPairedWines } from '../../api/ApiCalls.js';
import Header from '../Header/Header.jsx';
import WineBarRoundedIcon from '@mui/icons-material/WineBarRounded';
import './PairedWines_styles.css';

const PairedWines = () => {

  const [food, setFood] = useState([]);
  const [pairedWines, setPairedWines] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setFood(searchText);
  };

  //submit search text to get paired wines by api call
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
      <div className='outer_section'>
        <form onSubmit={handleSubmit}>
          <h1 className='search_title'>Find a wine that goes well with a food.</h1>
          <div className='serch_bar'>
            <input className='search_input' type="text" placeholder="Search…" name="searchText" onChange={handleChange} required value={food} />
            <button className='search_button' type="submit">
              Search
            </button>
          </div>
        </form>
        <div className='inner_section'>
          <div>Cant think of anything? Try these popular tags and click search</div>
          <div className='tag_buttons'>
            <button className='tag_button' onClick={() => setFood("Steak")}>Steak</button>
            <button className='tag_button' onClick={() => setFood("Sushi")}>Sushi</button>
            <button className='tag_button' onClick={() => setFood("Barbecue")}>Barbecue</button>
          </div>
        </div>

        <div className='inner_section'>
          {pairedWines.message ? //when there is no paired wines, display message
            (<div>
              {pairedWines.message}
            </div>)
            :
            null}
          {
            pairedWines.pairedWines ? //display paired wines
              (<p>Paired Wines for {food} are:</p>) : null
          }
          {pairedWines.pairedWines?.map(pairedWine => (
            <div className='paired_result'>
              <WineBarRoundedIcon color="action"/><p>{pairedWine}</p>
            </div>
          ))}
        </div>

        <div className='inner_section'>
          {pairedWines.productMatches ?
            (
              <div>
                <p>Here's a recommended product for you. Bon Appetit!</p>
                <div className='recommend_wine_container'>
                <img className='recommend_wine' src={`${pairedWines.productMatches[0].imageUrl}`} alt="matchedWine" onClick={() => window.open(`${pairedWines.productMatches[0].link}`)} />
                </div>
                <p>{pairedWines.productMatches[0].title}</p>
                <p variant='body2' color="secondary" >{pairedWines.productMatches[0].description} </p>
                <p>{pairedWines.productMatches[0].price}</p>
                <button className='knowmore_button' onClick={() => window.open(`${pairedWines.productMatches[0].link}`)}>Know More</button>
              </div>
            )
            :
            null
          }
        </div>
      </div>
    </div>
  )
};

export default PairedWines;
