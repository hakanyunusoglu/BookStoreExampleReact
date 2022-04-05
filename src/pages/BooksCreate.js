import React, { useState } from 'react'
import { Stack,TextField,PrimaryButton } from '@fluentui/react'
import axios from 'axios'

export default function BooksCreate() {
  const [pageData,setPageData] = useState({
    "name": "",
    "author": "",
    "imgUrl": "",
    "about": ""
  })
  const onChangeText = (e)=>{
  setPageData({...pageData,[e.target.name]:e.target.value})
  }
  function createBook()
  {
    axios.post("https://api-bookseller.herokuapp.com/books",pageData).then(response=>{
      if(response.status === 201){
      alert("Book Created Successfully!");
      }else{
        alert("Book Created Failure!");
      }
    })
  }
  return (
    <div style={{width:"100%",paddingLeft:50}}>
    <div className='content'>
    <div className='content-header'>Books Create</div>
    <Stack tokens={{childrenGap:20}} styles={{root:{width:"50%", marginLeft:10, marginTop:10}}}>
      <TextField label='Name' name='name' value={pageData.name} onChange={onChangeText} placeholder='Please enter name here'/>
      <TextField label='Img' name='imgUrl' value={pageData.imgUrl} onChange={onChangeText} placeholder='Please enter img url here'/>
      <TextField label='Author' name='author' value={pageData.author} onChange={onChangeText} placeholder='Please enter author here'/>
      <TextField label='About' name='about' value={pageData.about} onChange={onChangeText} placeholder='Please enter about here'/>
      <PrimaryButton text='Create Book' style={{width:120,height:40}} onClick={()=>createBook()}/>
    </Stack>
    </div>
    </div>
  )
}
