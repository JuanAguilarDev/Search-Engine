import './style.css'

export default function SearchResultsItem({key, name, email}) {
  return (
    <div className="item" key={key}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}
