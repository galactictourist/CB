import * as React from 'react'
import {
	Container,
	Nav,
	NavItem,
	NavLink,
	Table,
	TabPane,
	TabContent
} from 'reactstrap'

import db from '../../db'
import { dbReady } from '../../actions'

import Component from '../'
import CowEdit from '../add/cow'

import {
	Cow
} from '../../types'

interface P {

}

interface S {
	cows: Cow[]
	cow: Cow
	tab: number
}

export default class CattleBull extends Component<P, S> {
	async componentWillMount() {
		this.state = {
			cows: [],
			cow: null,
			tab: 1
		}

		if (db.ready) {
			var cows = await db.get<Cow>('SELECT * FROM Cow')
			this.setState({ cows })
		} else {
			this.subscribe(dbReady, async () => {
				var cows = await db.get<Cow>('SELECT * FROM Cow')
				this.setState({ cows })
			})
		}
	}

	get cows() {
		const s = this.state

		return <Table bordered striped>
			<thead>
				<tr>
					<th>Name/ID</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{s.cows.map((v, i) => {
					return <tr key={i}>
						<td>
							<a href='#' onClick={event => {
								this.setState({ cow: v })
							}}>
								{v.name}
							</a>
						</td>
						<td>
							{v.active ? 'Active' : 'Not Active'}
						</td>
					</tr>
				})}
			</tbody>
		</Table>
	}

	get cow() {
		const s = this.state
		return <div>
			<h3>
				Editing Cow: {s.cow.name}
			</h3>
			<Nav tabs>
				<NavItem>
					<NavLink
						active={s.tab == 1}
						onClick={event => {
							this.setState({ tab: 1 })
						}}
						href='#'>Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						active={s.tab == 2}
						onClick={event => {
							this.setState({ tab: 2 })
						}}
						href='#'>Mortality/Carcass</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						active={s.tab == 3}
						onClick={event => {
							this.setState({ tab: 3 })
						}}
						href='#'>Med/Measurements</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Offspring</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Breeding</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>EPD</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Embryo</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Pics</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Pedigree</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Bloodlines</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Show</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Notes/Documents</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={s.tab}>
				<TabPane tabId={1}>
					<CowEdit cow={s.cow} />
				</TabPane>
				<TabPane tabId={2}>
				</TabPane>
				<TabPane tabId={3}>
				</TabPane>
			</TabContent>
		</div>
	}

	render() {
		const s = this.state
		var v = null

		if (s.cow) {
			v = this.cow
		} else {
			v = this.cows
		}

		return <Container fluid>
			{v}
		</Container>
	}
}
