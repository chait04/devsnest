import React from 'react'

const FoodList = ({props}) => {
    return (
        <div className="foodList">
            <h1>{props.food}</h1>
            <h3>{props.food} contains {props.calorie} amount of calories </h3></div>
    )
}

export default FoodList
