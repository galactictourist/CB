import * as React from 'react'
import { } from 'reactstrap'

import Component from '../'
import InputComp from './'

interface P {
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
        return <InputComp label='Genetic/Donor DAM' type='select'>
            {this.options}
        </InputComp>
    }
}
