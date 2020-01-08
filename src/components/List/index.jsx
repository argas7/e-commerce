import React, { Component } from 'react';
import Shopping from '../Shopping';
import './List.scss';

class List extends Component {
	constructor(props) {
		super(props);
		this.filterElements = this.filterElements.bind(this);
		this.showElements = this.showElements.bind(this);
		this.state = {};
	}

	filterElements(arrData, filterTag) {
		return (
			arrData.filter(({arrTags}) => {
				for(let i = 0; i < arrTags.length; i++) {
					if(arrTags[i] === filterTag.filterTag) {
						return true;
					}
				}
				return false;
			})
		);
	}

	showElements(arrData) {
		return (
			arrData.map((shopping, index) => (
				<Shopping 
					key={index}
					name={shopping.name}
					urlImage={shopping.urlImage}
					text={shopping.text}
					arrTags={shopping.arrTags}
					add={this.props.add}
				/>
			))
		);
	}

	render() {
		const { filterTag, data } = this.props;
		let showOnScreen;
		if(filterTag.filterTag === '' || filterTag.filterTag === undefined) {
			showOnScreen = this.showElements(data);
		} else {
			let filterData = this.filterElements(data, filterTag);
			showOnScreen = this.showElements(filterData);
		}
		return (
			<div id="list">{showOnScreen}</div>
		);
	}
}

export default List;
