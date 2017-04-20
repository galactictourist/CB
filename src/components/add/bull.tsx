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
    Button,
    FormText
} from 'reactstrap'

import Component from '../'

import InputComp from '../input-comp'
import LocationInp from '../input-comp/location'
import HornStatus from '../input-comp/horn-status'
import BreedInp from '../input-comp/breed'
import GeneticDonorInp from '../input-comp/genetic-donor'
import SiblingCodeInp from '../input-comp/sibling-code'

interface P {
}

interface S {
    showAnimal: boolean
    aiBull: boolean
    reference: boolean
    hornStatus: string
    origin: string
    imagePath: string
}

export default class AddBull extends Component<P, S> {
    componentWillMount() {
        this.state = {
            showAnimal: false,
            aiBull: false,
            reference: false,
            hornStatus: 'Polled',
            origin: 'born',
            imagePath: null
        }
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

    get bullPurchasedFields() {
        const s = this.state

        // don't display if bull is not purchased
        if (s.origin != 'purchased') {
            return null
        }

        return <Row>
            <Col>
                <InputComp
                    label='Purchased Form'
                    type='text'
                />
            </Col>
            <Col>
                <InputComp
                    label='Purchased Date'
                    type='date'
                />
            </Col>
            <Col>
                <InputComp
                    label='Price'
                    type='text'
                />
            </Col>
            <Col>
                <InputComp
                    label='Breeder'
                    type='text'
                />
            </Col>
        </Row>
    }

    get originBtnGroup() {
        const s = this.state

        return <FormGroup>
            <Label>
                <b>Origin</b>
            </Label>
            <div>
                <ButtonGroup>
                    <Button active={s.origin == 'born'} onClick={event => {
                        this.setState({ origin: 'born' })
                    }}>Born</Button>
                    <Button active={s.origin == 'purchased'} onClick={event => {
                        this.setState({ origin: 'purchased' })
                    }}>Purchased</Button>
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
                    <InputComp
                        label='Color'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Special Markings'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Import/Export'
                        type='select'>
                        <option>Exported</option>
                        <option>Imported</option>
                    </InputComp>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Ear Tag'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Brand Number'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Tattoo'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Electronic ID'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Other ID'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Metal ID'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <GeneticDonorInp />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Bloodline'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    <SiblingCodeInp />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Cloned'
                        type='text'
                    />
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
                    <InputComp
                        label='Pasture'
                        type='text'
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Pen'
                        type='text'
                    />
                </Col>
                <Col sm={3}>
                    {this.originBtnGroup}
                </Col>
            </Row>
            {this.bullPurchasedFields}
            <Row>
                <Col>
                    <FormGroup>
                        <Label>
                            <b>
                                Image
                            </b>
                        </Label>
                        <input
                            id='file-inp'
                            type='file'
                            onChange={event => {
                                var element: any = document.getElementById('file-inp')
                                var path = element.files[0].path
                                this.setState({
                                    imagePath: path
                                })
                            }}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img style={{
                        width: '100%'
                    }} src={s.imagePath} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputComp
                        label='Current Owner of Bull'
                        type='text'
                    />
                </Col>
                <Col>
                    <InputComp
                        label="Bull's Sire"
                        type='text'
                    />
                </Col>
                <Col>
                    <InputComp
                        label="Bull's Dame"
                        type='text'
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputComp
                        label='Comments'
                        type='textarea'
                    />
                </Col>
            </Row>
            <Row style={{
                textAlign: 'center'
            }}>
                <Col sm={12}>
                    <Button>Save</Button>
                    {' '}
                    <Button>Cancel</Button>
                    {' '}
                    <Button>Clear</Button>
                </Col>
            </Row>
        </Container>
    }
}
