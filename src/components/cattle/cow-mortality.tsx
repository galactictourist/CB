import * as React from 'react'
import {
	Container,
	Row,
	Col,
	Input,
	FormGroup,
	Label,
	Button,
	FormText
} from 'reactstrap'

import Component from '../'
import InputComp from '../input-comp'
import SelectComp from '../input-comp/select'

import {
	CowMortality as CowMortalityInterface
} from '../../types'

interface P { }
interface S extends CowMortalityInterface { }

export default class CowMortality extends Component<P, S> {
	componentWillMount() {
		this.setState({})
	}

	render() {

		return <Container fluid>
			<h2>Mortality Record</h2>
			<Row>
				<Col>
					<InputComp
						type='date'
						label='Date of Death'
					/>
				</Col>
				<Col>
					<InputComp
						type='text'
						label='Cause of Death'
					/>
				</Col>
				<Col>
					<InputComp
						type='text'
						label='Location'
					/>
				</Col>
			</Row>
			<Row>
				<Col md={10}>
					<InputComp
						type='text'
						label='Symptoms'
						placeholder='Death Symptoms'
					/>
				</Col>
				<Col>
					<SelectComp
						label='Policy'
						values={[
							'Policy 1',
							'Policy 2',
							'Policy 3'
						]}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={2}>
					<SelectComp
						label='Insured'
						values={[
							'No',
							'Yes',
						]}
					/>
				</Col>
				<Col md={4}>
					<InputComp
						type='text'
						label='Insurance'
					/>
				</Col>
				<Col md={3}>
					<InputComp
						type='text'
						label='Policy #'
					/>
				</Col>
				<Col md={3}>
					<InputComp
						type='text'
						label='Phone'
					/>
				</Col>
			</Row>
			<Row>
				<Col md={3}>
					<InputComp
						type='date'
						label='Coverage Date'
					/>
				</Col>
				<Col md={3}>
					<InputComp
						type='number'
						label='Coverage Amount'
					/>
				</Col>
				<Col md={2}>
					<InputComp
						type='number'
						label='Rate %'
					/>
				</Col>
				<Col md={2}>
					<InputComp
						type='number'
						label='Premium'
					/>
				</Col>
				<Col md={2}>
					<InputComp
						type='number'
						label='Term'
					/>
				</Col>
			</Row>
			<Row>
				<Col md={2}>
					<SelectComp
						label='Autopsy'
						values={[
							'No',
							'Yes',
						]}
					/>
				</Col>
				<Col md={8}>
					<InputComp
						type='text'
						label='Results'
					/>
				</Col>
				<Col md={2}>
					<SelectComp
						label='Results Uploaded'
						values={[
							'Results 1',
							'Results 2',
							'Results 3'
						]}
					/>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<InputComp type='text' label='Veterinarian' />
				</Col>
				<Col md={3}>
					<InputComp type='number' label='Vet Fee' />
				</Col>
				<Col md={3}>
					<InputComp type='date' label='Date' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='textarea' label='Comments' />
				</Col>
			</Row>
			<h2>Carcass</h2>
			<Row>
				<Col md={3}>
					<SelectComp
						label='Carcass Type'
						values={[
							'Actual/Kill Data',
							'Ultrasound'
						]}
					/>
				</Col>
				<Col md={3}>
					<InputComp type='date' label='Kill Date' />
				</Col>
				<Col>
					<InputComp type='textarea' label='Comment' />
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<InputComp type='text' label='Processing Facility' />
				</Col>
				<Col md={3}>
					<InputComp type='number' label='Feeder Weight' />
				</Col>
				<Col md={3}>
					<InputComp type='number' label='Live Weight' />
				</Col>
			</Row>
			<Row>
				<Col md={4}>
					<InputComp type='number' label='Carcass Weight' />
				</Col>
				<Col md={4}>
					<InputComp type='text' label='Ribeye Area' />
				</Col>
				<Col md={4}>
					<InputComp type='text' label='Ribeye Area/CWT' />
				</Col>
			</Row>
			<Row>
				<Col md={3}>
					<InputComp type='text' label='Fat Thickness' />
				</Col>
				<Col md={3}>
					<InputComp type='text' label='Intramascular Fat' />
				</Col>
				<Col md={3}>
					<InputComp type='text' label='Marbling' />
				</Col>
				<Col md={3}>
					<InputComp type='text' label='Frame Score' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='text' label='Maturity' />
				</Col>
				<Col>
					<InputComp type='text' label='Quality Grade' />
				</Col>
				<Col>
					<InputComp type='text' label='Yield Grade' />
				</Col>
				<Col>
					<InputComp type='text' label='PEN/LOT' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='text' label='Tenderness' />
				</Col>
				<Col>
					<InputComp type='text' label='Carcass Value' />
				</Col>
				<Col>
					<InputComp type='text' label='Dressing %' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='number' label='Report #' />
				</Col>
				<Col>
					<InputComp type='number' label='Carcass #' />
				</Col>
				<Col>
					<InputComp type='number' label='Lot #' />
				</Col>
				<Col>
					<InputComp type='number' label='Days on Feed' />
				</Col>
			</Row>
			<Row>
				<Col>
					<InputComp type='textarea' label='Comments' />
				</Col>
			</Row>
			<Row style={{
				textAlign: 'center'
			}}>
				<Col>
					<Button>Save</Button>
					{' '}
					<Button>Cancel</Button>
					{' '}
					<Button>Clear</Button>
				</Col>
			</Row>
		</Container>
	}
}
