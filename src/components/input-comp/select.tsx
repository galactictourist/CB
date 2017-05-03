import * as React from 'react'
import InputComp from './'

interface P {
    label?: string
    value?: string
    values?: string[]
    onChange?: (args: string) => void
}

interface S {
}

export default class SelectComp extends React.Component<P, S> {
    render() {
        const p = this.props
        const values = p.values || []

        return <InputComp
            label={p.label}
            type='select'
            value={p.value}
            onChange={p.onChange}>
            {values.map((v, i) => {
                return <option key={i} value={v}>{v}</option>
            })}
        </InputComp>
    }
}
