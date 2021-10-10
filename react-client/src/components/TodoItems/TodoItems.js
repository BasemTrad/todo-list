import React from "react";
import './TodoItems.css';

const TodoItems = (props) =>{
    const {items,deleteItem}= props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    
                    <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p> There Is Not Items</p>
    )
    return (
        <div>
         
            {ListItems}
        </div>
    )
}
export default TodoItems;