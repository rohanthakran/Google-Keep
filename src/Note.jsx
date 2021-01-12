import React from 'react';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
const Note =(props) =>{
    return (
        <React.Fragment>
        
        
            <div className="note">

                <div className="head"><h1 style ={{  wordWrap: "break-word"}}>{props.title}</h1></div>    
                <br/>
                <p style ={{  wordWrap: "break-word"}}>{props.content}</p>
                
               
               <div className="mybutton1"> <button  onClick ={() =>{props.deleteItem(props.id)}}>
                <DeleteSharpIcon style ={{fontSize :"35px",  backgroundColor:"yellow" , cursor: "pointer", outline :"none"}}/>
                </button>
            </div>
            </div> 
            
        </React.Fragment>
    )
}
export default Note