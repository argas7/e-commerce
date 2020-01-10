import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			value: ''
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		const { filter } = this.props;
		const { value } = this.state;
		filter({
			filterTag: value
		})
		this.setState({
			value: '',
		});
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
		});
	}

	render(){
		const { value } = this.state;
		return (
			<div className="input-container">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={value} onChange={this.handleChange} placeholder="Search" />
					<button type="submit">Search</button>
				</form>
			</div>
		);
	}
}

Input.propTypes = {
	filter: PropTypes.func,
};

Input.defaultProps = {
  filter: () => { },
};

export default Input;
