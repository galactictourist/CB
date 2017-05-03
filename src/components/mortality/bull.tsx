import * as React from 'react'
import {
    Container,
    Row,
    Col,
    Input,
    FormGroup,
    Label,
    Button,
    FormText
} from 'reactstrap'

import Component from '../'
import InputComp from '../input-comp'
import SelectComp from '../input-comp/select'

interface P { }
interface S { }

export default class BullMortality extends Component<P, S> {
    render() {

        return <Container fluid>
            <h2>Mortality Record</h2>
            <Row>
                <Col>
                    <InputComp
                        type='date'
                        label='Date of Death'
                    />
                </Col>
                <Col>
                    <InputComp
                        type='text'
                        label='Cause of Death'
                    />
                </Col>
                <Col>
                    <InputComp
                        type='text'
                        label='Location'
                    />
                </Col>
            </Row>
            <Row>
                <Col md={10}>
                    <InputComp
                        type='text'
                        label='Symptoms'
                        placeholder='Death Symptoms'
                    />
                </Col>
                <Col>
                    <SelectComp
                        label='Policy'
                        values={[
                            'Policy 1',
                            'Policy 2',
                            'Policy 3'
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <SelectComp
                        label='Insured'
                        values={[
                            'No',
                            'Yes',
                        ]}
                    />
                </Col>
                <Col md={4}>
                    <InputComp
                        type='text'
                        label='Insurance'
                    />
                </Col>
                <Col md={3}>
                    <InputComp
                        type='text'
                        label='Policy #'
                    />
                </Col>
                <Col md={3}>
                    <InputComp
                        type='text'
                        label='Phone'
                    />
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <InputComp
                        type='date'
                        label='Coverage Date'
                    />
                </Col>
                <Col md={3}>
                    <InputComp
                        type='number'
                        label='Coverage Amount'
                    />
                </Col>
                <Col md={2}>
                    <InputComp
                        type='number'
                        label='Rate %'
                    />
                </Col>
                <Col md={2}>
                    <InputComp
                        type='number'
                        label='Premium'
                    />
                </Col>
                <Col md={2}>
                    <InputComp
                        type='number'
                        label='Term'
                    />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <SelectComp
                        label='Autopsy'
                        values={[
                            'No',
                            'Yes',
                        ]}
                    />
                </Col>
                <Col md={8}>
                    <InputComp
                        type='text'
                        label='Results'
                    />
                </Col>
                <Col md={2}>
                    <SelectComp
                        label='Results Uploaded'
                        values={[
                            'Results 1',
                            'Results 2',
                            'Results 3'
                        ]}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <InputComp type='text' label='Veterinarian' />
                </Col>
                <Col md={3}>
                    <InputComp type='number' label='Vet Fee' />
                </Col>
                <Col md={3}>
                    <InputComp type='date' label='Date' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputComp type='textarea' label='Comments' />
                </Col>
            </Row>
        </Container>
    }
}
