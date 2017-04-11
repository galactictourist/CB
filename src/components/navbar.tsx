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
}

export default class extends React.Component<P, S> {
    state = {
        open: false,
        cattleOpen: false
    }

    toggleMain = () => {
        this.setState({ open: !this.state.open })
    }

    get cattleDropdown() {
        return <NavDropdown
            isOpen={this.state.cattleOpen}
            toggle={() => {
                this.setState({
                    cattleOpen: !this.state.cattleOpen
                })
            }}>
            <DropdownToggle caret>Cattle</DropdownToggle>
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
                    <Nav>
                        {this.cattleDropdown}
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
