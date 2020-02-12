import React from 'react'
import ItemInfo from './ItemInfo'

export default class ItemList extends React.Component {
    state = {
        results: this.props.data
    }

    onFilter = (filter) => {
        const filteredData = this.props.data.filter((item) => {
            return filter.includes(item.category) ||
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
        console.log('NOT FILTERED', this.props.data)
        console.log('FILTERED', filteredData)
    }

    render() {
        const filtered = [...new Set(this.onFilter(this.props.filter))]
        
        return (
            <>
                {	
                    filtered && filtered.length ? filtered.map((item) =>
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
            </>
        )
    }
}