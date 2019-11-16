import React from "react";
import NavigationComponent from "./components/Nav";
import CarouselComponent from "./components/Carousel";
import About from "./components/About";
import Join from "./components/Join";
import chatLogo from "./assets/icons8-chat-bubble-90.png";
import "./App.css";
import Contact from "./components/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: true
    };
  }
  displayChat = () => {
    return (
      <div id="chat-box" className="chat-box">
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/5345a277-1bfb-4ab8-beb2-af29c5666950"
        ></iframe>
      </div>
    );
  };

  hideChat = () => {
    this.setState({ chat: !this.state.chat });
  };

  handleJoin = () => {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;

    const user = {
      name,
      lastname,
      email
    };

    console.log(user)

    fetch("http://localhost:3001/add_volunteer", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  };

  render() {
    const { chat } = this.state;

    return (
      <div id="body" onScroll={this.handleScroll}>
        <NavigationComponent />
        <CarouselComponent />
        <About />
        {chat ? this.displayChat() : null}
        <div onClick={this.hideChat} className="chat-icon-container">
          <img src={chatLogo} alt="" />
        </div>
        <div className="join-container">
          <Join join={this.handleJoin} />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
