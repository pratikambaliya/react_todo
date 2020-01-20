import React from 'react';
import './Todolist.css';

const Todolist = (props) => {
    return(
        <div className="list">
            <p>
            <input type="text"
                onChange={props.changed}
                value={props.value} ></input>
            <span>
            <label class="container">Complete
                    <input type="checkbox" className="checkbox" value="Complete"></input>
                    <span class="checkmark"></span>
            </label>
                    <button className="btn" onClick={props.click}>Delete</button>
            </span>
      
            </p>
        
        </div>
      
    )

 
}


export default Todolist;