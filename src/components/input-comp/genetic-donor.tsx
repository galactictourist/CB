import * as React from 'react'
import { } from 'reactstrap'

import Component from '../'
import InputComp from './'

interface P {
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
        return <InputComp label='Genetic/Donor DAM' type='select'>
            {this.options}
        </InputComp>
    }
}
