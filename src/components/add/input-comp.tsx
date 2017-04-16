import * as React from 'react'
import {
    Input,
    Label,
    FormGroup
} from 'reactstrap'

import Component from '../'

interface P {
    type: 'text' | 'number' | 'password'
    label?: string
    placeholder?: string
    value?: string
    onChange?: (args: string) => void
}

interface S {
}

export default class InputComp extends React.Component<P, S> {
    render() {
        const p = this.props

        return <FormGroup>
            <Label>{p.label}</Label>
            <Input
                type={p.type}
                placeholder={p.placeholder}
                value={p.value}
                onChange={event => {
                    if (p.onChange) {
                        p.onChange(event.target.value)
                    }
                }}
            />
        </FormGroup>
    }
}
