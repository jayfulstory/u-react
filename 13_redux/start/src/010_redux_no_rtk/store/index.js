import { createStore } from 'redux';

const initalState = 0;

const reducer = (state = initalState, { type, step }) => {
  switch (type) {
    case '+':
      return state + step;
    case '-':
      return state - step;
    default:
      return state;
  }
};

export default createStore(reducer);
