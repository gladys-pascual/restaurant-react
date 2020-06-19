import React from 'react';

const FoodCard = (props) => {

  return (
    <div className="OuterFoodCard">
      <div className="FoodCard">
        <div className="FoodContainer">

          {/* item 1*/}
          <div className="Image-Name-Description">
            <div className="FoodImage">
              <img src={props.imageURL} alt={props.foodName} />
            </div>
            <div className="Name-Description">
              <h2> {props.foodName} </h2>
              <p> {props.foodDescription} </p>
            </div>
          </div>

          {/* item 2 */}
          <div className="Heart-Price">
            <div className="heart-icon">
              {props.favourite
                ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="heart" />
                : <img src="" alt="" />
              }  </div>
            <p className="Price"> {props.price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;

