import { createContext, useContext, useState } from "react";
import { folders as initialFolders } from "../components/sidebar/folders";


const FoldersContext = createContext(null)

const STORAGE_KEY = 'notely_folders'


function loadFolders(){
    try{
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : initialFolders
    } catch {
        return initialFolders
    }
}

export default function FolderProvider({children}){
    const [folders,setFolders] = useState(loadFolders);

    function saveFolders(updated){
        setFolders(updated)
        localStorage.setItem(STORAGE_KEY,JSON.stringify(updated))
    }
    return (
    <FoldersContext.Provider value={{
        folders,
        saveFolders
    }}>
        {children}
    </FoldersContext.Provider>)
}

export function useFolders(){
    const context = useContext(FoldersContext)
    if(!context) throw new Error('useFolders must be used inside FolderProvider')
    return context
}