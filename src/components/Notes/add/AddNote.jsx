import { Button } from '@headlessui/react'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog,Description, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'


export default function AddNote() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
      
    <Button onClick={() => setIsOpen(true)}><Plus/> New Note</Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="px-4 flex items-center justify-center bg-amber-500">
      <Fieldset className="space-y-8">
      <Legend className="text-lg font-bold">Shipping details</Legend>
      <Field>
        <Label className="block">Street address</Label>
        <Input className="mt-1 block" name="address" />
      </Field>
      <Field>
        <Label className="block">Country</Label>
        <Select className="mt-1 block" name="country">
          <option>Canada</option>
          <option>Mexico</option>
          <option>United States</option>
        </Select>
      </Field>
      <Field>
        <Label className="block">Delivery notes</Label>
        <Textarea className="mt-1 block" name="notes" />
      </Field>
    </Fieldset>
    </div>
      </Dialog>
    </div>
  )
}
