import React from 'react';
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Items - {props.items}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIcecreams;
    return {
        items: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream());
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);