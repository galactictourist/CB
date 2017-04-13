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
            <Row>
                <Col sm={5}>
                    <FormGroup>Name</FormGroup>
                    <Input type='text' />
                </Col>
                <Col sm={3}>
                    <FormGroup>Reg. #</FormGroup>
                    <Input type='text' />
                </Col>
                <Col sm={2}>
                    <FormGroup>D.O.B</FormGroup>
                    <Input type='text' />
                </Col>
                <Col sm={2}>
                    <FormGroup>Birth Weight</FormGroup>
                    <Input type='text' />
                </Col>
            </Row>
        </Container>
    }
}
