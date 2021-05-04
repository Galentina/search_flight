import React from 'react';

function Search(){


    return (
    <div style={{ display: "block", backgroundColor: 'white'}}>
        <form className="form-inline my-2 float-right ">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{maxWidth: "150px"}}/>
        <button className="btn btn-outline-success my-2 my-sm-0 float-right" type="submit">Search</button>

    </form>
    </div>
    )

}

export default Search;
