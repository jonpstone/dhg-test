// import { csv } from 'd3'
import React from 'react'
import { Form, Grid, Header, Accordion, Icon } from 'semantic-ui-react'
import checkboxes from './config/checkboxes'
import Checkbox from './components/Checkbox'
import ItemList from './components/ItemList'
import 'semantic-ui-css/semantic.min.css'
import './main.scss';
const itemsSrc = require('./data/Items.json')
// import data from './data/Product.csv'

export default class App extends React.Component {
	state = {
		items: [],
		filter: [],
		numReturns: [],
		checkedItems: new Map(),
	}
	
	componentDidMount() { 
		this.setState({ items: itemsSrc }) }
		// csv(data).then((newData) => this.setState({ items: newData })) <-- Data set will not work with word search
		//																	  unless converted to JSON manually.

	handleAccordionClick = (event, titleClick) => {
		const { activeIndex } = this.state
		const newIndex = activeIndex === titleClick.index ? -1 : titleClick.index
		this.setState({ activeIndex: newIndex })
	}

	handleTextChange = event => {
		const newItems = this.state.items.filter((item) => {
			return item.description.toLowerCase().includes(event.target.value.toLowerCase()) ? item : null
		})
		this.setState({items: newItems})
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
		this.setState({	filter: newFilter })
	}

	onFilter = filter => {
        return this.state.items.filter((item) => {
            return (filter.includes(item.category) || filter.includes(item.category2)) ||
            (filter.includes('oneToFifty') && (item.items_left > 0 && item.items_left <= 50)) ||
            (filter.includes('fiftyOneToHundred') && (item.items_left > 50 && item.items_left <= 100 )) ||
            (filter.includes('oneFiftyOneToTwoHundred') && (item.items_left > 150 && item.items_left <= 200 )) ||
            (filter.includes('underFiftyBucks') && (item.price < 50 )) ||
            (filter.includes('fiftyOneToHundredBucks') && (item.price >= 50 && item.price <= 100)) || 
            (filter.includes('oneHundredOneToFiveHundredBucks') && (item.price > 100 && item.price <= 500)) ||
            (filter.includes('overFiveHundredBucks') && (item.price > 500)) || 
            (filter.includes('overFour') && (item.rating > 4)) ||
            (filter.includes('overThree') && (item.rating > 3)) ||
            (filter.includes('overTwo') && (item.rating > 2)) 
        })
    }

	clearAll = event => { this.setState({items: itemsSrc, filter: [], checkedItems: new Map()}) }
		// csv(data).then((newData) => this.setState({  				<-- Data set will not work with word search
		// 	items: newData, 												unless converted to JSON manually.
		// 	filter: [],
		// 	checkedItems: new Map(),
		// }))
		
	render() {
		const { activeIndex, checkedItems, filter, items } = this.state
		const filtered = [...new Set(this.onFilter(this.state.filter))]

		return (
			<Grid celled style={{ margin: '0' }}>
				<Grid.Row style={{ padding: '2em 3em 1em', backgroundColor: '#0f84a8'}}>
					<Grid.Column width={6} textAlign='center'>
						<Header
							inverted
							as='h1' 
							style={{ 
								fontSize: '4.4em', fontFamily: "'Montserrat', sans-serif", fontWeight: '900' 
							}}
						>
							Store Page
						</Header>
					</Grid.Column>
					<Grid.Column width={10}>
						<Form>
							<Form.Group>
								<Form.Input 
									size='massive' 
									placeholder='Type to search...' 
									style={{ width: '26em', paddingRight: '1.7em' }}
									onChange={this.handleTextChange}
									focus
								/>
								<Form.Button						// <-- Left inert as results are results are 
									size='massive'					//	   returned as the user types
									style={{ width: '10em', fontFamily: "'Montserrat', sans-serif"}}
								>
									Search
								</Form.Button>
							</Form.Group>
						</Form>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column divided width={4} style={{ padding: '3em 6em' }}>
						<Header 
							as='h1' 
							style={{ fontSize: '3.4em', fontFamily: "'Montserrat', sans-serif", fontWeight: '900' }}
						>
							Filter
						</Header>
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
									marginBottom: '1em', 
									fontFamily: "'Montserrat', sans-serif"
								}}>
									Clear All
							</Form.Button>
							
							<Accordion styled style={{ backgroundColor: '#EEEEEE', fontSize: '1.5em' }}>
								<Accordion.Title
									active={activeIndex === 0}
									index={0}
									onClick={this.handleAccordionClick}
									style={{ fontFamily: "'Montserrat', sans-serif" }}
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
									style={{ fontFamily: "'Montserrat', sans-serif" }}
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
									style={{ fontFamily: "'Montserrat', sans-serif" }}
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
									style={{ fontFamily: "'Montserrat', sans-serif" }}
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
						<Grid.Row style={{ marginBottom: '3.5em'}}>
							<Header 
								className='resultsTitle' 
								as='h1' 
								style={{ fontSize: '3.4em', marginRight: '70%', fontFamily: "'Montserrat', sans-serif", fontWeight: '900' }}
							>
								Results
							</Header>
							<div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.2em' }}>
								Returned {filtered.length ? filtered.length : items.length} Items
							</div><br/>
						</Grid.Row>
						<Grid.Row>
							{filter.length ? <ItemList data={filtered} /> : <ItemList data={items} />}
						</Grid.Row>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
