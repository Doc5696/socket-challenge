import React from 'react';
import StyledTextArea from './styled/StyledTextArea'
import StyledWrapper from './styled/StyledWrapper'
import StyledButton from './styled/StyledButton'

const MessageCreator = () => (
  <StyledWrapper>
    <StyledTextArea />
    <StyledButton>
      Send
    </StyledButton>
  </StyledWrapper>
)

export default MessageCreator;
