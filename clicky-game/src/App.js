import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json"
import FriendCard from "./components/FriendCard/";

class App extends Component {
  //define the state
  state = {
    images
  };
  rearrange = (id) => {
    console.log(id);
  }
  render () {
    return (
      <Wrapper>
        <Title>click game</Title>
        {this.state.images.map(image => (
          <FriendCard
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
