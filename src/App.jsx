import React, {Component} from 'react';

import Chatbar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';


  class App extends Component {

    constructor(props) {
      super(props);

      this.onNewPost = this.onNewPost.bind(this);
      this.onNewUsername = this.onNewUsername.bind(this);

      this.state = {
        currentUser: {
          name: ''
        },
        messages: [
          {
            id: '',
            username: '',
            content: ''
          }]
      };
    }

    componentDidMount() {
      this.socket = new WebSocket('ws://localhost:3001');

      this.socket.onopen = (event) => {
        this.socket.send('hey from Client!');

        this.socket.addEventListener('message', (message) => {
          console.log('Message from server ' + message.data)
        });
      }
    }


    onNewPost(message) {
      function getRandomNum(min, max) {
        return Math.random() * (max - min) + min;
      }

        if(message.keyCode===13) {
          const newMessage = {id: getRandomNum(10, 90), username: this.state.currentUser.name, content: message.target.value };
          const messages = this.state.messages.concat(newMessage)

          this.setState({messages: messages})   
          message.target.value = '';
        }
    }


    onNewUsername(event) {

      let username = event.target.value; // string of input
      let name = {name: username}

      this.setState({currentUser: name});
    }


    render() {
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <MessageList messages = { this.state.messages} />
          <Chatbar currentUser = { this.state.currentUser.name } onNewPost = { this.onNewPost } onNewUsername = { this.onNewUsername }/>       {/* pass currentUser.name to Chatbat */}
        </div>
      );
    }
  }

export default App;
