import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header-styles.css';


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
    <div className='navContainer'>
      <div className='navLogo' onClick={()=>  navigate("/")}>Reciplore</div>
      <div className='links'>
        <Link color="inherit" to="/recipe">Explore Recipes</Link>
        <Link color="inherit" to="/pairedwines">Wine Pairing</Link>
      </div>
      </div>
    </div>
  )
}

export default Header
