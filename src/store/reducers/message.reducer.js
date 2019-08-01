import * as types from '../actions/types';

const initialState = {
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_MESSAGE: {
      const { messages } = state
      return {
        ...state,
        messages: [ action.message, ...messages ]
      };
    }
    default:
      return state;
  }
};

export default messageReducer;
