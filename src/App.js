import React from 'react'
import { Form, Grid, Header, Accordion, Icon } from 'semantic-ui-react'
import ItemInfo from './components/ItemInfo'
import 'semantic-ui-css/semantic.min.css'

const itemsSrc = require('./Items.json')

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			filter: [],
			search: '',
			unCheckAll: false
		}
	}

	handleAccordionClick = (e, titleClick) => {
		const { activeIndex } = this.state
		const newIndex = activeIndex === titleClick.index ? -1 : titleClick.index
	
		this.setState({ activeIndex: newIndex })
	}

	componentDidMount() {
		this.setState({ items: [...itemsSrc] })
	}

	onSearch = () => {
		// keyword
	}

	onFilter = (...args) => {
		this.setState({ items: [] })
		// if (args.includes('electronics', 'book', 'school', 'toy')) {
		// 	if ('electronics') {

		// 	}
		// }
		console.log('ARGS', args)
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

	clearAll = e => {
		this.setState({ unCheckAll: true })
		this.setState({ items: [...itemsSrc] })
	}

	unCheck = () => {
		// const checkboxElements = [...document.getElementsByClassName("checkbox")]
		// checkboxElements.forEach(element => element.state.checked = false)
	 }

	render() {
		const { items, activeIndex, unCheckAll } = this.state

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
									<Form.Checkbox name='electronics' label='Electronics' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='books' label='Books' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='school' label='School' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='toy' label='Toy' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
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
									<Form.Checkbox name='oneToFifty' label='1 to 50' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='fiftyOneToHundred' label='51 to 100' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='hundredOneToHundredFifty' label='101 to 150' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='OneFiftyOneToTwoHundred' label='151 to 200' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
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
									<Form.Checkbox name='underFiftyBucks' label='Under $50' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='fiftyOneToHundredBucks' label='$51 to $100' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='oneHundredOneToFiveHundredBucks' label='$101 to $500' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='overFiveHundredBucks' label='$500+' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
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
									<Form.Checkbox name='overFour' label='Over 4 Stars' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='overThree' label='Over 3 Stars' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
									<Form.Checkbox name='overTwo' label='Over 2 Stars' checked={unCheckAll ? false : this.state.checked} onChange={this.findFilter} />
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