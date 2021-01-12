import React, {useState} from 'react';
import Header from './Header'
import CreateNote from './CreateNote.jsx'
import Note from './Note.jsx'

const App =() =>{
    const [addItem,setAddItem] = useState([])
    const addNote = (note) =>{
            setAddItem((prevData) =>{
                return [...prevData,note];
            })
    }   
    const onDelete = (id) =>{
        setAddItem((olddata) =>{
        return olddata.filter((curdata,indx) =>{
                    return indx !==id;
            })
        })
    }
    return ( 
    <React.Fragment>
        <Header/>
        
        <CreateNote passNote ={addNote}/>
      <div className= "container1">
       <div className="cont">
        {addItem.map((val,index) =>{
            return (
                <Note key ={index}
                id={index}
                title = {val.title}
                content = {val.content}
                deleteItem = {onDelete}
                />
                )
        })}
        </div> 
        </div>
    
       
    </React.Fragment>
        )
}
export default App