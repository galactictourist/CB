import * as React from 'react'
import {
    Container
} from 'reactstrap'

import Component from '../'

interface P {
}

interface S {
}

export default class AddSteer extends Component<P, S> {
    render() {
        return <Container fluid>
            <h2>Add New Steer</h2>
        </Container>
    }
}
