import * as React from 'react'
import { } from 'reactstrap'

import Component from '../'
import InputComp from './'

interface P {
	value?: string
	onChange?: (args: string) => void
}

interface S {
}

export default class SiblingCode extends Component<P, S> {
	get options() {
		return [
			'SiblingCode1',
			'SiblingCode2',
			'SiblingCode3'
		].map((v, i) => {
			return <option key={i} value={v}>{v}</option>
		})
	}

	render() {
		const p = this.props

		return <InputComp
			label='Sibling Code'
			type='select'
			value={p.value}
			onChange={p.onChange}
		>
			{this.options}
		</InputComp>
	}
}
