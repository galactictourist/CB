import * as React from 'react'
import {
	Container,
	Row,
	Col
} from 'reactstrap'

import Component from '../'
import InputComp from '../input-comp'
import SelectComp from '../input-comp/select'

interface P { }
interface S { }

export default class BullMedMeasurement extends Component<P, S> {
	render() {

		return <Container fluid>
			<h3>Medical & Measurements</h3>
		</Container>
	}
}
