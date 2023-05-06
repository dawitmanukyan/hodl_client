import React from 'react'

const Card = (props) => {
  return (
    <div key={props.key}>
        {props.title}
    </div>
  )
}

export default Card