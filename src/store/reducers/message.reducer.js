import * as types from '../actions/types';

const initialState = {
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_MESSAGE: {
      const { messages } = state
      const newMessage = { ...action.message, isOwn: true }
      const newMessages = [ newMessage, ...messages ]
      return {
        ...state,
        messages: newMessages
      };
    }
    case types.GET_MESSAGES: {
      const { messages } = state
      const newMessages = [ action.message, ...messages ]
      return {
        ...state,
        messages: newMessages
      };
    }
    default:
      return state;
  }
};

export default messageReducer;
