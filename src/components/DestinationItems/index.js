import './index.css'

const Userall = props => {
  const {userDetails, deleteUser} = props
  const {logoUrl, timeAccessed, title, id, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <p className="user-name"> {timeAccessed} </p>
      <img src={logoUrl} className="profile-pic" alt="domain logo" />
      <div className="user-details-container">
        <p className="user-designation"> {title} </p>
        <p className="user-designation"> {domainUrl} </p>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default Userall
