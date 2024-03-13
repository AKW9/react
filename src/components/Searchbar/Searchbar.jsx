import React from 'react';

function Searchbar({setKeyword}) {

  function handleChange(event) {
    setKeyword(event.currentTarget.value);
  }
  return (
    <div className="searchbar input-group">
      <span className="input-group-text"></span>
      <input placeholder="Search" type="text" className="form-control" onChange={handleChange} />
    </div>
  );
}

export default Searchbar;
