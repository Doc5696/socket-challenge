import React, { useEffect } from 'react';
import Message from '../Message'
import { subscribeToTimer } from '../../store/api';
import StyledContainer from './styled/StyledContainer'
import MessageCreator from '../MessageCreator'
import moment from 'moment'

const App = ({
  CreateMessage,
  messages,
  GetMessages
}) => {
  
  useEffect(() => {
    subscribeToTimer(message => GetMessages(JSON.parse(message)));
  });
  
  return (
    <>
      <StyledContainer>
        {messages
          ? messages.map(message => (
          <Message
            key={message.date}
            date={moment(message.date).format('MMMM Do YYYY, h:mm:ss a')}
            message={message.message}
            isOwn={message.isOwn}
          />
        )) : null
      }
      </StyledContainer>
      <MessageCreator
        onClick={CreateMessage}
      />
    </>
  );
}

export default App;
