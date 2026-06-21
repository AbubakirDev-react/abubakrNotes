import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MoreVertical, Pencil, Trash2 } from 'lucide-react'
import { useNote } from '../../context/NoteContext'
import { Link } from 'react-router-dom';

export default function Dropdown({note}) {
  const {deleteNote} = useNote();
  return (
    <Menu>
      <MenuButton><MoreVertical /></MenuButton>
      <MenuItems anchor="bottom" className='w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0'>
        <MenuItem>
          <Link className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 " to={`edit/${note.id}`}>
            <Pencil/>
            Edit
          </Link>
        </MenuItem>
        <MenuItem>
          <a className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-red-400" onClick={()=>deleteNote(note.id)}>
            <Trash2/>
            Delete
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}