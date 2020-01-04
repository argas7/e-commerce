import React from 'react';
import Shopping from '../Shopping';
import './List.scss';

function List() {
	return (
		<div id="list">
			{[
				<Shopping
					key={1} 
					urlImage='https://cdn.pixabay.com/photo/2018/02/01/19/21/easter-3123834_960_720.jpg'
					text='This is the text from the first product'
					arrTags={['firstTag', 'secondTag', 'thirdTag']}    
				/>,
				<Shopping
					key={2}
					urlImage='https://cdn.pixabay.com/photo/2016/11/18/12/55/office-1834294_960_720.jpg'
					text='This is the text from the second product'
					arrTags={['firstTag', 'thirdTag']}    
				/>,
				<Shopping
					key={3}
					urlImage='https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955__340.jpg'
					text='This is the text from the third product'
					arrTags={['secondTag']}    
				/>,
				<Shopping
					key={4} 
					urlImage='https://cdn.pixabay.com/photo/2018/08/06/12/14/spa-3587403__340.jpg'
					text='This is the text from the fourth product'
					arrTags={['firstTag', 'secondTag']}    
				/>,
				<Shopping
					key={5} 
					urlImage='https://cdn.pixabay.com/photo/2015/02/05/08/10/iphone-624709__340.jpg'
					text='This is the text from the fifth product'
					arrTags={['firstTag']}    
				/>,
				<Shopping
					key={6} 
					urlImage='https://cdn.pixabay.com/photo/2018/03/23/10/26/egg-cartons-3253299__340.jpg'
					text='This is the text from the sixth product'
					arrTags={['thirdTag']}    
				/>
			]
			}
		</div>
	);
}

export default List;