import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

const CreateNote = () =>{
    return (
        <React.Fragment>
        <div className="main_note">
         <form>
            <input type="text" placeholder="Title" autoComplete="off"/>
    
            <textarea rows="4" cols="50" maxlength="50" placeholder="Write your Note"></textarea>
            
            </form>
            <Button>
                <AddCircleOutlineSharpIcon/>
            </Button>
        </div>
        </React.Fragment>
    )
}
export default CreateNote