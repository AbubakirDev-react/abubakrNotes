import { NotebookTextIcon,StarIcon,TrashIcon } from "lucide-react";

const sidebarHeaderData =  [
        {
            id: 1,
            title: 'All Notes',
            icon: <NotebookTextIcon color="indigo" />,
            href: '/all-notes',
            notes: 24
        },
        {
            id: 2,
            title: 'Trash',
            icon: <TrashIcon color="red" />,
            href: '/trash',
            notes: 5
        },
        {
            id: 3,
            title: 'Favourites',
            icon: <StarIcon color="orange" />,
            href: '/favourites',
            notes: 3
        }
    ]

export default sidebarHeaderData