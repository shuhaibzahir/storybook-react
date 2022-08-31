
import React from 'react'
import PropTypes from 'prop-types'

import "./Button.css"
const Button = ({label, type, handleClick}) => {
  return (
    <button onClick={handleClick} className={`${type}`}>{label}</button>
  )
}


Button.propTypes={
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary","secondary"])
}

Button.defaultProps ={
    type: "primary"
}

export default Button