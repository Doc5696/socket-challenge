import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  display: block;
  max-width: 80%;
  border-radius: 5px;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  transition: 0.25s;
  &:focus{
    outline: none;
    border: 1px solid lightblue;
    box-shadow: 1px 1px 5px lightblue;
  }
`

export default StyledTextArea
