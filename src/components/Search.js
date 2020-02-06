import React from 'react';
import { Grid, Segment} from 'semantic-ui-react'

export default class Search extends React.Component {

	// onSearch() {

	// }

	render() {
		return (
			<>
				{
					this.props.items ?
						this.props.items.map((item) =>
							<Grid key='id'>
								<Grid.Column width={3}>
									{item.image}
								</Grid.Column>
								<Grid.Column width={9}>
									{item.name}
									{item.rating}
									{item.description}
								</Grid.Column>
								<Grid.Column width={4}>
									{item.price}
									<Segment as='button' content='Add to Cart' />
								</Grid.Column>
							</Grid>
						) : null
				}
			</>
		)
	}
}