// Cake & Icecream Shop Example
const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action and Action Creator

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Second Redux Action",
  };
}

// State

const initialCakeState = {
  noOfCakes: 10,
};

const initialIcecreamState = {
  noOfIcecreams: 20,
};

// Reducers

const CakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};

const IcecreamReducer = (state = initialIcecreamState, action) => {
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

const rootReducer = combineReducer({
  cake: CakeReducer,
  icecream: IcecreamReducer,
});

// Redux Store

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
