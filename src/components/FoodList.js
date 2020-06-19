import React from 'react';
import FoodCard from './FoodCard'

const FoodList = (props) => {
  console.log('console logging: ', props);
  return (
    <div className="FoodList">
     { props.menu.map ( menu => <FoodCard {...menu}/> )} 
    </div>
  );
}

export default FoodList;