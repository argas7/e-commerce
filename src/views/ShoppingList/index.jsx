import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, List, Navbar, TopTags } from '../../components';
import './ShoppingList.scss';

class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.filterShoppings = this.filterShoppings.bind(this);
		this.state = {
			filterTag: '',
			data: [
				{
					name: 'eggs',
					urlImage: 'https://cdn.pixabay.com/photo/2018/02/01/19/21/easter-3123834_960_720.jpg',
					text: 'This is the text from the first product',
					arrTags: ['first', 'else']
				},
				{
					name: 'things of office',
					urlImage: 'https://cdn.pixabay.com/photo/2016/11/18/12/55/office-1834294_960_720.jpg',
					text: 'This is the text from the second product',
					arrTags: ['else', 'third']    
				},
				{
					name: 'popsicle',
					urlImage: 'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955__340.jpg',
					text: 'This is the text from the third product',
					arrTags: ['other']
				},
				{
					name: 'glass',
					urlImage: 'https://cdn.pixabay.com/photo/2018/08/06/12/14/spa-3587403__340.jpg',
					text: 'This is the text from the fourth product',
					arrTags: ['first', 'second']
				},
				{
					name: 'iphone',
					urlImage: 'https://cdn.pixabay.com/photo/2015/02/05/08/10/iphone-624709__340.jpg',
					text: 'This is the text from the fifth product',
					arrTags: ['something', 'other']
				},
				{
					name: 'so much eggs',
					urlImage: 'https://cdn.pixabay.com/photo/2018/03/23/10/26/egg-cartons-3253299__340.jpg',
					text: 'This is the text from the sixth product',
					arrTags: ['third', 'other', 'something']
				},
				{
					name: 'wall paper', 
					urlImage: 'https://cdn.pixabay.com/photo/2019/12/06/14/01/sea-4677421__340.jpg',
					text: 'This is the text from the seventh product',
					arrTags: ['second']
				},
				{
					name: 'animals',
					urlImage: 'https://cdn.pixabay.com/photo/2019/12/13/18/06/deer-4693574__340.jpg',
					text: 'This is the text from the eighth product',
					arrTags: ['first', 'third']    
				},
				{
					name: 'shovel',
					urlImage: 'https://cdn.pixabay.com/photo/2019/11/28/05/21/snow-shovel-4658403__340.jpg',
					text: 'This is the text from the ninth product',
					arrTags: ['second', 'third']
				},
				{
					name: 'champain glasses',
					urlImage: 'https://cdn.pixabay.com/photo/2019/12/29/12/56/new-years-eve-4727013__340.jpg',
					text: 'This is the text from the tenth product',
					arrTags: ['first', 'second','other']
				},
				{
					name: 'something',
					urlImage: 'https://cdn.pixabay.com/photo/2020/01/04/16/24/gondolas-4741067__340.jpg',
					text: 'This is the text from the eleventh product',
					arrTags: ['something', 'other']
				},
				{
					name: 'picture',
					urlImage: 'https://cdn.pixabay.com/photo/2019/12/30/13/10/abandoned-places-4729639__340.jpg',
					text: 'This is the text from the twelfth product',
					arrTags: ['first', 'other']
				}
			]
		}
	}

	filterShoppings(filter) {
		this.setState({
			filterTag: filter
		})
	}

	render() {
		const { data, filterTag } = this.state;
		const { length } = this.props;
		return (
			<>
				<div id="block">
					<div className="nav">
						<Navbar length={length} />
					</div>
					<div className="content">
						<List data={data} filterTag={filterTag} add={this.props.add} />
					</div>
					<div className="aside">
						<Input filter={this.filterShoppings} />
						<TopTags data={data}/>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(ShoppingList);
