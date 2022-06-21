import React , {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from "./modal";


function App() {
    const [newItem, setNewItem] = React.useState("");
    const [AddItem, setAddItem] = React.useState([]);
    const [openM,setOpenM]=React.useState(false);
   
        function detectChange(event) {
        const nItem = event.target.value;
        setNewItem(nItem);
    }
    function saveChange() {

    
        setAddItem((prevItem) => {
            if (newItem !== "") {
                return [
                    ...prevItem, newItem
                ];
            }
            else {
                alert("please enter something");
                    return [...prevItem]
            }
        })
        setNewItem("");
    }
    
    function deleteItem(index, name) {
      
        if (name === "yes") {
            setAddItem((previous) => {
                return previous.filter((element, i) => {
                    return i !== index;
                })
            })

        }
        
    }

    return <div >
        <div className="todo_wrapper">
            <h1>to-do-list</h1>
            <input type="text" onChange={detectChange} value={newItem} />
            
            <button className="addButton" onClick={saveChange}>Add</button>
            <ul>
                {AddItem.map((item, index) => {
                    return <li className="todo_list" key={index} >
                        {item}
                        <span className="action_btn" >
                             <Modal id={index} delete={deleteItem}/>
                        </span>
                    </li>
                })}
            </ul>
        </div>
    </div>
}
export default App;