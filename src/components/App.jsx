import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

function App() {
    const [newItem, setNewItem] = React.useState("");
    const [AddItem, setAddItem] = React.useState([]);
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
                alert("Enter something!!!");
                return [...prevItem]
            }

        })
        setNewItem("");



    }
    function deleteItem(index,name) {


        if (name==="yes") {
            setAddItem((previous) => {
                return previous.filter((element, i) => {
                    return i !== index;
                })
            })
           
        }
        document.body.click();
    

        
    }
    const stylePopper = {
        backgroundColor: "#f9f9f9",
        padding: "5px",
        borderRadius: "5px",
        border: "2px solid #ccc"

    }
    function popover(index) {
        return <Popover id="popover-basic" style={stylePopper}>
        <Popover.Header as="h3">You sure you want to delete?</Popover.Header>
        <Popover.Body >
        <button type="button" className="btn btn-outline-primary" name="yes"  onClick={() => { return deleteItem(index,"yes") }} >YES</button>
        <button type="button" className="btn btn-outline-danger" name="no" style={{float:"right"}}  onClick={() => { return deleteItem(index,"no") }}>NO</button>
        </Popover.Body>
    </Popover>
    }
    return <div >
        <div className="todo_wrapper">
            <h1>to-do-list</h1>
            <input type="text" onChange={detectChange} value={newItem} />
            <button className="addButton" onClick={saveChange}>Add</button>
            <ul>
                {AddItem.map((item, index) => {
                    return <li className="todo_list" key={index} id={index} >
                        {item}
                        <span className="action_btn">
                            <OverlayTrigger rootClose={true} trigger="click" placement="right" overlay={popover(index)}>
                                <DeleteIcon/>
                            </OverlayTrigger>
                        </span>
                    </li>
                })}
            </ul>
        </div>
    </div>
}
export default App;