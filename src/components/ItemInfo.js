import React from 'react';
import { Grid, Button} from 'semantic-ui-react'

export default class ItemInfo extends React.Component {

	printRating() {

	}

	render() {
		const { image, name, rating, description, price } = this.props

		return (
			<Grid key='id'>
			<Grid.Column width={3}>
				{image}
			</Grid.Column>
			<Grid.Column width={9}>
				{name}
				{rating}<br />
				{description}<br />
			</Grid.Column>
			<Grid.Column width={4}>
				${price}<br />
				<Button content='Add to Cart' />
			</Grid.Column>
		</Grid>
		)
	}
}

