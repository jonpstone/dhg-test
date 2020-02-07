import React from 'react'
import { Grid, Header, Form, Checkbox, Button, Accordion, Icon } from 'semantic-ui-react'
import ItemInfo from './components/ItemInfo'
import 'semantic-ui-css/semantic.min.css'

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			filter: [],
			search: '',
			
		}
	}
	
	// handleChange(e) {
	// 	const item = e.target.name;
	// 	const isChecked = e.target.checked;
	// 	this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
	//   }

	handleAccordionClick = (e, titleClick) => {
		const { activeIndex } = this.state
		const newIndex = activeIndex === titleClick.index ? -1 : titleClick.index
	
		this.setState({ activeIndex: newIndex })
	}

	componentDidMount() {
		const itemsSrc = require('./Items.json')

		this.setState({ items: [...itemsSrc] })
	}

	onSearch = () => {
		// keyword
	}

	onFilter = (...args) => {
		this.setState({ items: [] })
		if (args.includes('electronics', 'book', 'school', 'toy')) {
			if ('electronics') {

			}
		}
		console.log(args)
	}

	findFilter = (e, {name}) => {
		const { filter } = this.state
		const arrCopy = this.state.filter
		filter.includes(name) ?
			this.setState({ filter: arrCopy.filter((checkName) => !(checkName === name)) }) :
			this.setState({ filter: [...filter, name] })
		this.onFilter(...filter)
	}

	findItem() {

	}

	alreadyIn() {

	}

	clearAll = () => {
		this.form.reset()
		this.setState({ items: [] }) 
	}

	render() {
		const { items, activeIndex } = this.state

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
						<Form vertical ref={ ref => this.form = ref }>
							<Form.Button
								onClick={this.form.reset()}
								textAlign='center' 
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
									<Checkbox name='electronics' label='Electronics' onChange={this.findFilter}/><br/>
									<Checkbox name='books' label='Books' onChange={this.findFilter}/><br/>
									<Checkbox name='school' label='School' onChange={this.findFilter}/><br/>
									<Checkbox name='toy' label='Toy' onChange={this.findFilter}/>
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
									<Checkbox name='oneToFifty' label='1 to 50' onChange={this.findFilter}/><br/>
									<Checkbox name='fiftyOneToHundred' label='51 to 100' onChange={this.findFilter}/><br/>
									<Checkbox name='hundredOneToHundredFifty' label='101 to 150' onChange={this.findFilter}/><br/>
									<Checkbox name='OneFiftyOneToTwoHundred' label='151 to 200' onChange={this.findFilter}/>
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
									<Checkbox name='underFiftyBucks' label='Under $50' onChange={this.findFilter}/><br/>
									<Checkbox name='fiftyOneToHundredBucks' label='$51 to $100' onChange={this.findFilter}/><br/>
									<Checkbox name='oneHundredOneToFiveHundredBucks' label='$101 to $500' onChange={this.findFilter}/><br/>
									<Checkbox name='overFiveHundredBucks' label='$500+' onChange={this.findFilter}/>
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
									<Checkbox name='overFour' label='Over 4 Stars' onChange={this.findFilter}/><br/>
									<Checkbox name='overThree' label='Over 3 Stars' onChange={this.findFilter}/><br/>
									<Checkbox name='overTwo' label='Over 2 Stars' onChange={this.findFilter}/>
								</Accordion.Content>
							</Accordion>
						</Form>
					</Grid.Column>
					<Grid.Column width={12} style={{ padding: '3em 6em' }}>
						<Header as='h1' style={{ fontSize: '3.4em' }}>Results</Header>
						{	
							items && items.length ? items.map((item) =>
								<ItemInfo
									key={item.id}
									name={item.name}
									image={item.image}
									category={item.Electronics}
									color={item.color}
									rating={item.rating}
									price={item.price}
									itemsLeft={item.items_left}
									description={item.description}						
								/> 
							) : "No results found..."
						}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}