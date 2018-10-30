import React from 'react';


const toolbar = props => (
	<header className="toolbar">
		<nav className="tooolbar_navigation">
			<div> </div>
			<div className="toolbar_logo"><a href="/"> LOGO </a></div>
			<div className="navigation_tooolbar_items"> 
				<ul>
					<li><a href="/"> MEN </a> </li>
					<li><a href="/"> WOMEN </a> </li>
					<li><a href="/"> KIDS </a> </li>
					<li><a href="/"> CUSTOMIZE </a> </li>
					<li><a href="/"> FAVORITES </a> </li>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;