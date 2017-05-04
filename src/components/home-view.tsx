import * as React from 'react'
import {
	Container,
	Table,
} from 'reactstrap'
import db from '../db'
import { dbReady } from '../actions'

import Component from './'
import {
	openPage
} from '../stores'

interface P {
}

interface S {
	bullActive: number
	bullInactive: number
	bullReference: number
	cowActive: number
	cowInactive: number
	cowReference: number
	calfActive: number
	calfInactive: number
	calfReference: number
	steersActive: number
	steersInactive: number
	steersReference: number
	heiferActive: number
	heiferInactive: number
	heiferReference: number

}

export default class HomeView extends Component<P, S> {
	componentWillMount() {
		this.state = {
			bullActive: 0,
			bullInactive: 0,
			bullReference: 0,
			cowActive: 0,
			cowInactive: 0,
			cowReference: 0,
			calfActive: 0,
			calfInactive: 0,
			calfReference: 0,
			steersActive: 0,
			steersInactive: 0,
			steersReference: 0,
			heiferActive: 0,
			heiferInactive: 0,
			heiferReference: 0,
		}

		if (!db.ready) {
			this.subscribe(dbReady, () => {
				this.count()
			})
		} else {
			this.count()
		}
	}

	count() {
		db.get(`SELECT COUNT(*) FROM Bull WHERE active = 1`)
			.then(v => { this.setState({ bullActive: v[0]['COUNT(*)'] }) })
			.catch(err => { console.error(err) })
		db.get(`SELECT COUNT(*) FROM Bull WHERE active = 0`)
			.then(v => { this.setState({ bullInactive: v[0]['COUNT(*)'] }) })
			.catch(err => { console.error(err) })
	}

	get head() {
		return <thead>
			<tr>
				<th>Type</th>
				<th>Active</th>
				<th>Inactive</th>
				<th>Reference</th>
			</tr>
		</thead>
	}

	get bulls() {
		const s = this.state

		return <tr>
			<td>
				<a href='#' onClick={event => {
					openPage.value = 'cattle-bull'
				}}>
					Bulls
				</a>
			</td>
			<td>{s.bullActive}</td>
			<td>{s.bullInactive}</td>
			<td>{s.bullReference}</td>
		</tr>
	}

	get calves() {
		const s = this.state

		return <tr>
			<td>Calves</td>
			<td>{s.calfActive}</td>
			<td>{s.calfInactive}</td>
			<td>{s.calfReference}</td>
		</tr>
	}

	get steers() {
		const s = this.state

		return <tr>
			<td>Steers</td>
			<td>{s.steersActive}</td>
			<td>{s.steersInactive}</td>
			<td>{s.steersReference}</td>
		</tr>
	}

	get cows() {
		const s = this.state

		return <tr>
			<td>Cows</td>
			<td>{s.cowActive}</td>
			<td>{s.cowInactive}</td>
			<td>{s.cowReference}</td>
		</tr>
	}

	get heifers() {
		const s = this.state

		return <tr>
			<td>Heifers</td>
			<td>{s.heiferActive}</td>
			<td>{s.heiferInactive}</td>
			<td>{s.heiferReference}</td>
		</tr>
	}

	render() {
		return <Container fluid>
			<h2>Welcome to Cattle Barn</h2>
			<Table bordered>
				{this.head}
				<tbody>
					{this.bulls}
					{this.calves}
					{this.steers}
					{this.cows}
					{this.heifers}
				</tbody>
			</Table>
		</Container>
	}
}
