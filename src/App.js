import React from 'react'
import { Grid, Header, Form, Checkbox, Segment } from 'semantic-ui-react'
import Search from './components/Search'
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
			<Grid divided style={{ margin: '0' }}>
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
					<Grid.Column divided width={4} style={{ padding: '3em 6em' }}>
						<Header as='h1'>Filter</Header>
						<Form vertical>
							<Segment as='button' textAlign='center' style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em', width: '14em' }}>Clear All</Segment>
							<Segment as='button' textAlign='left' style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em', width: '14em', margin: '0' }}>> Category</Segment>
							<Segment as='button' textAlign='left' style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em', width: '14em', margin: '0' }}>> Availability</Segment>
							<Segment as='button' textAlign='left' style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em', width: '14em', margin: '0' }}>> Price</Segment>
							<Segment textAlign='left' style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em', width: '14em', margin: '0' }}>
								> Rating
								<Form.Field>
									<Checkbox label='Over 4 Stars' style={{ paddingTop: '1.5em'}}/>
								</Form.Field>
								<Form.Field>
									<Checkbox label='Over 3 Stars'/>
								</Form.Field>	
								<Form.Field>
									<Checkbox label='Over 2 Stars'/>
								</Form.Field>		
							</Segment>
						</Form>
					</Grid.Column>
					<Grid.Column width={12} style={{ padding: '3em 6em' }}>
						<Header as='h1'>Results</Header>
						<Search items={items}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}