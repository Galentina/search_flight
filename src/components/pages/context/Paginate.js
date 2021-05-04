import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function Paginate(props){

    const {itemsPerPage, totalItems, pageCounter} = props;
    const pageNumbers=[];
    for (let i=1; i<=Math.ceil(totalItems/itemsPerPage); i++) { pageNumbers.push(i) };

    return (
      <nav>
          <ul className='pagination'>
              { pageNumbers.map(num => (
                  <li key={num} className='page-item'>
                      <a onClick={()=> pageCounter(num)} href='#' className='page-link'>{num}</a>
                  </li>
              ))
              }
          </ul>
      </nav>
    )
}

export default Paginate;
