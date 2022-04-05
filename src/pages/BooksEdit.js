import React, { useEffect, useState } from 'react'
import { Stack,TextField,PrimaryButton } from '@fluentui/react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


export default function BooksEdit() {
  const location = useLocation();
  const [pageData,setPageData] = useState({
    "name": "",
    "author": "",
    "imgUrl": "",
    "about": ""
  })
  const onChangeText = (e)=>{
  setPageData({...pageData,[e.target.name]:e.target.value})
  }
  function editBook()
  {
    axios.put("https://api-bookseller.herokuapp.com/books/"+location.state.id,pageData).then(response=>{
      if(response.status === 200)
      {
        alert("Books are changed successfully!")
      }else{
        alert("Books are not changed!")
      }
    })
  }
  function fetchBookById(){
    axios.get("https://api-bookseller.herokuapp.com/books/"+location.state.id).then(response=>setPageData(response.data));
  }
  useEffect(()=>{
    fetchBookById();
  },[])
  return (
    <div style={{width:"100%",paddingLeft:50}}>
    <div className='content'>
    <div className='content-header'>Books Edit</div>
    <Stack tokens={{childrenGap:20}} styles={{root:{width:"50%", marginLeft:10, marginTop:10}}}>
      <TextField label='Name' name='name' value={pageData.name} onChange={onChangeText} placeholder='Please enter name here'/>
      <TextField label='Img' name='imgUrl' value={pageData.imgUrl} onChange={onChangeText} placeholder='Please enter img url here'/>
      <TextField label='Author' name='author' value={pageData.author} onChange={onChangeText} placeholder='Please enter author here'/>
      <TextField label='About' name='about' value={pageData.about} onChange={onChangeText} placeholder='Please enter about here'/>
      <PrimaryButton text='Edit Book' style={{width:120,height:40}} onClick={()=>editBook()}/>
    </Stack>
    </div>
    </div>
  )
}
