import React from 'react';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
const Note =(props) =>{
    return (
        <React.Fragment>
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <button  onClick ={() =>{props.deleteItem(props.id)}}>
                <DeleteSharpIcon/>
                </button>
               
            </div>
        </React.Fragment>
    )
}
export default Note