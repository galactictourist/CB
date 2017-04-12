import * as React from 'react'
import {
    Container,
    Row,
    Col,
    Table,
    Input,
    FormGroup,
    Label

} from 'reactstrap'

interface P {
}

interface S {
    ranchName: string
    ranchOwner: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    premisesId: string
    taxExempt: string
    timber: string
    email: string
    website: string
    ranchType: string
}

export default class NewRanch extends React.Component<P, S> {
    state = {
        ranchName: '',
        ranchOwner: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        premisesId: '',
        taxExempt: '',
        timber: '',
        email: '',
        website: '',
        ranchType: '',
    }

    render() {
        return <Container fluid>
            <h2>New Ranch Register</h2>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <Label for='ranch-name-input'>Ranch Name</Label>
                        <Input type='text' id='ranch-name-input' />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for='ranch-owner-input'>Ranch Owner</Label>
                        <Input type='text' id='ranch-owner-input' />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for='phone'>Phone</Label>
                        <Input type='text' id='phone' />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <FormGroup>
                        <Label for='address'>Address</Label>
                        <Input type='text' id='address' />
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup>
                        <Label for='city'>City</Label>
                        <Input type='text' id='city' />
                    </FormGroup>
                </Col>
                <Col sm={3}>
                    <FormGroup>
                        <Label for='state'>State</Label>
                        <Input type='text' id='state' />
                    </FormGroup>
                </Col>
                <Col sm={1}>
                    <FormGroup>
                        <Label for='zip'>Zip</Label>
                        <Input type='text' id='zip' />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Label for='premises-id'>Premises ID</Label>
                    <Input type='text' id='premises-id' />
                </Col>
                <Col sm={4}>
                    <Label for='tax-exempt'>Tax Exempt #</Label>
                    <Input type='text' id='tax-exempt' />
                </Col>
                <Col sm={4}>
                    <Label for='timber'>Timber #</Label>
                    <Input type='text' id='timber' />
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Label for='email'>Email</Label>
                    <Input type='text' id='email' />
                </Col>
                <Col sm={4}>
                    <Label for='website'>Website</Label>
                    <Input type='text' id='website' />
                </Col>
                <Col sm={4}>
                    <Label for='ranch-type'>Ranch Type</Label>
                    <Input type='select'>
                        <option>Commercial</option>
                        <option>Registered</option>
                        <option>Both</option>
                    </Input>
                </Col>
            </Row>
        </Container>
    }
}
