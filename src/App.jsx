import React, {Component} from 'react';

import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';


  class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        currentUser: {name: 'Freddy'},
        messages: [
          {
            id: '1',
            username: 'Cheese',
            content: 'Has anyone seen my marbles?',
          },
          {
            id: '2',
            username: 'Lettuce',
            content: 'No, I think you lost them. You lost your marbles Cheese. You lost them for good.'
          }
        ]
      };
      this.onNewPost = this.onNewPost.bind(this);
    }

    
    componentDidMount() {
      setTimeout(() => {
        
        const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
        const messages = this.state.messages.concat(newMessage)

        this.setState({messages: messages})   
      }, 3000);
    }

    onNewPost(message) {
        if(message.keyCode===13) {
          const newMessage = {id: 19, username: 'George', content: message.target.value };
          const messages = this.state.messages.concat(newMessage)

          this.setState({messages: messages})   
          message.target.value = '';
        }
    }

    render() {
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <MessageList messages = { this.state.messages} />
          <Chatbar currentUser = { this.state.currentUser.name } onNewPost = { this.onNewPost } />       {/* pass currentUser.name to Chatbat */}
        </div>
      );
    }
  }

export default App;
