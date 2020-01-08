import React, { Component } from 'react';

class TopTags extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	lookingForTags() {
		/*
			Itera por todo o array de objetos e retorna um array bi-dimensional
			com todas as tags atribuídas aos produtos do e-commerce
		*/
		const tags = this.props.data.map((eachProd) => (eachProd.arrTags));
		/*
			Em seguida são criados dois arrays, o primeiro armazenará
			cada uma das tags e, o segundo, armazenará, respectivamente,
			a quantidade de ocorrências de cada tag.
		*/
		const topTags = [];
		let eventNumber = [];
		/*tags.map itera sobre a primeira dimensão do array tags*/
		tags.map((occurrence) => (
			/*occurrence.map itera sobre a segunda dimensão do array tags*/
			occurrence.map((eachTag) => (
				/*
					Se a tag atual ainda não estiver armazenada no array topTags
					ela é inserida no final do array e também é atribuída uma 
					ocorrência no array eventNumber; caso a tag já conste no array
					somente é atribuida oo vetor eventNuber, de forma respectiva
					a seu index, mais uma ocorrência.
				*/
				(topTags.indexOf(eachTag) === -1)
				? (
					topTags.push(eachTag),
					eventNumber.push(1)
				)
				: (
					eventNumber[topTags.indexOf(eachTag)] += 1
				)
			))
		))
		/*
			Ao final, o método retorna outro array bi-dimensional:
			o que consta no primeiro index indica a listagem
			das tags e, no segundo, a quantidade de ocorrências.
		*/
		return [topTags, eventNumber];
	}

	render() {
		const topTags = this.lookingForTags()[0];
		const eventNumber = this.lookingForTags()[1];
		const showTopTags = [];
		/*
			Para listar as 5 tags que mais se repetem, a cada iteração,
			é obtido o index daquela de maior ocorrência;
			esta é inserida no array showTopTags para ser renderizada;
			na sequência ela é excluída do array de tags e também do de ocorrências;
			assim, a próxima tag de mais relevância torna-se aquela com maior frequência
			dessa forma o ciclo se repete até a quinta iteração.
		*/
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
