import React from 'react';

function FilterMovies({ filterOptions, onFilterChange }) {
  function handleFilterChange(filter, value){
    onFilterChange(filter, value);
  };

  return (
    <div className="filter-options">
      <label>
        Rating:
        <select value={filterOptions.rating || ''} onChange={(e) => handleFilterChange('rating', e.target.value)}>
          <option value="0">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <label>
        Name:
        <select value={filterOptions.nameSort} onChange={(e) => handleFilterChange('nameSort', e.target.value)}>
          <option value="asc">A to Z</option>
          <option value="desc">Z to A</option>
        </select>
      </label>

      <label>
        Language:
        <select value={filterOptions.language || ''} onChange={(e) => handleFilterChange('language', e.target.value)}>
          <option value="">All</option>
          
        </select>
      </label>
    </div>
  );

  }
export default FilterMovies;