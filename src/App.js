import { csv } from 'd3'
import React from 'react'
import { Form, Grid, Header, Accordion, Icon } from 'semantic-ui-react'
import checkboxes from './config/checkboxes'
import Checkbox from './components/Checkbox'
import ItemList from './components/ItemList'
import 'semantic-ui-css/semantic.min.css'
import data from './data/Product.csv'

import itemsSrc from './data/Items.json'

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			filter: [],
			checkedItems: new Map(),
			search: '',	
		}
	}
	
	componentDidMount() {
		csv(data).then((newData) => this.setState({ items: newData }))
	}

	handleAccordionClick = (event, titleClick) => {
		const { activeIndex } = this.state
		const newIndex = activeIndex === titleClick.index ? -1 : titleClick.index
		this.setState({ activeIndex: newIndex })
	}

	handleChange = event => {
		const item = event.target.name
		const isChecked = event.target.checked
		this.setState((prevState, props) => ({
			checkedItems: prevState.checkedItems.set(item, isChecked),
			items: [],
		}, this.findFilter()))
	}

	findFilter = () => {
		const newFilter = []
		for (let [key, value] of this.state.checkedItems) {
			if (value === true) { newFilter.push(key) }
		}
		this.setState({
			filter: newFilter
		})
	}

	// onSearch = () => {
	// 	// keyword
	// }

	clearAll = event => {
		csv(data).then((newData) => this.setState({
			items: newData,
			filter: [],
			checkedItems: new Map(),
		}))
	}

	render() {
		const { activeIndex, checkedItems, filter, items } = this.state

		return (
			<Grid style={{ margin: '0' }}>
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
						<Header as='h1' style={{ fontSize: '3.4em' }}>Filter</Header>
						<Form vertical>
							<Form.Button
								onClick={this.clearAll}
								textAlign='center'
								type="button"
								content="Reset"
								style={{ 
									backgroundColor: '#EEEEEE', 
									fontSize: '1.5em', 
									width: '14.73em',
									marginBottom: '1em'
								}}>
									Clear All
							</Form.Button>
							
							<Accordion styled style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em' }}>
								<Accordion.Title
									active={activeIndex === 0}
									index={0}
									onClick={this.handleAccordionClick}
								>
									<Icon name='dropdown' />
									Category
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 0}>
									{
										checkboxes.map((item, index) => (
											item.id > 0 && item.id <= 4 ?
												<>
													<Checkbox
														key={item.key}
														name={item.name} 
														checked={checkedItems.get(item.name)} 
														onChange={this.handleChange}
													/>
													<label style={{ marginLeft: '.3em', fontSize: '.8em' }}>{item.label}</label><br/>
												</>	: null
											)
										)
									}
								</Accordion.Content>

								<Accordion.Title
									active={activeIndex === 1}
									index={1}
									onClick={this.handleAccordionClick}
								>
									<Icon name='dropdown' />
									Availability
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 1}>
									{
										checkboxes.map((item, index) => (
											item.id > 4 && item.id <= 8 ?
												<>
													<Checkbox
														key={item.key}
														name={item.name} 
														checked={checkedItems.get(item.name)} 
														onChange={this.handleChange}
													/>
													<label style={{ marginLeft: '.3em', fontSize: '.8em' }}>{item.label}</label><br/>
												</>	: null
											)
										)
									}
								</Accordion.Content>

								<Accordion.Title
									active={activeIndex === 2}
									index={2}
									onClick={this.handleAccordionClick}
								>
									<Icon name='dropdown' />
									Price
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 2}>
									{
										checkboxes.map((item, index) => (
											item.id > 8 && item.id <= 12 ?
												<>
													<Checkbox
														key={item.key}
														name={item.name} 
														checked={checkedItems.get(item.name)} 
														onChange={this.handleChange}
													/>
													<label style={{ marginLeft: '.3em', fontSize: '.8em' }}>{item.label}</label><br/>
												</>	: null
											)
										)
									}
								</Accordion.Content>

								<Accordion.Title
									active={activeIndex === 3}
									index={3}
									onClick={this.handleAccordionClick}
								>
									<Icon name='dropdown' />
									Rating
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 3}>
									{
										checkboxes.map((item, index) => (
											item.id > 12 && item.id <= 15 ?
												<>
													<Checkbox
														key={item.key}
														name={item.name} 
														checked={checkedItems.get(item.name)} 
														onChange={this.handleChange}
													/>
													<label style={{ marginLeft: '.3em', fontSize: '.8em' }}>{item.label}</label><br/>
												</>	: null
											)
										)
									}
								</Accordion.Content>
							</Accordion>
						</Form>
					</Grid.Column>
					<Grid.Column width={12} style={{ padding: '3em 6em' }}>
						<Header as='h1' style={{ fontSize: '3.4em' }}>Results</Header>

						<ItemList data={items} filter={filter} />	

					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
