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
<<<<<<< HEAD

  componentDidMount() {
    //CapitalOne API
    // fetch('http://api.reimaginebanking.com/')
    // .then((resp) => resp.json)                    //Transform the data into JSON format
    // .then(function(data) {
      
    // })
  }

  displayInfo = () => {
    const { locations } = this.state;
    const container = [];
    locations.forEach(place => {
      container.push(<Card name={place.name} address={place.address} key={place.id} />);
    });

    return <div className="main-card-container">{container}</div>;
=======
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
>>>>>>> d69e3579473e7533271ea29ccaf42ab4962bbc5a
  };

  hideChat = () => {
    this.setState({ chat: !this.state.chat });
  };

  handleScroll = () => {
    alert("You scroll")
  }

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
          <Join />
        </div>
        <Contact />
      </div>
    );
  }
}

export default App;
