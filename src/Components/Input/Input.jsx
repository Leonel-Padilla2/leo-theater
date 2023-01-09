import './Input.css'

const Input = ({className, ...props}) => {
  return (
    <input 
      className={`input-component ${className}`}
      required
      {...props}
    />
  )
}

export default Input