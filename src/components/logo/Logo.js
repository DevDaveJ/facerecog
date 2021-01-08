import React from 'react';
import './Logo.css';
import brain from './brain.svg';

const Logo = () => {
	return(
		<div className='mt0 mb4'>
			<div className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
			 <div className="Tilt-inner pa1">
			 	<img src={brain} alt='brain icon'/>
			 </div>
			</div>
		</div>
	);
}
export default Logo;

