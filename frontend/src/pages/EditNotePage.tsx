import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { IoIosArrowBack } from 'react-icons/io';

export const EditNotePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/notes/${id}`)
    .then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/api/notes/${id}`, 
    {
      title: e.target.title.value,
      content: e.target.content.value,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      navigate('/');
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="p-12">
      <div className="mb-4 flex flex-col gap-8">
        <Link to="/" className="bg-zinc-700 h-6 w-6 text-4xl text-zinc-300 flex items-center justify-center rounded-md"> <IoIosArrowBack/> </Link>
        <h1 className="font-bold text-7xl text-gray-200"> Edit Note </h1>
      </div>
      
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder='Title' className="bg-zinc-900 text-zinc-300 text-2xl focus:outline-none focus:ring-0" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea name="content" placeholder='Note details...' className="bg-zinc-900 text-zinc-300 focus:outline-none focus:ring-0 w-full h-96 overflow-auto resize-none" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button type="submit" className="bg-zinc-700 text-zinc-300 p-2 w-24 h-10 justify-start rounded-md"> Edit </button>
      </form>
    </div>
  )
}