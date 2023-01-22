import React from 'react';
import './InfoSection.css';

export default function InfoSection() {
	return (
		<section id='info-section'>
			<div id='info-ip'>
				<div>
					IP Address
				</div>
			</div>
			<div id='info-location'>
				<div>
					Location
				</div>
			</div>
			<div id='info-timezone'>
				<div>
					Timezone
				</div>
			  	UTC 
			</div>
			<div id='info-isp'>
				<div>
					ISP
				</div>
			</div>
		</section>
	)
}