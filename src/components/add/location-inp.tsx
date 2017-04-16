import * as React from 'react'
import Component from '../'
import InputComp from '../input-comp'

interface P {
    value?: string
    onChange?: (args: string) => void
}

interface S {
}

export default class Location extends Component<P, S> {
    render() {
        const p = this.props

        return <InputComp
            label='Location'
            type='text'
            value={p.value}
            onChange={p.onChange}
        />
    }
}
