import * as React from 'react'

import Component from '../'
import InputComp from './'

interface P {
	value?: string
	onChange?: (value: string) => void
}

interface S {
}

export default class Breed extends Component<P, S> {
	get options() {
		return [
			'Breed1',
			'Breed2',
			'Breed3',
			'Breed4'
		].map((v, i) => {
			return <option key={i} value={v}>{v}</option>
		})
	}

	render() {
		const p = this.props

		return <InputComp
			type='select'
			label='Breed'
			value={p.value}
			onChange={value => {
				if (p.onChange) {
					p.onChange(value)
				}
			}}>
			{this.options}
		</InputComp>
	}
}
