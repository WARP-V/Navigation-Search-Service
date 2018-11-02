import React from 'react';
import Search from './Search.jsx';

const toolbar = props => (
		<nav className="gnav">
		  <div className="gnav-bar">
			<div className="gnav-bar--home">  
			   <a href="/"> LOGO </a>
			</div>
			<ul className="gnav-bar--sections">
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/" >
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> MEN </span>
				  </a> 
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> WOMEN </span>
				  </a> 
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> KIDS </span>
				  </a> 
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> CUSTOMIZE </span>
				  </a> 
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> FAVORITES </span>
				  </a> 
				</li>
			</ul>
            <div className="searchPlaceHolder">
              <Search />
		    </div>

		  </div>
		</nav>
);

export default toolbar;