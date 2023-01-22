import React from 'react';
import './TopSection.css';

export default function TopSection() {
	return (
		<section id='top-section'>
			<h1 id='top-section-title'>
				IP Address Tracker
			</h1>

			<div id='top-section-input'>
				<input type="text" placeholder='Search for any IP address or domain' />
  				<div id='top-section-input-button'>
  					<img src="images/icon-arrow.svg" alt="icon-arrow" />
  				</div>
			</div>
		</section>
	)
}