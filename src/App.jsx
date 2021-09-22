import React, {useState,useEffect} from 'react';
import Header from './Header'
import CreateNote from './CreateNote.jsx'
import Note from './Note.jsx'

const App =() =>{
    const [addItem,setAddItem] = useState([])
    useEffect(() =>{
          const locaTodos = localStorage.getItem("addItem");
          if(locaTodos){
              setAddItem(JSON.parse(locaTodos))
          }  
    },[])
    const addNote = async note =>{
            setAddItem((prevData) =>{
                return [...prevData,note];
            })
    }   
    useEffect(() =>{
        localStorage.setItem("addItem",JSON.stringify(addItem))
    },[addItem])

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
