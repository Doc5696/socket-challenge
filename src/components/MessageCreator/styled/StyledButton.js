import styled from 'styled-components'

const StyledButton = styled.button`
  position: absolute;
  right: 14%;
  bottom: 10px;
  padding: 10px 25px;
  background-color: transparent;
  border: 1px solid blue;
  color: blue;
  border-radius: 5px;
  transition: 0.25s;
  &:hover{
    cursor: pointer;
    background-color: blue;
    color: white;
  }
  &:disabled{
    cursor: not-allowed;
    &:hover{
      background-color: transparent;
      color: blue;
    }
  }
`

export default StyledButton
