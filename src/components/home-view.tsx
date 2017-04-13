import * as React from 'react'
import {
    Container,
    Table,
} from 'reactstrap'

import Component from './'

interface P {
}

interface S {
}

export default class HomeView extends Component<P, S> {
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
            <td>Bulls</td>
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
