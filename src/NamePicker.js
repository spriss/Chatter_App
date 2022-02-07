import "./NamePicker.css"
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState('');
    const {setUserName} = props;

    function set() {
        setName(name);
        props.setUserName(name);
        setEditName(false);
    }

    function onKeyPress(e) {
        if (e.key === "Enter") {
          set();
        }
    }

    function edit() {
        setEditName(true);
        setName('');
    }

    if(editName === true) {
        return (
            <div className="enter-name">
                <input 
                    className="name-input" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={onKeyPress}
                />
                <button 
                    className="enter"
                    onClick={set} 
                    style={{}}>
                    <FiEdit style={{height:15, width:15}} />
                </button>
            </div>
        );
    } else {
        return (
            <div className="enter-name">
                <span className='username'>Hello, {name} </span>
                
                <button 
                    className="enter2"
                    onClick={edit} 
                    style={{}}>
                    <FiEdit style={{height:15, width:15}} />
                </button>
            </div>
        );
    }
}


export default NamePicker;