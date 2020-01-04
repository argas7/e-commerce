import React from 'react';
import PropTypes from 'prop-types';
import './Shopping.scss';

function Shopping({urlImage, text, arrTags, id}) {
	return (
		<div id="container">
			<div>
				<img src={urlImage} alt={text} />
			</div>
			<div><p>{text}</p></div>
			<div className="assets">
				<div className="tags" id={id}>
					{arrTags.map((tag) => (
						<span>{tag}</span>
					))}
				</div>
				<button>Adicionar ao Carrinho</button>
			</div>
		</div>
	);
}

Shopping.propTypes = {
	urlImage: PropTypes.string,
	text: PropTypes.string,
	arrTags: PropTypes.array,
	id: PropTypes.number,
};

Shopping.defaultProps = {
	urlImage: './#',
	text: 'Put some text inside here!',
	arrTags: [],
	id: new Date().getTime(),
};

export default Shopping;