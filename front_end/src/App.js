import React from "react";
import NavigationComponent from "./components/Nav";
import CarouselComponent from "./components/Carousel";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/locations")
      .then(response => response.json())
      .then(data => {
        this.setState({ locations: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    return (
      <div>
        <NavigationComponent />;
        <CarouselComponent />
      </div>
    );
  }
}

export default App;
