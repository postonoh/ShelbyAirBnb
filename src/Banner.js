import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from './Search';

function Banner() {
 const [showSearch, setShowShow] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1> <Search /></h1>}
        <Button onClick={()=> setShowShow(!showSearch)} className="banner__searchButton"
        variant="outlined">Search Dates</Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of getaway to uncover the gems near you.</h5>
        <Button
         variant='outlined'>Explore Nearby

        </Button>
      </div>
    </div>
  );
}

export default Banner;
