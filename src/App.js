import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
class App extends Component {
  constructor(){
    super();
      this.state = {
        monsters: [],
        searchField: ''
      }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  handleChange = (monster) => {
    this.setState({searchField : monster.target.value});
  }
  render(){
    const {monsters, searchField} = this.state;
    const  filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
