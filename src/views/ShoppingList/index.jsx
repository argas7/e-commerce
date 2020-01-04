import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { List, Navbar } from '../../components';

class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<>
				<Navbar q></Navbar>
				<List />
			</>
		);
	}
}

export default withRouter(ShoppingList);