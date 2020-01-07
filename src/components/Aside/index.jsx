import React, { Component } from 'react'
import { Input, TopTags } from '../index.js'
import './Aside.scss'

class Aside extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
			<div id="aside">
				<Input filter={this.props.filter} />
				<TopTags data={this.props.data}/>
			</div>
			</>
		);
	}
}

export default Aside;