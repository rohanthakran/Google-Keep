import React from 'react';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
const Note =() =>{
    return (
        <React.Fragment>
            <div className="note">
                <h1>Title</h1>
                <br/>
                <p>This is the content</p>
                <button>
                <DeleteSharpIcon/>
                </button>
               
            </div>
        </React.Fragment>
    )
}
export default Note