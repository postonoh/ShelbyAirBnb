import React, { useState } from 'react';
import './Search.css';
import { DateRange } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };


      function handleSelect(range){
          setStartDate(range.selection.startDate);
          setEndDate(range.selection.endDate);
      }
    return (
        <div className="search">
            <h1> SHOW DATE PICKER</h1>
        </div>
    )
}

export default Search
