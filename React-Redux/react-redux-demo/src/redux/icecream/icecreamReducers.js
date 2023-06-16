import { BUY_ICECREAM } from "./icecreamConstants";

const initialIcecreamState = {
  noOfIcecreams: 15,
};

const icecreamReducers = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };

    default:
      return state;
  }
};

export default icecreamReducers;
