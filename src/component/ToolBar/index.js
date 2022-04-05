import React from 'react'
import { CommandBar } from '@fluentui/react'
import { useNavigate } from 'react-router-dom'

export default function ToolBar() {
    const nav = useNavigate();
  return (
    <div>
    <CommandBar
        items={[{
            key:"add",
            text:"Create",
            iconProps:{iconName:"Add"},
            onClick:()=>{nav("/book/create")}
        }]}
    />
    </div>
  )
}
