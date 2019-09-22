import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageify' })

export class ImageifyPipe implements PipeTransform {
	transform(value: any) {
		if (!value) return ''

		const pokemonName = value
			.replace('♀', 'f')
			.replace('♂', 'm')
			.replace(/\W+/g, '')
			.toLocaleLowerCase();

		const url = 'assets/img/pokemons/' + pokemonName + '.jpg';
		return url;
	}
}