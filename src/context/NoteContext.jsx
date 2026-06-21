import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useFolders } from "./FolderContext";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
    function createNote(title,folder,data){
        setNotes([...notes,{id:crypto.randomUUID(),title:title,folder:folder,data:data}])
    }
    const {activeFolder} = useFolders();
    const [activeNote,setActiveNote] = useState(notes[0])
    
    function deleteNote(id){
        const filteredNotes = notes.filter(note=>note.id!==id)
        setNotes(filteredNotes)
        navigate('/')
        setActiveNote(filteredNotes[0]) 
    }
    function getNoteById(id){
        const note = notes.find(note=>note.id===id)
        return note
    }
    const updateNote = (id, updatedData) => {
    setNotes(prevNotes => {
        const updated = prevNotes.map(note => 
            note.id === id ? { ...note, ...updatedData } : note
        );
        console.log('Updated notes:', updated);
        return updated;
    });
};
    return(
        <NoteContext.Provider value={{ notes,createNote,activeNote,setActiveNote,deleteNote,getNoteById,updateNote }}>{children}</NoteContext.Provider>
    )
}

export function useNote(){
    const context = useContext(NoteContext);
    return context
}