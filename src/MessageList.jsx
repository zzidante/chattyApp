import React , {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages; {/* grab array of message objects from App */}
    const message = messages.map(message => {
      return <Message key={ message.id } username={ message.username } content={ message.content } />
    });

    return (
      <main className="messages">
        { message }
      </main>
    );
  }
}
  
  export default MessageList;