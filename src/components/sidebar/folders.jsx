import { Clock9Icon, Folder, NotebookText, ProjectorIcon, StarIcon, Tag, Trash, Trash2Icon } from "lucide-react";

export const folders = [
    {
        
        title:'Favourited',
        icon:<StarIcon size={20} />,
        notes: 3        
    },
    {
        
        title:'Recently',
        icon:<Clock9Icon size={20} />,
        notes: 5        
    },
    {
        
        title:'Work',
        icon:<Folder size={20} />,
        notes: 6        
    },
    {
        
        title:'Personal',
        icon:<Folder size={20} />,
        notes: 4        
    },
    {
        
        title:'Project',
        icon:<Tag size={20} />,
        notes: 14        
    }
]