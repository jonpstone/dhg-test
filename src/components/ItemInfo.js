import React from 'react';
import { Grid, Button} from 'semantic-ui-react'
import StarRatings from 'react-star-ratings'

export default ({ image, name, rating, description, price }) =>
	<Grid key='id'>
	<Grid.Column width={3}>
		{image}
	</Grid.Column>
	<Grid.Column width={9}>
		<p>
			<div className='leftDiv'>{name}</div>
			<div className='rightDiv'>
				<StarRatings
					className='stars'
					rating={rating}
					starRatedColor="#2D9CC0"
					numberOfStars={5}
					starDimension="1em"
					name='rating'
					starSpacing={1}
				/>
			</div>
		</p><br />
		<p>{description}</p><br />
	</Grid.Column>
	<Grid.Column width={4}>
		<p>${price}</p><br />
		<Button content='Add to Cart' />
	</Grid.Column>
</Grid>

