import * as types from './types';

export const CreateMessage = message => {
  return {
    type: types.CREATE_MESSAGE,
    message,
  };
};
