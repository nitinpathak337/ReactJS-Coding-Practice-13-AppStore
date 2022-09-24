// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, changeCategory, isActive} = props
  const {displayText, tabId} = tabItem

  const onChange = () => {
    changeCategory(tabId)
  }

  const active = isActive ? 'active' : ''

  return (
    <li className="list-item">
      <button type="button" className={`button ${active}`} onClick={onChange}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
