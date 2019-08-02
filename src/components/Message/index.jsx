import React from 'react';
import StyledMessage from './styled/StyledMessage'

const Message = ({
  message,
  date,
  isOwn,
}) => (
  <StyledMessage isOwn={isOwn}>
    <p>
      {message}
    </p>
    <p className="date">
      {date}
    </p>
  </StyledMessage>
)

export default Message;
