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

export default class Treatments extends Component<P, S> {
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
				</tr>
			</thead>
			<tbody></tbody>
		</Table>
	}
	render() {
		return <Container fluid>
			<h1>Treatments</h1>
			{this.table}
		</Container>
	}
}
