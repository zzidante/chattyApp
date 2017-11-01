import React , {Component} from 'react';

class Message extends Component {
  render() {
    const message = this.props;
    return (
      <div>
        <div className="message">
          <span className="message-username">{ message.username }</span>
          <span className="message-content">{ message.content }</span>
        </div>

        <div className="message system">
          Freddy logged on.
        </div>
      </div>
    )
  }
}
  
  export default Message;


  // You feed JS Objs as input properties to Components
  // Components cannot change their own properties