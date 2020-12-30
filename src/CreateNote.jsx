import React ,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

const CreateNote = (props) =>{
    const [note, setNote]  = useState({
        title : "",
        content : "",
    });
const addEvent = () =>{
    props.passNote(note)
    setNote({
        title: "",
        content:""
    })
}

    const inputEvent = (event) =>{

        // const value = event.target.value;
        // const name = event.target.value;

        const {name,value} = event.target;
        setNote((prevData) =>{
            return {
                ...prevData,
                [name] :value,
            }
        })

        console.log(note);
    }
    return (
        <React.Fragment>
        <div className="main_note">
         <form>
            <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>
    
            <textarea rows="4" cols="50" maxlength="50" name="content" value={note.content} onChange={inputEvent}  placeholder="Write your Note"></textarea>
            
            </form>
            <Button onClick={addEvent}>
                <AddCircleOutlineSharpIcon/>
            </Button>
        </div>
        </React.Fragment>
    )
}
export default CreateNote