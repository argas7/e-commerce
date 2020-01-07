import React, { Component } from 'react';
import Shopping from '../Shopping';
import './List.scss';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { filterTag } = this.props;
		const { data } = this.props;
		let showOnScreen;
		if(filterTag.filterTag === '') {
			showOnScreen = data.map((shopping, index) => (
				<Shopping 
					key={index}
					urlImage={shopping.urlImage}
					text={shopping.text}
					arrTags={shopping.arrTags}
				/>
			))
		} else {
			let dados = data.filter(({arrTags}) => {
				for(let i = 0; i < arrTags.length; i++) {
					if(arrTags[i] === filterTag.filterTag) {
						return true;
					}
				}
				return false;
			});
			showOnScreen = dados.map((shopping, index) => (
				<Shopping 
					key={index}
					urlImage={shopping.urlImage}
					text={shopping.text}
					arrTags={shopping.arrTags}
				/>
			))
			console.log(dados);
		}
		return (
			<div id="list">{showOnScreen}</div>
		);
	}
}

export default List;