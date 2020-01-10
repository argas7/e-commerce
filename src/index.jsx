import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Browser,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { ShoppingList, Car } from './views'
import './global/refs.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			prodAdds: [],
		};
	}

	handleAdd(add) {
		const { prodAdds } = this.state;
		this.setState({
			prodAdds: [add, ...prodAdds],
		});
	}

	handleDelete(deleteID) {
		const { prodAdds } = this.state;
		this.setState({
			prodAdds: prodAdds.filter(({ id }) => (id !== deleteID)),
		});
	}

	render () {
		const { prodAdds } = this.state;
		let lengthCar = prodAdds.length;
		return (
			<Browser>
				<div id="app">
					<Switch>
						<Route exact path="/">
							<ShoppingList add={this.handleAdd} length={lengthCar} />
						</Route>
						<Route path="/carrinho">
							<Car prodAdds={prodAdds} length={lengthCar} handleDelete={this.handleDelete} />
						</Route>
						<Route>
							<Redirect to="/" />
						</Route>
					</Switch>
				</div>
			</Browser>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
