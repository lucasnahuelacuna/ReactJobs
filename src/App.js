import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspiring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character]});
  }

  render() {
    return (
      <div className="container">
        <h1>Jobs</h1>
        <p>Add a character with name and a job to the table</p>
        <Table 
          characterData={this.state.characters} 
          removeCharacter={this.removeCharacter}  
        />
        <h2>Add New</h2>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
  
}

export default App;
