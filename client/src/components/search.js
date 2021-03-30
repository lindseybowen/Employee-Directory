import React from "react";

function Search(props) {
  return (
    <>
      <div className="input-group flex-nowrap">
        <input
          type="search"
          className="search"
          placeholder={props.placeholder}
          onChange = {props.handleChange}
        />
      </div>
    </>
  );
}

export default Search