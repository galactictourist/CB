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

interface P {
}

interface S {
    open: boolean
    cattleOpen: boolean
    addOpen: boolean
}

export default class NavBar extends React.Component<P, S> {
    state = {
        open: false,
        cattleOpen: false,
        addOpen: false,
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

    get cattleDropdown() {
        return <NavDropdown
            isOpen={this.state.cattleOpen}
            toggle={this.toggleCattle}>
            <DropdownToggle nav caret>Cattle</DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Bulls</DropdownItem>
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
                <DropdownItem>New Bull</DropdownItem>
                <DropdownItem>New Cow</DropdownItem>
                <DropdownItem>New Calve</DropdownItem>
                <DropdownItem>New Steer</DropdownItem>
            </DropdownMenu>
        </NavDropdown>
    }

    render() {
        const s = this.state
        return (
            <Navbar color='faded' light toggleable>
                <NavbarToggler
                    right
                    onClick={this.toggleMain}
                />
                <NavbarBrand>Cattle Barn</NavbarBrand>
                <Collapse isOpen={s.open} navbar>
                    <Nav className='nav-right'>
                        {this.cattleDropdown}
                        {this.addDropdown}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
