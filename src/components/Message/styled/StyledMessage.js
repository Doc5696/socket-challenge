import styled from 'styled-components'

const StyledMessage = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
  padding: 12px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  p{
    color: #555;
    font-size: 16px;
  }
  .date{
    font-size: 12px;
    color: #999;
  }
`

export default StyledMessage
