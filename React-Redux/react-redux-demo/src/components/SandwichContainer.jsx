import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySandwich } from "../redux";

function SandwichContainer() {
    const noOfSandwich = useSelector(state => state.sandwich.noOfSandwich);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>No of Icecreams - {noOfSandwich}</h2>
            <button onClick={() => dispatch(buySandwich())}>Buy Sandwich</button>
        </div>
    )
}

export default SandwichContainer;