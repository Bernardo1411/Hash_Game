import React from 'react'
import './block.css'

const Block = props =>{
    const ListBlocks = props.name.map(block=>{
        return(
            <div className="block" key={block.id} onClick={ e => props.click(block.id)}>
                {block.value}
            </div>
        )
    })

    return ListBlocks
}

export default Block