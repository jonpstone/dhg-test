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
			<Grid celled>
				<Grid.Row>
					<Header>
						Store Page
					</Header>
					<Form>
						<Form.Group>
							<Form.Input placeholder='Type to search...' />
							<Form.Button>Search</Form.Button>
						</Form.Group>
					</Form>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}