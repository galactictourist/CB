import * as React from 'react'
import {
    Container,
    Table,
} from 'reactstrap'

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
    comonentWillMount() {
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
        return <tr>
            <td>
                <a href='#' onClick={event => {
                    openPage.value = 'cattle-bull'
                }}>
                    Bulls
                </a>
            </td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
    }

    get calves() {
        return <tr>
            <td>Calves</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
    }

    get steers() {
        return <tr>
            <td>Steers</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
    }

    get cows() {
        return <tr>
            <td>Cows</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
        </tr>
    }

    get heifers() {
        return <tr>
            <td>Heifers</td>
            <td>23</td>
            <td>23</td>
            <td>23</td>
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
