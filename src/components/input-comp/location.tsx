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
    get options() {
        return [
            'Loc1',
            'Loc2',
            'Loc3'
        ].map((v, i) => {
            return <option key={i} value={v}>{v}</option>
        })
    }

    render() {
        const p = this.props

        return <InputComp
            label='Location'
            type='select'
            value={p.value}
            onChange={p.onChange}
            children={this.options}
        />
    }
}
