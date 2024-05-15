import {Component} from 'react'

import './index.css'

import Userall from '../DestinationItems'

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({usersDetailsList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = id => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(each => each.id !== id)
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput} = this.state
    const updatedHistoryList = this.filterHistoryList()
    return (
      <div className="app-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            placeholder="Search history"
            className="search-input"
          />
        </div>
        {updatedHistoryList.length === 0 ? (
          <p>There is no history to show</p>
        ) : (
          <ul className="list-container">
            {updatedHistoryList.map(eachUser => (
              <Userall
                userDetails={eachUser}
                key={eachUser.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
