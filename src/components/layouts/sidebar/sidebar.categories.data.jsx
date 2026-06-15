import {NotebookTextIcon} from "lucide-react";


const sidebarCategoriesData =  [
        {
            id: 1,
            title: 'Work',
            icon: <NotebookTextIcon color="blue" />,
            notes: 8,
            href: '/work'
        },
        {
            id: 2,
            title: 'Personal',
            icon: <NotebookTextIcon color="green" />,
            notes: 5,
            href: '/personal'
        },
        {
            id: 3,
            title: 'Ideas',
            icon: <NotebookTextIcon color="yellow" />,
            notes: 3,
            href: '/ideas'
        },
        {
            id: 4,
            title: 'Projects',
            icon: <NotebookTextIcon color="purple" />,
            notes: 2,
            href: '/projects'
        },
        {
            id: 5,
            title: 'Study',
            icon: <NotebookTextIcon color="red" />,
            notes: 4,
            href: '/study'
        }
    ]


export default sidebarCategoriesData