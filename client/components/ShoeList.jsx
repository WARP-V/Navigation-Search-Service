import React from 'react';
import Search from './Search.jsx';

//props is an object with key List
const ShoeList = (props) => {
	return (
  <div className="search-result-main">
    {props.shoes.map(shoe => (
      <div className="search-result-container" key={ shoe.shoeID }>
      		<div>
		      <div className="data-css-qty32y">
		      	<section className="vs-shell z1 vs-results" data-css-1owpec4>
		      	  <div className="results__animation-wrapper" data-css-1d3ktrz>
		      	  	<div className="z1" data-css-1u0znbn>
		      	  	  <div className="visual-results__items" data-css-vi3riu>
		      	  	  	<div className="search-result-container-item">
		      	  	  	  <ul className="pl0-sm mt-3-sm mb-3-sm mb3-lg">
		      	  	  	    <li> <img width="50" height="50" src={shoe.imageUrls[0]} /> 
		      	  	  	    	{ shoe.name } 
		      	  	  		</li> 
		      	  	  	  </ul>
		      	  	  	</div>
		      	  	  </div>
		      	  	</div>
		      	  </div>
		      	</section>
		      </div>
		    </div>
      </div>)
    )}
  </div>
);
}

export default ShoeList;