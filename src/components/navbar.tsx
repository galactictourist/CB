import * as bootstrap from 'bootstrap';
import * as React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

interface P {
}

interface S {
    open: boolean
}

export default class extends React.Component<P, S> {
    state = {
        open: false
    }

    toggle() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <Navbar color='faded' light toggleable>
            </Navbar>
        )
    }
}
