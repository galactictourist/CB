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

import InputComp from './input-comp'

interface P {
}

interface S {
}

export default class AddBull extends Component<P, S> {
    render() {
        return <Container fluid>
            <h2>Add New Bull</h2>
            <Row>
                <Col sm={5}>
                    <InputComp
                        label='Name'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Reg. #'
                        type='text'
                    />
                </Col>
                <Col sm={2}>
                    <InputComp
                        label='D.O.B'
                        type='date'
                    />
                </Col>
                <Col sm={2}>
                    <InputComp
                        label='Birth Weight'
                        type='number'
                    />
                </Col>
            </Row>
        </Container>
    }
}
