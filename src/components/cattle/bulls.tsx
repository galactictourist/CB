import * as React from 'react'
import {
    Container,
    Table
} from 'reactstrap'

import Component from '../'

interface P {

}

interface S {
}

export default class CattleBull extends Component<P, S> {
    get bulls() {
        return <Table bordered hover striped>
            <thead>
                <tr>
                    <th>Name/ID</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    }

    render() {
        return <Container fluid>
            {this.bulls}
        </Container>
    }
}
