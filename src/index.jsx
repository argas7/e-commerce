import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Browser,
	Switch,
	Route,
} from 'react-router-dom';
import { ShoppingList, Car } from './views'
import './global/refs.scss';

function App() {
	return (
		<Browser>
			<div id="app">
				<Switch>
					<Route exact path="/" component={ShoppingList} />
					<Route path="/carrinho" component={Car} />
				</Switch>
			</div>
		</Browser>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
