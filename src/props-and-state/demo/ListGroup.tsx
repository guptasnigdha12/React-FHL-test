import { useState } from "react";

interface Props{
    items: string[],
    heading: string,
}

function ListGroup({items, heading}: Props) {
    
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <div style={{width: '300px', textAlign: 'center'}}>
        <h1>{heading}</h1>
        { items.length === 0 && <p>No items to display</p>}
        <ul className="list-group">
            {items.map((item,index) => 
                <li key={item}
                    className={selectedIndex == index ? "list-group-item active" : "list-group-item"}>
                    {item}
                </li>)}
        </ul>
        </div>
    )
}

export default ListGroup;