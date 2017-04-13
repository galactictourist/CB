import * as React from 'react'
import {
    Input
} from 'reactstrap'

interface P {
    value: string
    onChange: (args: string) => void
}
interface S {
}

export default class HornStatus extends React.Component<P, S> {
    get options() {
        return [
            'Polled',
            'Horned',
            'Scurred',
            'Dehorned'
        ].map((v, i) => {
            return <option key={i} value={v}>{v}</option>
        })
    }

    render() {
        const p = this.props

        return <Input
            type='select'
            value={p.value}
            onChange={event => {
                p.onChange(event.target.value)
            }}>
            {this.options}
        </Input>
    }
}
