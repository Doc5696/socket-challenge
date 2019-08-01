import React from 'react';
import Message from '../Message'
import { subscribeToTimer } from '../../store/api';
import StyledContainer from './styled/StyledContainer'
import MessageCreator from '../MessageCreator'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    subscribeToTimer((err, newBleat) => this.setState(prevState => ({
      ...this.state,
      messages: [ JSON.parse(newBleat), ...prevState.messages ]
    })));
  }


  render() {
    const { messages } = this.state
    const { CreateMessage } = this.props
    console.log("TCL: App -> render -> messages", this.props.messages)
    return (
      <>
        <StyledContainer>
          {messages.map(message => (
            <Message
              key={message.date}
              date={message.date}
              message={message.message}
            />
          ))}
        </StyledContainer>
        <MessageCreator
          onClick={CreateMessage}
        />
      </>
    );
  }
}

export default App;
