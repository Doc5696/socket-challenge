import React, { useState } from 'react';
import StyledTextArea from './styled/StyledTextArea'
import StyledWrapper from './styled/StyledWrapper'
import StyledButton from './styled/StyledButton'


const MessageCreator = ({
  onClick
}) => {
  const [value, setValue] = useState('');
  console.log("TCL: value", value)
  return (
    <StyledWrapper>
        <StyledTextArea onChange={e => setValue(e.target.value)} />
        <StyledButton
          onClick={() => onClick(value)}
        >
          Send
        </StyledButton>
    </StyledWrapper>
  )
}

export default MessageCreator;
