import * as React from 'react'
import {
    Container,
    Row,
    Col,
    Table,
    Input,
    FormGroup,
    Label,
    ButtonGroup,
    Button
} from 'reactstrap'

import Component from '../'

import InputComp from '../input-comp'
import LocationInp from '../input-comp/location'
import HornStatus from '../input-comp/horn-status'
import BreedInp from '../input-comp/breed'

interface P {
}

interface S {
    showAnimal: boolean
    aiBull: boolean
    reference: boolean
    hornStatus: string
}

export default class AddBull extends Component<P, S> {
    state = {
        showAnimal: false,
        aiBull: false,
        reference: false,
        hornStatus: 'Polled'
    }

    get btnGroup() {
        const s = this.state

        return <FormGroup>
            <Label>
                <b>Options</b>
            </Label>
            <div>
                <ButtonGroup>
                    <Button active={s.showAnimal} onClick={event => {
                        this.setState({ showAnimal: !s.showAnimal })
                    }}>Show Animal</Button>
                    <Button active={s.aiBull} onClick={event => {
                        this.setState({ aiBull: !s.aiBull })
                    }}>AI Bull</Button>
                    <Button active={s.reference} onClick={event => {
                        this.setState({ reference: !s.reference })
                    }}>Reference</Button>
                </ButtonGroup>
            </div>
        </FormGroup>
    }

    render() {
        const s = this.state

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
            <Row>
                <Col sm={3}>
                    <BreedInp />
                </Col>
                <Col sm={3}>
                    <InputComp label='Color' type='text' />
                </Col>
                <Col sm={3}>
                    <InputComp label='Special Markings' type='text' />
                </Col>
                <Col sm={3}>
                    <InputComp label='Import/Export' type='select'>
                        <option>Exported</option>
                        <option>Imported</option>
                    </InputComp>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp label='Ear Tag' type='text' />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
                <Col sm={3}>
                    <InputComp label='Brand Number' type='text' />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp label='Tattoo' type='text' />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
                <Col sm={3}>
                    <InputComp label='Electronic ID' type='text' />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp label='Other ID' type='text' />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
                <Col sm={3}>
                    <InputComp label='Metal ID' type='text' />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp label='Genetic/Donor DAM' type='text' />
                </Col>
                <Col sm={3}>
                    <InputComp label='Bloodline' type='text' />
                </Col>
                <Col sm={3}>
                    <InputComp label='Sibling Code' type='text' />
                </Col>
                <Col sm={3}>
                    <InputComp label='Cloned' type='text' />
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    {this.btnGroup}
                </Col>
                <Col sm={3}>
                    <FormGroup>
                        <Label><b>Horn Status</b></Label>
                        <HornStatus onChange={value => {
                            this.setState({ hornStatus: value })
                        }} value={s.hornStatus} />
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <InputComp label='Pasture' type='text' />
                </Col>
            </Row>
        </Container>
    }
}
