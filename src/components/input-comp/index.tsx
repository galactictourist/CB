import * as React from 'react'
import {
	Input,
	Label,
	FormGroup
} from 'reactstrap'

import AutoIncrement from '../../broadcaster/auto-incrementer'
import Component from './'

const autoIncrement = new AutoIncrement()

interface P {
	type: 'text' | 'number' | 'password' | 'date' | 'time' | 'color' | 'select'
	| 'file' | 'textarea'
	label?: string
	placeholder?: string
	value?: string | number
	onChange?: (args: string) => void
	min?: number | string
	max?: number | string
	minLength?: number
	maxLength?: number
}

interface S {
}

export default class InputComp extends React.Component<P, S> {
	readonly id = autoIncrement.nextValue

	render() {
		const p = this.props

		return <FormGroup>
			<Label for={`inputcomp-${this.id}`}>
				<b>{p.label}</b>
			</Label>
			<Input
				id={`inputcomp-${this.id}`}
				type={p.type}
				placeholder={p.placeholder}
				value={p.value}
				onChange={event => {
					if (p.onChange) {
						p.onChange(event.target.value)
					}
				}}
				min={p.min}
				max={p.max}
				minLength={p.minLength}
				maxLength={p.maxLength}
				children={p.children}
			/>
		</FormGroup>
	}
}
