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

export default class Measurements extends Component<P, S> {
	get table() {
		return <Table bordered>
			<thead>
				<tr>
					<th>Measurement Date</th>
					<th>Weight</th>
					<th>Height</th>
					<th />
					<th />
				</tr>
			</thead>
			<tbody></tbody>
		</Table>
	}

	render() {
		return <Container fluid>
			<h3>Measurements</h3>
			{this.table}
		</Container>
	}
}
