import { connect } from 'react-redux'
import App from './index'
import { CreateMessage, GetMessages } from '../../store/actions/message.action'


const mapStateToProps = state => ({
  messages: state.message.messages,
  store: state,
})

const mapDispatchToProps = dispatch => ({
  CreateMessage: value => dispatch(CreateMessage(value)),
  GetMessages: message => dispatch(GetMessages(message)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
