import React, { useState } from 'react'
import { Stack,TextField,PrimaryButton } from '@fluentui/react'
import { HandRight16Filled } from '@fluentui/react-icons'

export default function BooksCreate() {
  const [pageData,setPageData] = useState({
    "id": "",
    "name": "",
    "author": "",
    "imgUrl": "",
    "about": ""
  })
  return (
    <div style={{width:"100%",paddingLeft:50}}>
    <div className='content'>
    <div className='content-header'>Books Create</div>
    <Stack tokens={{childrenGap:20}} styles={{root:{width:"50%", marginLeft:10, marginTop:10}}}>
     <TextField label='ID' name='id' value={pageData.id} placeholder='Please enter ID here'/>
      <TextField label='Name' name='name' value={pageData.name} placeholder='Please enter name here'/>
      <TextField label='Img' name='imgUrl' value={pageData.imgUrl} placeholder='Please enter img url here'/>
      <TextField label='Author' name='author' value={pageData.author} placeholder='Please enter author here'/>
      <TextField label='About' name='about' value={pageData.about} placeholder='Please enter about here'/>
      <PrimaryButton text='Create Book' style={{width:120,height:40}}/>
    </Stack>
    </div>
    </div>
  )
}
