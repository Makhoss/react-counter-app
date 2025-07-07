import {
  INCREMENT,
  DECREMENT,
  INCREMENT_WITH_PARAMS,
  DECREMENT_WITH_PARAMS,
} from "../actions/actions";

const initialState = {
  counter: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case INCREMENT_WITH_PARAMS:
      return { counter: state.counter + action.number };
       case DECREMENT_WITH_PARAMS:
      return { counter: state.counter - action.number };
    default:
      return state;
  }
};
