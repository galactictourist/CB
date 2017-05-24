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

export default class BodyScores extends Component<P, S> {
	get table() {
		return <Table>
			<thead>
				<tr>
					<th>Date</th>
					<th>BCS Score</th>
					<th>Weight</th>
					<th>Soundness</th>
					<th>Tooth Wear</th>
					<th>Temperment</th>
					<th>Comments</th>
					<th />
					<th />
				</tr>
			</thead>
			<tbody></tbody>
		</Table>
	}

	render() {
		return <Container fluid>
			<h3>Body Scores</h3>
			{this.table}
		</Container>
	}
}