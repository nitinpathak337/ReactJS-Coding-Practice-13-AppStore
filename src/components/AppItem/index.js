// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="list-item-app">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
