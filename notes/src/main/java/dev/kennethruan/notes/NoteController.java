package dev.kennethruan.notes;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin
public class NoteController {

    @Autowired
    private NoteService noteService;

    // Get all notes
    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes() {
        return new ResponseEntity<List<Note>>(noteService.findAllNotes(), HttpStatus.OK);
    }

    // Get a note
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Note>> getSingleNote(@PathVariable(value = "id") ObjectId id) {
        return new ResponseEntity<Optional<Note>>(noteService.singleNote(id), HttpStatus.OK);
    }

    // Create a new Note
    @PostMapping
    public ResponseEntity<Note> createNote(@Validated @RequestBody Note note) {
        return new ResponseEntity<Note>(noteService.saveNote(note), HttpStatus.CREATED);
    }

    // Update a Note
    @PutMapping("/{id}")
    public ResponseEntity<Optional<Note>> updateNote(@PathVariable(value = "id") ObjectId id, @Validated @RequestBody Note noteDetails) {

        Optional<Note> updatedNote = noteService.updateNote(id, noteDetails);

        if (updatedNote.isEmpty()) {
            return new ResponseEntity<Optional<Note>>(updatedNote, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<Optional<Note>>(updatedNote, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteNote(@PathVariable(value = "id") ObjectId id) {
        Optional<Note> note = noteService.deleteNote(id);
        return new ResponseEntity<Optional<Note>>(note, HttpStatus.OK);
    }
}
