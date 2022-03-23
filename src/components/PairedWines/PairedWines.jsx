import React, { useEffect, useState } from 'react';
import { Typography, Box, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getPairedWines } from '../../api/ApiCalls.js';
import { render } from '@testing-library/react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant='h6'>Find a wine that goes well with a food.</Typography>
        <InputBase placeholder="Search…" name="searchText" onChange={handleChange} />
        <Button type="submit">
          Search
        </Button>
      </form>

      {pairedWines.message ?
        (<div>
          {pairedWines.message}
        </div>)
        :
        <Typography>Here's the paried Wines for you</Typography>}

        {pairedWines.pairedWines?.map(pairedWine=>(
          <div>

          <Typography>{pairedWine}</Typography>
          </div>
        ))}

      {
        pairedWines.productMatches
          ?
          (
            <div>
            <Typography>Here's matched product for you. Bon Appetit!</Typography>
              <img src={`${pairedWines.productMatches[0].imageUrl}`} alt="matchedWine" onClick={()=>window.open(`${pairedWines.productMatches[0].link}`)}/>
              <Typography>{pairedWines.productMatches[0].title}</Typography>
              <Typography variant='body2' color="secondary" >{pairedWines.productMatches[0].description} </Typography>
              <Typography>{pairedWines.productMatches[0].price}</Typography>
            </div>
          )
          :
          null
        }
    </div>
  )

};

export default PairedWines;
