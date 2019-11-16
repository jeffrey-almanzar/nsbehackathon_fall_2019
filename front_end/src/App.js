import React from 'react';
import NavigationComponent from './components/Nav';
import CarouselComponent from './components/Carousel'; 
import Search from './components/Search';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <NavigationComponent/>
        <CarouselComponent />
        <Search />
      </div>
    )
  }
}

export default App;
