import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const NoteContext = createContext(null);

export default function NoteProvider({children}){
    const [notes,setNotes] = useState(()=>{
        const saved = localStorage.getItem('notes')
        if(saved){
            return JSON.parse(saved)
        } else {
            return []
        }
    })
    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
    function createNote(title,folder,data){
        setNotes([...notes,{id:crypto.randomUUID(),title:title,folder:folder,data:data}])
    }
    const [activeNote,setActiveNote] = useState(notes[0])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const fetchNotes = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const data = response.data
            setNotes([...notes,data])
            setLoading(false)
        } catch(error){
            console.log('Error',error)
            setLoading(false)
        }
    }
    fetchNotes()
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }

    return(
        <NoteContext.Provider value={{ notes,createNote,activeNote,setActiveNote }}>{children}</NoteContext.Provider>
    )
}

export function useNote(){
    const context = useContext(NoteContext);
    return context
}