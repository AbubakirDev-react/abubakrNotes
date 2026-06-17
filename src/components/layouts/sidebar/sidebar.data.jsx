import { NotebookTextIcon,StarIcon,TrashIcon } from "lucide-react";

const sidebarHeaderData =  [
        {
            id: 1,
            title: 'All Notes',
            icon: <NotebookTextIcon color="indigo" />,
            href: '/all-notes',
            color: 'text-indigo-500',
            notes: 24
        },
        {
            id: 2,
            title: 'Trash',
            icon: <TrashIcon color="red" />,
            href: '/trash',
            color: 'text-red-600',
            notes: 5
        },
        {
            id: 3,
            title: 'Favourites',
            icon: <StarIcon color="orange" />,
            href: '/favourites',
            color: 'text-orange-500',
            notes: 3
        }
    ]

export const UserProfile = {
    id: 1,
    name: 'Abubakr',
    email: 'abubakr@example.com',
    avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4'
}

export default sidebarHeaderData