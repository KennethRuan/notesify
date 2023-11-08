import React from "react";
import { Notes } from "../components/Notes";

export const NotesPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-6 px-12 py-6 overflow-x-hidden">
      <div className= "w-full h-20 flex flex-row justify-between">
        <h1 className="font-bold text-7xl text-gray-200"> Notesify </h1>
      </div>
      <Notes />
    </div>
  );
}