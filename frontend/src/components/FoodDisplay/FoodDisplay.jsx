import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    
    // Filtrar la lista de comidas según la categoría
    const filteredFoodList = category === "ALL" 
        ? food_list 
        : food_list.filter(item => item.category === category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Platos Para ti</h2>
            <div className="food-display-list">
                {filteredFoodList.map((item, index) => {
                    if(category==="ALL" ||category===item.category ) {
                        return <Fooditem 
                        key={index}
                        id={item._id} 
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        />
                    }
                    
                    
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;