import React from 'react';

const Header = () =>
  <header className='header'>
    	<div className='logo' role='banner'>
			<a href='/'>
				<h3>Weatherility</h3>
				<div className="morphing">
					<p className="word">— weather forecast</p>
					<p className="word">without devilry!</p>
				</div>
				
			</a>
		</div>
  </header>

export default Header;