import * as React from 'react'
import {
	Container,
	Row,
	Col,
	Nav,
	NavItem,
	NavLink,
	TabPane,
	TabContent
} from 'reactstrap'

import Component from '../../'
import InputComp from '../../input-comp'
import SelectComp from '../../input-comp/select'

import Treatments from './treatments'
import Vaccines from './vaccines'

interface P { }
interface S {
	tabIndex: number
}

export default class BullMedMeasurement extends Component<P, S> {
	componentWillMount() {
		this.setState({
			tabIndex: 0
		})
	}

	get tabButtons() {
		const s = this.state

		return <Nav tabs>
			<NavItem>
				<NavLink active={s.tabIndex == 1}
					onClick={event => {
						this.setState({ tabIndex: 1 })
					}}
					href='#'>Medical Treatments</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active={s.tabIndex == 2}
					onClick={event => {
						this.setState({ tabIndex: 2 })
					}}
					href='#'>Vaccines & Wormers</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active={s.tabIndex == 3}
					onClick={event => {
						this.setState({ tabIndex: 3 })
					}}
					href='#'>Measurements</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active={s.tabIndex == 4}
					onClick={event => {
						this.setState({ tabIndex: 4 })
					}}
					href='#'>Weight Gains</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active={s.tabIndex == 5}
					onClick={event => {
						this.setState({ tabIndex: 5 })
					}}
					href='#'>Body Condition Scores</NavLink>
			</NavItem>
		</Nav>
	}

	get tabContents() {
		const s = this.state

		return <TabContent activeTab={s.tabIndex}>
			<TabPane tabId={1}>
				<Treatments />
			</TabPane>
			<TabPane tabId={2}>
				<Vaccines />
			</TabPane>
		</TabContent>
	}

	render() {

		return <Container fluid>
			<h2>Medical & Measurements</h2>
			{this.tabButtons}
			{this.tabContents}
		</Container>
	}
}
