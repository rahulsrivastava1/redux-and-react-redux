import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from "../redux";

function IcecreamContainer() {
    const noOfIcecreams = useSelector(state => state.iceCream.noOfIcecreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>No of Icecreams - {noOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    )
}

export default IcecreamContainer;