import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const applyStyle = isActive ? 'add-style' : ''

  const byClickingTab = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-list-item">
      <button className="tab-button" type="button" onClick={byClickingTab}>
        <p className={`tab-name ${applyStyle}`}>{displayText}</p>
        <hr className={`${applyStyle}`} />
      </button>
    </li>
  )
}

export default TabItem
