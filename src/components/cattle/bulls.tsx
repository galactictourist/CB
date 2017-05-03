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

import Component from '../'
import EditBull from '../add/bull'

import {
    Bull
} from '../../types'

interface P {

}

interface S {
    bulls: Bull[]
    bull: Bull
}

export default class CattleBull extends Component<P, S> {
    async componentWillMount() {
        this.state = {
            bulls: [],
            bull: null
        }

        var bulls = await db.get<Bull>('SELECT * FROM Bull')
        this.setState({ bulls })
    }

    get bulls() {
        const s = this.state

        return <Table bordered striped>
            <thead>
                <tr>
                    <th>Name/ID</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {s.bulls.map((v, i) => {
                    return <tr key={i}>
                        <td>
                            <a href='#' onClick={event => {
                                this.setState({ bull: v })
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

    get bull() {
        const s = this.state
        return <div>
            <h3>
                Editing Bull: {s.bull.name}
            </h3>
            <Nav tabs>
                <NavItem>
                    <NavLink active>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Mortality/Carcass</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Med/Measurements</NavLink>
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
                    <NavLink>Semen</NavLink>
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
            <TabContent activeTab='1'>
                <TabPane tabId='1'>
                    <EditBull bull={s.bull} />
                </TabPane>
            </TabContent>
        </div>
    }

    render() {
        const s = this.state
        var v = null

        if (s.bull) {
            v = this.bull
        } else {
            v = this.bulls
        }

        return <Container fluid>
            {v}
        </Container>
    }
}
