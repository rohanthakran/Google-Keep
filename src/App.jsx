import React from 'react';
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote.jsx'
import Note from './Note.jsx'

const App =() =>{
    return ( 
    <React.Fragment>
        <Header/>
        <Footer/>
        <CreateNote/>
        <Note/>
    </React.Fragment>
        )
}
export default App