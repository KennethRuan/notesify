import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

type NotesCardProps = {
  note: any
}

const NotesCard = ({
  note
}: NotesCardProps) => {
  return (
    <Link to={`/edit-note/${note.id}`}>
      <div className="w-full max-h-full aspect-square border-zinc-400 border-2 rounded-md p-4 text-slate-600">
        <h1 className="font-bold text-2xl truncate"> {note.title} </h1>
        <div className="text-sm overflow-ellipsis overflow-hidden"> {note.content} </div>
      </div>
    </Link>
  )
}

type NotesGridProps = {
  children: React.ReactNode
}

const NotesGrid = ({
  children
}: NotesGridProps) => {
  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(min(300px,50%),1fr))]">
      {children}
    </div>
  )
}


export const Notes = () => {

  const [notes, setNotes] = React.useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/notes', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      setNotes(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div className="w-full">
      <NotesGrid>
        <Link to="/create-note">
          <div className="border-zinc-400 border-2 flex items-center justify-center w-full h-full rounded-md">
            <FaPlus className="text-zinc-300 text-4xl"/>
          </div>
        </Link>
        {notes.map(note => (
          <NotesCard key={note.id} note={note} />
        ))}
      </NotesGrid>
    </div>
  );
}