const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// State

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action and Action Creator

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchusersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchusersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchusersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchusersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchusersSuccess(users));
      })
      .catch((error) => dispatch(fetchusersFailure(error.message)));
  };
};

// Reducer

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        uers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

// Store

const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
