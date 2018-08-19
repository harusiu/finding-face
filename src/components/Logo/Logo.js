import React from 'react';
import Tilt from 'react-tilt';
import cat from './cat.png'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt3' style={{display: 'flex', justifyContent: 'flex-end'}}>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 70, width: 70 }} >
				<div className="Tilt-inner pa1"><img style={{paddingTop: '2px'}} alt='logo' src={cat}/></div>
			</Tilt>
		</div>
	);
}

export default Logo;