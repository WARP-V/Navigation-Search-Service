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
				  <div className="sub-nav">
				  	<span className="sub-nav-header"> Men Shoes 
				  	  <ul>
				        <li className="sub-nav-item"> SNKRS Launch Calendar </li>
				        <li className="sub-nav-item"> Lifestyle </li>
				        <li className="sub-nav-item"> Running</li>
				        <li className="sub-nav-item"> Training & Gym </li>
				        <li className="sub-nav-item"> Basketball </li>
				        <li className="sub-nav-item"> Jordan </li>
				        <li className="sub-nav-item"> Football </li>
				        <li className="sub-nav-item"> Soccer </li>
				        <li className="sub-nav-item"> Baseball </li>
				        <li className="sub-nav-item"> Golf</li>
				        <li className="sub-nav-item"> Skateboarding </li>
				        <li className="sub-nav-item"> Tennis</li>
				        <li className="sub-nav-item"> Boots</li>
				        <li className="sub-nav-item"> All Shoes</li>					
				  	  </ul>
				    </span> 
				  </div>
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> WOMEN </span>
				  </a> 
				  <div className="sub-nav1">
				  	<span className="sub-nav-header"> Woemen Shoes
				  	 <ul>
				       <li className="sub-nav-item"> SNKRS Launch Calendar </li>
				       <li className="sub-nav-item"> Lifestyle </li>
				       <li className="sub-nav-item"> Running</li>
				       <li className="sub-nav-item"> Training & Gym </li>
				       <li className="sub-nav-item"> Basketball </li>
				       <li className="sub-nav-item"> Jordan </li>
				       <li className="sub-nav-item"> Football </li>
				       <li className="sub-nav-item"> Soccer </li>
				       <li className="sub-nav-item"> Baseball </li>
				       <li className="sub-nav-item"> Golf</li>
				       <li className="sub-nav-item"> Skateboarding </li>
				       <li className="sub-nav-item"> Tennis</li>
				       <li className="sub-nav-item"> Boots</li>
				       <li className="sub-nav-item"> All Shoes</li>					
				  	 </ul>
				    </span> 
				  </div>
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> KIDS </span>
				  </a> 
				  <div className="sub-nav2">
				  	<span className="sub-nav-header"> Kids' Shoes
				  	 <ul>
				       <li className="sub-nav-item"> SNKRS Launch Calendar </li>
				       <li className="sub-nav-item"> Lifestyle </li>
				       <li className="sub-nav-item"> Running</li>
				       <li className="sub-nav-item"> Training & Gym </li>
				       <li className="sub-nav-item"> Basketball </li>
				       <li className="sub-nav-item"> Jordan </li>
				       <li className="sub-nav-item"> Football </li>
				       <li className="sub-nav-item"> Soccer </li>
				       <li className="sub-nav-item"> Baseball </li>
				       <li className="sub-nav-item"> Golf</li>
				       <li className="sub-nav-item"> Skateboarding </li>
				       <li className="sub-nav-item"> Tennis</li>
				       <li className="sub-nav-item"> Boots</li>
				       <li className="sub-nav-item"> All Shoes</li>					
				  	 </ul>
				    </span> 
				  </div>
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> CUSTOMIZE </span>
				  </a> 
				  <div className="sub-nav3">
				  	<span className="sub-nav-header"> Customize It
				  	 <ul>
				       <li className="sub-nav-item"> Lifestyle </li>
				       <li className="sub-nav-item"> Running </li>
				       <li className="sub-nav-item"> Football </li>
				       <li className="sub-nav-item"> Training </li>
				       <li className="sub-nav-item"> Basketball </li>
				       <li className="sub-nav-item"> Jordan </li>
				       <li className="sub-nav-item"> Football </li>
				       <li className="sub-nav-item"> Soccer </li>
				       <li className="sub-nav-item"> Baseball </li>
				       <li className="sub-nav-item"> Golf</li>
				       <li className="sub-nav-item"> Skateboarding </li>
				       <li className="sub-nav-item"> Tennis</li>
				       <li className="sub-nav-item"> Boots</li>
				  	 </ul>
				    </span> 
				  </div>
				</li>
				<li className="gnav-bar--sections gnav-bar--section">
				  <a  className="gnav-bar--sections-tab" href="/">
				  	<span className="nsg-font-family--platform gnav-bar--facet-label"> FAVORITES </span>
				  </a> 
				  <div className="sub-nav4">
				  	<span className="sub-nav-header"> Specials
				  	 <ul>
				       <li className="sub-nav-item"> EXP-X14 </li>
				       <li className="sub-nav-item"> Air Max 270 </li>
				       <li className="sub-nav-item"> Nike React </li>
				       <li className="sub-nav-item"> Air Force 1 </li>
				       <li className="sub-nav-item"> VaporMax </li>
				       <li className="sub-nav-item"> Metcon </li>
				       <li className="sub-nav-item"> Huarache </li>
				       <li className="sub-nav-item"> Air Max 97 </li>
				       <li className="sub-nav-item"> Free RN </li>
				       <li className="sub-nav-item"> Jordan 1</li>
				       <li className="sub-nav-item"> Kyrie </li>
				       <li className="sub-nav-item"> Pegasus</li>
				  	 </ul>
				    </span> 
				  </div>
				</li>
			</ul>
            <div className="searchPlaceHolder">
              <Search />
		    </div>

		  </div>
		</nav>
);

export default toolbar;