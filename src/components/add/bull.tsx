import * as React from 'react'
import {
    Container,
    Row,
    Col,
    Table,
    Input,
    FormGroup,
    Label,
    Button
} from 'reactstrap'

import Component from '../'

interface P {
}

interface S {
}

export default class AddBull extends Component<P, S> {
    render() {
        return <Container fluid>
            <h2>Add New Bull</h2>
        </Container>
    }
}
