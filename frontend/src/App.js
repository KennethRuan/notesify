import { NotesPage } from "./pages/NotesPage";
import { CreateNotePage } from "./pages/CreateNotePage";
import { EditNotePage } from "./pages/EditNotePage";
import { PokePage } from "./pages/PokePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/edit-note/:id" element={<EditNotePage />} />
        <Route path="/create-note" element={<CreateNotePage />} />
        <Route path="/poke" element={<PokePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
