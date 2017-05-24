import * as React from 'react'
import {
	Container,
	Row,
	Col,
	Table,
	Button
} from 'reactstrap'

import Component from '../../'
import InputComp from '../../input-comp'
import SelectComp from '../../input-comp/select'

interface P { }

interface S { }

export default class Treatments extends Component<P, S> {
	get form() {
		return <div>
			<Row>
				<Col sm={2}>
					<InputComp type='date' label='Date' />
				</Col>
				<Col>
					<InputComp type='text' label='Procedure' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='text' label='Meds' />
				</Col>
				<Col>
					<InputComp type='text' label='Dosage' />
				</Col>
				<Col>
					<InputComp type='text' label='Lot #' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='text' label='Mfr.' />
				</Col>
				<Col>
					<InputComp type='text' label='Done By' />
				</Col>
				<Col>
					<InputComp type='text' label='Location' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='text' label='Route' />
				</Col>
				<Col>
					<InputComp type='number' label='Cost' />
				</Col>
				<Col>
					<InputComp type='text' label='Slaughter' />
				</Col>
				<Col>
					<InputComp type='number' label='Temperature' />
				</Col>
			</Row>
			<div style={{ textAlign: 'center' }}>
				<Button color='primary'>Save</Button>
			</div>
		</div>
	}

	get table() {
		return <Table bordered>
			<thead>
				<tr>
					<th>Date</th>
					<th>Procedure</th>
					<th>Meds</th>
					<th>Dosage</th>
					<th>Lot #</th>
					<th>Mfr.</th>
					<th>Done By</th>
					<th>Location</th>
					<th>Route</th>
					<th>Cost</th>
					<th>Slaughter</th>
					<th>Temperature</th>
					<th />
					<th />
				</tr>
			</thead>
			<tbody></tbody>
		</Table>
	}

	render() {
		return <Container fluid>
			<h3>Treatments</h3>
			{this.form}
			{this.table}
		</Container>
	}
}
