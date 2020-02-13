import React from 'react';
import { Grid, Button, Image, Header} from 'semantic-ui-react'
import StarRatings from 'react-star-ratings'

export default ({ image, name, rating, description, price }) =>
	<Grid key='id'>
		<Grid.Column width={3}>
			<Image src={image} size='tiny'/>
		</Grid.Column>
		<Grid.Column width={9}>
			<Header 
				as='h1' 
				className='leftDiv' 
				style={{ fontWeight: 'bold', fontFamily: "'Montserrat', sans-serif", fontWeight: 'bold' }}
			>
				{name}
			</Header>
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
			</div><br />
			<p style={{ marginTop: '2em', fontFamily: "'Montserrat', sans-serif", fontSize: '1.2em'}}>{description}</p><br />
		</Grid.Column>
		<Grid.Column width={4} textAlign='center'>
			<Header as='h1' style={{ fontFamily: "'Montserrat', sans-serif"}}>${price}</Header>
			<Button className='addToCart' content='Add to Cart' size='large' style={{ width: '10em' }}/>
		</Grid.Column>
	</Grid>

