import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useFolders } from "./FolderContext";


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
    const {activeFolder} = useFolders();
    const [activeNote,setActiveNote] = useState(notes[0])
    

    return(
        <NoteContext.Provider value={{ notes,createNote,activeNote,setActiveNote }}>{children}</NoteContext.Provider>
    )
}

export function useNote(){
    const context = useContext(NoteContext);
    return context
}