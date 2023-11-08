package dev.kennethruan.notes;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    @Autowired
    private NoteRepository noteRepository;
    public List<Note> findAllNotes() {
        return noteRepository.findAll();
    }

    public Optional<Note> singleNote(ObjectId id) {
        return noteRepository.findById(id);
    }

    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    public Optional<Note> updateNote(ObjectId id, Note noteDetails) {
        Optional<Note> onote = singleNote(id);

        if (onote.isEmpty()) return onote;

        Note note = onote.get();
        note.setTitle(noteDetails.getTitle());
        note.setContent(noteDetails.getContent());

        return Optional.of(noteRepository.save(note));
    }

    public Optional<Note> deleteNote(ObjectId id) {
        Optional<Note> onote = noteRepository.findById(id);

        if (onote.isEmpty()) return onote;
        Note note = onote.get();
        noteRepository.delete(note);

        return Optional.of(note);
    }
}
