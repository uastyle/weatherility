import React from 'react';

const Footer = () =>
	<footer className='footer'>

		<div className='logo' role='banner'>
			<a href='/'>
				<h3>Weatherility</h3>
			</a>
		</div>

		<div className='wrapper'>
			<p>
				<span>© 2019–2021 </span>
				<a
				className="link"
				href="https://github.com/uastyle"
				target="_blank"
				rel="noopener noreferrer me"
				aria-label="This is an external link (opens in a new tab)"
				>
				UA Style
				</a>
			</p>
		</div>
		
  	</footer>

export default Footer;