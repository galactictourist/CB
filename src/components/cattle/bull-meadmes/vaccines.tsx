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
			{this.table}
		</Container>
	}
}
