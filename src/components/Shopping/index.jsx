import React from 'react';
import PropTypes from 'prop-types';
import './Shopping.scss';

function Shopping({name, urlImage, text, arrTags, id, add}) {
	const handleAdd = () => {
		add({
			name: name,
			description: text,
			id: new Date().getTime(),
		})
	}

	return (
		<div id="container">
			<div>
				<img src={urlImage} alt={name} />
			</div>
			<div><p>{text}</p></div>
			<div className="assets">
				<div className="tags" id={id}>
					{arrTags.map((tag, k) => (
						<span key={k}>{tag}</span>
					))}
				</div>
				<button type="button" onClick={handleAdd}>Adicionar ao Carrinho</button>
			</div>
		</div>
	);
}

Shopping.propTypes = {
	name: PropTypes.string,
	urlImage: PropTypes.string,
	text: PropTypes.string,
	arrTags: PropTypes.arrayOf(PropTypes.string),
	id: PropTypes.number,
	add: PropTypes.func,
};

Shopping.defaultProps = {
	name: 'product name',
	urlImage: './#',
	text: 'Put some text inside here!',
	arrTags: ['tag', 'tag', 'tag'],
	id: new Date().getTime(),
	add: () => {},
};

export default Shopping;
