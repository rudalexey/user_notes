package ru.sberbank.notes.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sberbank.notes.entity.Note;
import ru.sberbank.notes.service.NoteService;
import ru.sberbank.notes.utils.Importance;

import java.util.UUID;

/**
 * @author Aleksey Rud
 */
@RestController
public class NoteController {

	private final NoteService service;

	public NoteController(NoteService service) {
		this.service = service;
	}

	@GetMapping("/find")
	public ResponseEntity findAll(@RequestParam(name = "filter", required = false) String filter, @RequestParam(name = "imp", required = false) Importance imp) {
		return ResponseEntity.ok(service.findNotesByFilterAndImportance(filter, imp));
	}

	@PostMapping(value = "/addOrEdit")
	public ResponseEntity edit(@RequestBody Note note) {
		return ResponseEntity.ok(service.addOrEditNote(note));
	}
	@DeleteMapping("/delete")
	public ResponseEntity edit(@RequestBody UUID id) {
		service.delete(id);
		return ResponseEntity.ok().build();
	}
}
