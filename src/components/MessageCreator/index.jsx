import React, { useState } from 'react';
import StyledTextArea from './styled/StyledTextArea'
import StyledWrapper from './styled/StyledWrapper'
import StyledButton from './styled/StyledButton'


const MessageCreator = ({
  onClick
}) => {
  const [value, setValue] = useState('');
  const nowDate = new Date();
  const handleClick = () => {
    onClick({message: value, date: +nowDate})
    setValue('')
  }
  return (
    <StyledWrapper>
        <StyledTextArea
          value={value}
          onChange={e => setValue(e.target.value)} />
        <StyledButton
          disabled={!value}
          onClick={() => handleClick()}
        >
          Send
        </StyledButton>
    </StyledWrapper>
  )
}

export default MessageCreator;
