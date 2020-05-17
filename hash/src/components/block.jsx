import React from 'react'
import './block.css'

export default props =>
    <div className="block" onClick={ e => props.click(props.name)}>
        {props.name.substr(0,1)}
    </div>
