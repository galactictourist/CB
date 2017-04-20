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

export default class GeneticDonor extends Component<P, S> {
    get options() {
        return [
            'Gen1',
            'Gen2',
            'Gen3'
        ].map((v, i) => {
            return <option key={i} value={v}>{v}</option>
        })
    }

    render() {
        const p = this.props

        return <InputComp
            label='Genetic/Donor DAM'
            type='select'
            value={p.value}
            onChange={p.onChange}
        >
            {this.options}
        </InputComp>
    }
}
