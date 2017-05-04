import * as bootstrap from 'bootstrap';
import * as React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap'

import {
	openPage
} from '../stores'

interface P {
}

interface S {
	open: boolean
	cattleOpen: boolean
	addOpen: boolean
	adminOpen: boolean
}

export default class NavBar extends React.Component<P, S> {
	state = {
		open: false,
		cattleOpen: false,
		addOpen: false,
		adminOpen: false
	}

	toggleMain = () => {
		this.setState({ open: !this.state.open })
	}

	toggleCattle = () => {
		this.setState({
			cattleOpen: !this.state.cattleOpen
		})
	}

	toggleAdd = () => {
		this.setState({
			addOpen: !this.state.addOpen
		})
	}

	toggleAdmin = () => {
		this.setState({
			adminOpen: !this.state.adminOpen
		})
	}

	get cattleDropdown() {
		return <NavDropdown
			isOpen={this.state.cattleOpen}
			toggle={this.toggleCattle}>
			<DropdownToggle nav caret>Cattle</DropdownToggle>
			<DropdownMenu>
				<DropdownItem onClick={event => {
					openPage.value = 'cattle-bull'
				}}>Bulls</DropdownItem>
				<DropdownItem>Cows</DropdownItem>
				<DropdownItem>Calves</DropdownItem>
				<DropdownItem>Steers</DropdownItem>
				<DropdownItem>Heifers</DropdownItem>
				<DropdownItem>All</DropdownItem>
			</DropdownMenu>
		</NavDropdown>
	}

	get addDropdown() {
		return <NavDropdown isOpen={this.state.addOpen}
			toggle={this.toggleAdd}>
			<DropdownToggle nav caret>Add</DropdownToggle>
			<DropdownMenu>
				<DropdownItem onClick={event => {
					openPage.value = 'add-bull'
				}}>New Bull</DropdownItem>
				<DropdownItem onClick={event => {
					openPage.value = 'add-cow'
				}}>New Cow</DropdownItem>
				<DropdownItem onClick={event => {
					openPage.value = 'add-calf'
				}}>New Calf</DropdownItem>
				<DropdownItem onClick={event => {
					openPage.value = 'add-steer'
				}}>New Steer</DropdownItem>
			</DropdownMenu>
		</NavDropdown>
	}

	get adminDropdown() {
		return <NavDropdown isOpen={this.state.adminOpen}
			toggle={this.toggleAdmin}>
			<DropdownToggle nav caret>Admin</DropdownToggle>
			<DropdownMenu>
				<DropdownItem onClick={event => {
					openPage.value = 'info'
				}}>Ranch Info</DropdownItem>
				<DropdownItem>Settings</DropdownItem>
				<DropdownItem>Contacts</DropdownItem>
				<DropdownItem>Reports</DropdownItem>
				<DropdownItem>Equipment &#38; Inventory</DropdownItem>
				<DropdownItem>Pastures &#38; Pens</DropdownItem>
				<DropdownItem>Pedigrees</DropdownItem>
			</DropdownMenu>
		</NavDropdown>
	}

	render() {
		const s = this.state
		return (
			<Navbar color='faded' light toggleable fixed='top'>
				<NavbarToggler
					right
					onClick={this.toggleMain}
				/>
				<NavbarBrand
					style={{
						cursor: 'pointer'
					}}
					onClick={event => {
						openPage.value = 'home'
					}}
				>Cattle Barn</NavbarBrand>
				<Collapse isOpen={s.open} navbar>
					<Nav navbar className='mr-auto'>
						{this.cattleDropdown}
						{this.addDropdown}
						{this.adminDropdown}
					</Nav>
					<Nav navbar>
						<NavItem className='float-sm-left'>
							<NavLink>Check DB</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Clear DB</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}
