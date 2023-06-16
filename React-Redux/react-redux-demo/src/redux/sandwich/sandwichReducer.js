import { BUY_SANDWICH } from "./sandwichConstants";

const initialSandwichState = {
  noOfSandwich: 20,
};

const sandwichReducer = (state = initialSandwichState, action) => {
  switch (action.type) {
    case BUY_SANDWICH:
      return {
        noOfSandwich: state.noOfSandwich - 1,
      };
    default:
      return state;
  }
};

export default sandwichReducer;
