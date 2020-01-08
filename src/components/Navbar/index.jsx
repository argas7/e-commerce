import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.scss';

function Navbar({length}) {
	return (
		<div id="nav-bar">
			<Link to="/"><p>E-commerce que não vende nada de interessante</p></Link>
			<Link to="/carrinho"><button type="button" /></Link>
			{(length > 0) ? <span className="lengthCar">{length}</span> : false}
		</div>
	);
}

Navbar.propTypes = {
	length: PropTypes.number,
}

Navbar.defaultProps = {
	length: 0,
}

export default Navbar;
