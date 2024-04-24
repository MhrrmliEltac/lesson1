import './Wined.css'

const Wined = (props) => {
  return (
    <div className='container'> 
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.rating}</p>
    </div>
  )
}

export default Wined