package ru.sberbank.notes.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sberbank.notes.service.NoteService;

/**
 * @author Aleksey Rud
 */
@RestController
public class NoteController {

	private final NoteService service;

	public NoteController(NoteService service) {
		this.service = service;
	}

	@GetMapping("/findAll")
	public ResponseEntity findAll() {
		return ResponseEntity.ok(service.findAll());
	}
}
