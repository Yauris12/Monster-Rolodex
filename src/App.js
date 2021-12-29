import { Component } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monster: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }))
  }

  render() {
    const { monster, searchField } = this.state
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    )
  }
}

export default App
