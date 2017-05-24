import * as React from 'react'
import {
	Container,
	Row,
	Col,
	Table,
} from 'reactstrap'

import Component from '../../'
import InputComp from '../../input-comp'
import SelectComp from '../../input-comp/select'

interface P { }

interface S { }

export default class Vaccines extends Component<P, S> {
	get form() {
		return <div>
			<Row>
				<Col>
					<InputComp type='date' label='Date' />
				</Col>
				<Col>
					<InputComp type='text' label='Vaccine' />
				</Col>
				<Col>
					<InputComp type='text' label='Wormer' />
				</Col>
				<Col>
					<InputComp type='text' label='Dosage' />
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
				<Col>
					<InputComp type='text' label='Cost' />
				</Col>
				<Col>
					<InputComp type='text' label='Slaughter' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='textarea' label='Notes' />
				</Col>
			</Row>
		</div>
	}

	get table() {
		return <Table bordered>
			<thead>
				<tr>
					<th>Date</th>
					<th>Vaccine</th>
					<th>Wormer</th>
					<th>Dosage</th>
					<th>Route</th>
					<th>Mfr.</th>
					<th>Done By</th>
					<th>Location</th>
					<th>Cost</th>
					<th>Slaughter</th>
					<th>Notes</th>
					<th />
					<th />
				</tr>
			</thead>
		</Table>
	}

	render() {
		return <Container fluid>
			<h3>Vaccines and Wormers</h3>
			{this.form}
			{this.table}
		</Container>
	}
}
