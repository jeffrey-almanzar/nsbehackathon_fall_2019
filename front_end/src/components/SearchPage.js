import React from "react";
import NavigationComponent from "./Nav";
import Search from "./Search";
import "../App.css";
import Card from "./Card";


class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001")
      .then(response => response.json())
      .then(data => {
        this.setState({ locations: data });
      })
      .catch(err => {
       // console.log(err);
      });
  }

  displayInfo = () => {
    const { locations } = this.state;
    const container = [];
    locations.forEach(place => {
      container.push(
        <Card
          name={place.name}
          address={place.address}
          phone={place.phone}
          key={place.id}
        />
      );
    });

    return <div className="main-card-container">{container}</div>;
  };

  handleSearch = () => {};

  handleChange = (e) => {
    if(e.target.value.length){
      fetch("http://localhost:3001/locations/"+e.target.value)
      .then(response => response.json())
      .then(data => {
        this.setState({ locations: data });
      })
      .catch(err => {
        console.log(err);
      });

    }else{
      fetch("http://localhost:3001")
      .then(response => response.json())
      .then(data => {
        this.setState({ locations: data });
      })
      .catch(err => {
        console.log(err);
      });
    }

  }

  emptyResult = () => {
    return(
      <div className="empty-result-container">
        <h2>Sorry, no results</h2>
      </div>
    )
  }

  render() {
    const { locations } = this.state;
    return (
      <div>
        <NavigationComponent />
        <Search handleChange={this.handleChange} handleClick={this.handleSearch} />
        {locations.length ? this.displayInfo() : this.emptyResult()}
      </div>
    );
  }
}

export default SearchPage;