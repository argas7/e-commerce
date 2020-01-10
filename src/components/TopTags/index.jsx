import React, { Component } from 'react';

class TopTags extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	lookingForTags() {
		const tags = this.props.data.map((eachProd) => (eachProd.arrTags));
		const topTags = [];
		let eventNumber = [];
		tags.map((occurrence) => (
			occurrence.map((eachTag) => (
				(topTags.indexOf(eachTag) === -1)
				? (topTags.push(eachTag), eventNumber.push(1))
				: (eventNumber[topTags.indexOf(eachTag)] += 1)
			))
		))
		return [topTags, eventNumber];
	}

	render() {
		const topTags = this.lookingForTags()[0];
		const eventNumber = this.lookingForTags()[1];
		const showTopTags = [];
		for(let i = 0; i < 5; i++) {
			let max = eventNumber.reduce((a, b) => {
				return Math.max(a, b);
			});
			let pos = eventNumber.indexOf(max);
			showTopTags.push(topTags[pos]);
			topTags.splice(pos, 1);
			eventNumber.splice(pos, 1);
		}
		return (
			<div>
				{showTopTags.map((each, k) => (
					<p key={k}>{each}</p>
				))}
			</div>
		);
	}
}

export default TopTags;
