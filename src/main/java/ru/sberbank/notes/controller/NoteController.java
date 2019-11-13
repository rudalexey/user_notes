package ru.sberbank.notes.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.sberbank.notes.service.NoteService;
import ru.sberbank.notes.utils.Importance;

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
		return ResponseEntity.ok(service.findNotesByFilterAndImportance(null, imp));
	}
}
