import { connect } from 'react-redux'
import App from './index'
import { CreateMessage } from '../../store/actions/message.action'


const mapStateToProps = state => ({
  messages: state.message.messages
})

const mapDispatchToProps = dispatch => ({
  CreateMessage: value => dispatch(CreateMessage(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
