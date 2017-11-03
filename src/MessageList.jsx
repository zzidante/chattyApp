import React , {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages; {/* grab array of message objects from App */}
    const message = messages.map(message => {
      return <Message 
        key={ message.messages.id } 
        username={ message.messages.username } 
        content={ message.messages.content }
        notification={message.messages.notification}
        type={message.messages.type} 
        />
    });

    return (
      <main className="messages">
        { message }
      </main>
    );
  }
}
  
  export default MessageList;