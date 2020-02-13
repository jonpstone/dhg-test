import React from 'react'
import ItemInfo from './ItemInfo'

export default props =>
    <>
        {	
            props.data.map(item =>
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
            )
        }
    </>
