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

import Component from './'
import {
	RanchInfo as S
} from '../types'
import {
	ranchInfo
} from '../stores'
import {
	ranchInfoSave
} from '../actions'

interface P {
	displayText?: string
}

const startState: S = {
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
	ranchType: 0,
}

export default class NewRanch extends Component<P, S> {
	state = ranchInfo.value || startState

	componentWillMount() {
		this.subscribe(ranchInfo, state => {
			this.setState(state)
		})
	}

	reset = () => {
		this.setState(startState)
	}

	save() {
		ranchInfoSave.trigger(this.state)
	}

	render() {
		const p = this.props
		const s = this.state

		return <Container fluid>
			<h2>{p.displayText || 'New Ranch Register'}</h2>
			<Row>
				<Col sm={4}>
					<FormGroup>
						<Label for='ranch-name-input'>Ranch Name</Label>
						<Input type='text' id='ranch-name-input'
							value={s.ranchName}
							onChange={event => {
								this.setState({
									ranchName: event.target.value
								})
							}} />
					</FormGroup>
				</Col>
				<Col sm={4}>
					<FormGroup>
						<Label for='ranch-owner-input'>Ranch Owner</Label>
						<Input type='text' id='ranch-owner-input'
							value={s.ranchOwner}
							onChange={event => {
								this.setState({
									ranchOwner: event.target.value
								})
							}}
						/>
					</FormGroup>
				</Col>
				<Col sm={4}>
					<FormGroup>
						<Label for='phone'>Phone</Label>
						<Input type='text' id='phone'
							value={s.phone}
							onChange={event => {
								this.setState({
									phone: event.target.value
								})
							}}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col sm={5}>
					<FormGroup>
						<Label for='address'>Address</Label>
						<Input type='text' id='address'
							value={s.address}
							onChange={event => {
								this.setState({
									address: event.target.value
								})
							}}
						/>
					</FormGroup>
				</Col>
				<Col sm={3}>
					<FormGroup>
						<Label for='city'>City</Label>
						<Input type='text' id='city'
							value={s.city}
							onChange={event => {
								this.setState({
									city: event.target.value
								})
							}}
						/>
					</FormGroup>
				</Col>
				<Col sm={3}>
					<FormGroup>
						<Label for='state'>State</Label>
						<Input type='text' id='state'
							value={s.state}
							onChange={event => {
								this.setState({
									state: event.target.value
								})
							}}
						/>
					</FormGroup>
				</Col>
				<Col sm={1}>
					<FormGroup>
						<Label for='zip'>Zip</Label>
						<Input type='text' id='zip'
							value={s.zip}
							onChange={event => {
								this.setState({
									zip: event.target.value
								})
							}}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<Label for='premises-id'>Premises ID</Label>
					<Input type='text' id='premises-id'
						value={s.premisesId}
						onChange={event => {
							this.setState({
								premisesId: event.target.value
							})
						}}
					/>
				</Col>
				<Col sm={4}>
					<Label for='tax-exempt'>Tax Exempt #</Label>
					<Input type='text' id='tax-exempt'
						value={s.taxExempt}
						onChange={event => {
							this.setState({
								taxExempt: event.target.value
							})
						}}
					/>
				</Col>
				<Col sm={4}>
					<Label for='timber'>Timber #</Label>
					<Input type='text' id='timber'
						value={s.timber}
						onChange={event => {
							this.setState({
								timber: event.target.value
							})
						}}
					/>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<Label for='email'>Email</Label>
					<Input type='email' id='email'
						value={s.email}
						onChange={event => {
							this.setState({
								email: event.target.value
							})
						}}
					/>
				</Col>
				<Col sm={4}>
					<Label for='website'>Website</Label>
					<Input type='text' id='website'
						value={s.website}
						onChange={event => {
							this.setState({
								website: event.target.value
							})
						}}
					/>
				</Col>
				<Col sm={4}>
					<Label for='ranch-type'>Ranch Type</Label>
					<Input type='select'
						value={s.ranchType}
						onChange={event => {
							var ranchType = parseInt(event.target.value)
							this.setState({
								ranchType
							})
						}}>
						<option value={0}>--Select--</option>
						<option value={1}>Commercial</option>
						<option value={2}>Registered</option>
						<option value={3}>Both</option>
					</Input>
				</Col>
			</Row>
			<Row>
				<Col sm={10} />
				<Col sm={1}>
					<Button
						children='Save'
						color='warning'
						className='float-sm-right'
						onClick={() => { this.save() }}
					/>
				</Col>
				<Col sm={1}>
					<Button
						children='Clear'
						color='default'
						className='float-sm-left'
						onClick={this.reset}
					/>
				</Col>
			</Row>
		</Container>
	}
}
