import React, {useContext, useState} from 'react';
import { BookContext } from '../context/BookContext';


const NewBookForm = () => {
   
    const {dispatch}=useContext(BookContext)
    const[title , setTitle]=useState("")
     const[author , setAuthor]=useState("")
     const handleSubmit = (e) => {
      e.preventDefault()
 
     dispatch({type:"ADD_BOOK", payload:{title, author}})
       setTitle("") 
        setAuthor("")
    }

    return (  
        <form onSubmit={handleSubmit}> 
            <input 
            type="text" 
            placeholder="TITLE"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required  />
            
             <input 
            type="text" 
            placeholder="AUTHOR"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required  />
            
            <input type="submit" value=" ADD BOOK" />
        </form>
     );
}
 
export default NewBookForm;