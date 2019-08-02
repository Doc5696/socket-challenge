import * as types from './types';

export const GetMessages = message => {
  return {
    type: types.GET_MESSAGES,
    message,
  };
};

export const CreateMessage = message => {
  return {
    type: types.CREATE_MESSAGE,
    message,
  };
};

