import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '28px', marginTop:'-30px'}}>
				<p onClick={() => onRouteChange('signout')} className='f5 link dim mid-gray pr2 pointer'> Sign out </p>
			</nav>	
		);		
	} else {
		return(
			<nav style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '30px', marginTop:'-35px'}}>
				<p onClick={() => onRouteChange('signin')} className='f5 link dim mid-gray pr2 pointer'> Sign In </p>
				<p onClick={() => onRouteChange('register')} className='f5 link dim mid-gray pr2 pointer' style={{marginTop: '-10px'}}> Register </p>
			</nav>
		);	
	}
}

export default Navigation;

