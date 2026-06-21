import React, { useState, useEffect } from 'react'
import { useFolders } from '../context/FolderContext'
import { Folder } from 'lucide-react';
import { useNote } from '../context/NoteContext';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditNote() {
    const { id } = useParams();
    const { getNoteById, updateNote } = useNote();
    const { folders } = useFolders();
    const navigate = useNavigate();
    
    const note = getNoteById(id);
    
    
    const [title, setTitle] = useState('');
    const [folder, setFolder] = useState('Favourited');
    const [content, setContent] = useState('');
    
    
    useEffect(() => {
        if (note) {
            setTitle(note.title || '');
            setFolder(note.folder || 'Favourited');
            setContent(note.data || '');
        }
    }, [note]); 

    if (!note) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-2xl text-red-500'>Note not found!</h1>
                    <Link to='/' className='mt-4 inline-block px-4 py-2 bg-blue-500 rounded'>Go Back</Link>
                </div>
            </div>
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateNote(id, { title, folder, content });
        navigate('/');
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center pt-3'>
            <h1 className='text-2xl'>Edit Note - {note.title}</h1>
            <div className="w-full h-screen p-5">
                <form className='flex flex-col gap-4 h-full' onSubmit={handleSubmit}>
                    <div className="flex gap-2 items-center">
                        <label htmlFor="note_title" className='text-xl'>Title</label>
                        <input 
                            required 
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} 
                            id='note_title' 
                            placeholder='Note Title...' 
                            className='rounded w-full border border-mist-600 px-3 py-1.5 focus:ring-1 focus:ring-mist-900' 
                        />
                    </div>
                    
                    <div className="flex gap-2 items-center">
                        <label htmlFor="folder" className='text-xl'><Folder /></label>
                        <select 
                            required 
                            id="folder" 
                            value={folder}
                            onChange={(e) => setFolder(e.target.value)} 
                            className='px-3 py-1.5 bg-mist-700 rounded'
                        >
                            {folders.map((folderItem, index) => (
                                <option value={folderItem.title} key={index}>
                                    {folderItem.title}
                                </option>
                            ))}
                        </select>   
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="note_content" className='text-xl'>Content</label>
                        <textarea 
                            required 
                            value={content}
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder='Type Something...' 
                            className='rounded w-full h-full border border-mist-600 px-3 py-1.5 focus:ring-1 focus:ring-mist-900 flex-1 resize-none'
                        />
                    </div>
                    
                    <div className='flex gap-2'>
                        <button className='px-3 py-2 bg-indigo-500 rounded' type='submit'>Save</button>
                        <Link className='px-3 py-2 bg-red-500 rounded' to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}