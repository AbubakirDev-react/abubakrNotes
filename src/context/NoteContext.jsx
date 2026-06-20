import { createContext, useContext, useEffect, useState } from "react";


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
    function createNote(title,category,data){
        setNotes([...notes,{title:title,category:category,data:data}])
    }
    return(
        <NoteContext.Provider value={{ notes,createNote }}>{children}</NoteContext.Provider>
    )
}

export function useNote(){
    const context = useContext(NoteContext);
    return context
}