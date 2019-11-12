package ru.sberbank.notes.service;

import org.springframework.stereotype.Service;
import ru.sberbank.notes.entity.Note;
import ru.sberbank.notes.repository.NoteRepository;

import java.util.List;

/**
 * @author Aleksey Rud
 */
@Service
public class NoteService {
	private final NoteRepository noteRepository;

	public NoteService(NoteRepository noteRepository) {
		this.noteRepository = noteRepository;
	}

	public List<Note> findAll(){
		return (List<Note>) noteRepository.findAll();
	}
}
