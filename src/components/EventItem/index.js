// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const imageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickImage = () => {
    setActiveId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="button" onClick={onClickImage}>
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
