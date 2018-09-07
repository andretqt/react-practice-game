import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json"
import FriendCard from "./components/FriendCard/";
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class App extends Component {
  //define the state
  state = {
    images
  };
  rearrange = (id) => {
    console.log(id);
    this.setState(shuffle(images))
  }
  render () {
    return (
      <Wrapper>
        <Title>click game</Title>
        {this.state.images.map(image => (
          <FriendCard
          rearrange={this.rearrange}
          name={image.name}
          image={image.image}
          id={image.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
