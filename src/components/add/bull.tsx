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
import { cloneDeep } from 'lodash'

import db from '../../db'

import {
    Bull as BullInterface
} from '../../types'

import Component from '../'

import InputComp from '../input-comp'
import LocationInp from '../input-comp/location'
import HornStatus from '../input-comp/horn-status'
import BreedInp from '../input-comp/breed'
import GeneticDonorInp from '../input-comp/genetic-donor'
import SiblingCodeInp from '../input-comp/sibling-code'

interface P {
    bull?: BullInterface
}

type S = BullInterface

const EMPTY_BULL:BullInterface={
    name: '',
    active: 1,
    regNum: '',
    dateOfBirth: '',
    birthWeight: 0,
    breed: '',
    color: '',
    specialMarkings: '',
    importExport: '',
    earTag: '',
    earTagLoc: '',
    brandNum: '',
    brandNumLoc: '',
    tattoo: '',
    tattooLoc: '',
    electronicId: '',
    electronicIdLoc: '',
    otherId: '',
    otherIdLoc: '',
    metalId: '',
    metalIdLoc: '',
    genetic: '',
    bloodline: '',
    siblingCode: '',
    cloned: '',
    showAnimal: false,
    aiBull: false,
    reference: false,
    hornStatus: 'Polled',
    origin: 'born',
    imagePath: null,
    pasture: '',
    pen: '',
    currBullOwner: '',
    bullSire: '',
    bullDame: '',
    comments: '',
    purchaseFrom: '',
    purchaseDate: '',
    price: 0,
    breeder: ''
}

export default class AddBull extends Component<P, S> {
    defaultVals: BullInterface

    componentWillMount() {
        const p = this.props
        this.defaultVals = p.bull || EMPTY_BULL

        this.state = cloneDeep(this.defaultVals)
    }

    async insert(): Promise<number> {
        const s = this.state
        const queryString = `
            INSERT INTO Bull (name, active, regNum, dateOfBirth, birthWeight, breed,
                color, specialMarkings, importExport, earTag, earTagLoc,
                brandNum, brandNumLoc, tattoo, tattooLoc, electronicId,
                electronicIdLoc, otherId, otherIdLoc, metalId, metalIdLoc,
                genetic, bloodline, siblingCode, cloned, showAnimal, aiBull,
                reference, hornStatus, origin, imagePath, pasture, pen,
                currBullOwner, bullSire, bullDame, comments, purchaseFrom,
                purchaseDate, price, breeder)
            VALUES (
                ?, 1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
            )
        `
        var exec = db.exec(queryString, s.name, s.regNum, s.dateOfBirth,
            s.birthWeight, s.breed, s.color, s.specialMarkings, s.importExport,
            s.earTag, s.earTagLoc, s.brandNum, s.brandNumLoc, s.tattoo,
            s.tattooLoc, s.electronicId, s.electronicIdLoc, s.otherId,
            s.otherIdLoc, s.metalId, s.metalIdLoc, s.genetic, s.bloodline,
            s.siblingCode, s.cloned, s.showAnimal, s.aiBull, s.reference,
            s.hornStatus, s.origin, s.imagePath, s.pasture, s.pen,
            s.currBullOwner, s.bullSire, s.bullDame, s.comments, s.purchaseFrom,
            s.purchaseDate, s.price, s.breeder
        )

        return new Promise<number>((resolve, reject) => {
            exec.then(e => {
                resolve(e.lastID)
            }).catch(err => {
                reject(err)
            })
        })
    }

    async update(): Promise<boolean> {
        const s = this.state
        const queryString = `
            UPDATE Bull
            SET
                name = ?,
                regNum = ?,
                dateOfBirth = ?,
                birthWeight = ?,
                breed = ?,
                color = ?,
                specialMarkings = ?,
                importExport = ?,
                earTag = ?,
                earTagLoc = ?,
                brandNum = ?,
                brandNumLoc = ?,
                tattoo = ?,
                tattooLoc = ?,
                electronicId = ?,
                electronicIdLoc = ?,
                otherId = ?,
                otherIdLoc = ?,
                metalId = ?,
                metalIdLoc = ?,
                genetic = ?,
                bloodline = ?,
                siblingCode = ?,
                cloned = ?,
                showAnimal = ?,
                aiBull = ?,
                reference = ?,
                hornStatus = ?,
                origin = ?,
                imagePath = ?,
                pasture = ?,
                pen = ?,
                currBullOwner = ?,
                bullSire = ?,
                bullDame = ?,
                comments = ?,
                purchaseFrom = ?,
                purchaseDate = ?,
                price = ?,
                breeder = ?
            WHERE
                id = ?
        `
        var exec = db.exec(queryString, s.name, s.regNum, s.dateOfBirth,
            s.birthWeight, s.breed, s.color, s.specialMarkings, s.importExport,
            s.earTag, s.earTagLoc, s.brandNum, s.brandNumLoc, s.tattoo,
            s.tattooLoc, s.electronicId, s.electronicIdLoc, s.otherId,
            s.otherIdLoc, s.metalId, s.metalIdLoc, s.genetic, s.bloodline,
            s.siblingCode, s.cloned, s.showAnimal, s.aiBull, s.reference,
            s.hornStatus, s.origin, s.imagePath, s.pasture, s.pen,
            s.currBullOwner, s.bullSire, s.bullDame, s.comments, s.purchaseFrom,
            s.purchaseDate, s.price, s.breeder, s.id)

        return new Promise<boolean>((resolve, reject) => {
            exec.then(e => {
                if (e.changes) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }

    async save() {
        const p = this.props
        const s = this.state

        try {
            if (p.bull) {
                if (await this.update()) {
                    alert(`Saved bull info`)
                } else {
                    alert(`Didn't save`)
                }
            } else {
                let id = await this.insert()
                alert(`Saved! Bull ID: ${id}`)
            }
        } catch (err) {
            alert('Failed to save')
            console.error(err)
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
                    value={s.purchaseFrom}
                    onChange={value => {
                        this.setState({
                            purchaseFrom: value
                        })
                    }}
                />
            </Col>
            <Col>
                <InputComp
                    label='Purchased Date'
                    type='date'
                    value={s.purchaseDate}
                    onChange={value => {
                        this.setState({ purchaseDate: value })
                    }}
                />
            </Col>
            <Col>
                <InputComp
                    label='Price'
                    type='number'
                    value={s.price}
                    onChange={value => {
                        var n = parseFloat(value)
                        this.setState({ price: n })
                    }}
                />
            </Col>
            <Col>
                <InputComp
                    label='Breeder'
                    type='text'
                    value={s.breeder}
                    onChange={value => {
                        this.setState({ breeder: value })
                    }}
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
                        value={s.name}
                        onChange={value => {
                            this.setState({ name: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Reg. #'
                        type='text'
                        value={s.regNum}
                        onChange={value => {
                            this.setState({ regNum: value })
                        }}
                    />
                </Col>
                <Col sm={2}>
                    <InputComp
                        label='D.O.B'
                        type='date'
                        value={s.dateOfBirth}
                        onChange={value => {
                            this.setState({ dateOfBirth: value })
                        }}
                    />
                </Col>
                <Col sm={2}>
                    <InputComp
                        label='Birth Weight'
                        type='number'
                        value={s.birthWeight}
                        onChange={value => {
                            var n = parseFloat(value)
                            this.setState({ birthWeight: n })
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <BreedInp
                        value={s.breed}
                        onChange={value => {
                            this.setState({ breed: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Color'
                        type='text'
                        value={s.color}
                        onChange={value => {
                            this.setState({ color: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Special Markings'
                        type='text'
                        value={s.specialMarkings}
                        onChange={value => {
                            this.setState({ specialMarkings: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Import/Export'
                        type='select'
                        value={s.importExport}
                        onChange={value => {
                            this.setState({ importExport: value })
                        }}
                    >
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
                        value={s.earTag}
                        onChange={value => {
                            this.setState({ earTag: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp
                        value={s.earTagLoc}
                        onChange={value => {
                            this.setState({ earTagLoc: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Brand Number'
                        type='text'
                        value={s.brandNum}
                        onChange={value => {
                            this.setState({ brandNum: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp
                        value={s.brandNumLoc}
                        onChange={value => {
                            this.setState({ brandNumLoc: value })
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Tattoo'
                        type='text'
                        value={s.tattoo}
                        onChange={value => {
                            this.setState({ tattoo: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp
                        value={s.tattooLoc}
                        onChange={value => {
                            this.setState({ tattooLoc: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Electronic ID'
                        type='text'
                        value={s.electronicId}
                        onChange={value => {
                            this.setState({ electronicId: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp
                        value={s.electronicIdLoc}
                        onChange={value => {
                            this.setState({ electronicIdLoc: value })
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Other ID'
                        type='text'
                        value={s.otherId}
                        onChange={value => {
                            this.setState({ otherId: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp
                        value={s.otherIdLoc}
                        onChange={value => {
                            this.setState({ otherIdLoc: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Metal ID'
                        type='text'
                        value={s.metalId}
                        onChange={value => {
                            this.setState({ metalId: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <LocationInp
                        value={s.metalIdLoc}
                        onChange={value => {
                            this.setState({ metalIdLoc: value })
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <GeneticDonorInp
                        value={s.genetic}
                        onChange={value => {
                            this.setState({ genetic: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Bloodline'
                        type='text'
                        value={s.bloodline}
                        onChange={value => {
                            this.setState({ bloodline: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <SiblingCodeInp
                        value={s.siblingCode}
                        onChange={value => {
                            this.setState({ siblingCode: value })
                        }}
                    />
                </Col>
                <Col sm={3}>
                    <InputComp
                        label='Cloned'
                        type='text'
                        value={s.cloned}
                        onChange={value => {
                            this.setState({ cloned: value })
                        }}
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
                        value={s.pasture}
                        onChange={value => {
                            this.setState({ pasture: value })
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <InputComp
                        label='Pen'
                        type='text'
                        value={s.pen}
                        onChange={value => {
                            this.setState({ pen: value })
                        }}
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
                        value={s.currBullOwner}
                        onChange={value => {
                            this.setState({ currBullOwner: value })
                        }}
                    />
                </Col>
                <Col>
                    <InputComp
                        label="Bull's Sire"
                        type='text'
                        value={s.bullSire}
                        onChange={value => {
                            this.setState({ bullSire: value })
                        }}
                    />
                </Col>
                <Col>
                    <InputComp
                        label="Bull's Dame"
                        type='text'
                        value={s.bullDame}
                        onChange={value => {
                            this.setState({ bullDame: value })
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputComp
                        label='Comments'
                        type='textarea'
                        value={s.comments}
                        onChange={value => {
                            this.setState({ comments: value })
                        }}
                    />
                </Col>
            </Row>
            <Row style={{
                textAlign: 'center'
            }}>
                <Col sm={12}>
                    <Button onClick={event => {
                        this.save()
                    }}>Save</Button>
                    {' '}
                    <Button onClick={event => {
                        this.setState(this.defaultVals)
                    }}>Cancel</Button>
                    {' '}
                    <Button onClick={event => {
                        this.setState(EMPTY_BULL)
                    }}>Clear</Button>
                </Col>
            </Row>
        </Container>
    }
}
