import React , {Component} from 'react';

class Message extends Component {
  render() {
    const message = this.props;

    if(message.notification) {
      return ( 
      <div className="message system">
          { message.notification }
        </div>
      )
    }

    return (
      <div>
        <div className="message">
          <span className="message-username">{ message.username }</span>
          <span className="message-content">{ message.content }</span>
        </div>
      </div>

    )
  }
}
  
  export default Message;
