import React from 'react'
import { Grid, Header, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			filter: [],
			search: '' // keyword
		};
	}

	componentDidMount() {}

	onSearch() {
		// keyword
	}

	onFilter() {
		// filters
	}

	findFilter() {

	}

	findItem() {

	}

	alreadyIn() {

	}

	clearAll() {

	}

	render() {
		let items = require('./Items.json')

		return (
			<Grid celled style={{ margin: '0' }}>
				<Grid.Row style={{ padding: '2em 3em 1em', backgroundColor: '#0f84a8'}}>
					<Grid.Column width={6} textAlign='center'>
						<Header as='h1' inverted style={{ fontSize: '4.4em' }}>Store Page</Header>
					</Grid.Column>
					<Grid.Column width={10}>
						<Form>
							<Form.Group>
								<Form.Input size='massive' placeholder='Type to search...' style={{ width: '26em', paddingRight: '1.7em' }}/>
								<Form.Button size='massive' style={{ width: '10em'}}>Search</Form.Button>
							</Form.Group>
						</Form>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={4}>
						<Header as='h1'>Filter</Header>
						<Form>
							
						</Form>
					</Grid.Column>
					<Grid.Column width={12}>
						<Header as='h1'>Results</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}