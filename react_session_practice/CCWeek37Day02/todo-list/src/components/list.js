import React from 'react'
import Item from './item'
export default function List(props) {

    return (
        <div className="list">
            {
                props.list.map((item, index) => {
                    return <Item key={index} item={item} />
                })
            }
        </div>
    )
}
