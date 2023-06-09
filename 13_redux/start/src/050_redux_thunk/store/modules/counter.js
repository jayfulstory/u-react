import { createSlice } from '@reduxjs/toolkit';
import { asyncCount } from '../../api/counter';

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  },
});

const { add, minus } = counter.actions;

const addAsync = payload => {
  return async (dispatch, getState) => {
    // const state = getState();
    // console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  };
};
const minusAsync = payload => {
  return async (dispatch, getState) => {
    const response = await asyncCount(payload);
    dispatch(minus(response.data));
  };
};

export { add, minus, addAsync, minusAsync };
export default counter.reducer;
